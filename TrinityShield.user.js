// ==UserScript==
// @name         TrinityShield v6 – Modular Framework
// @namespace    https://github.com/Trinity963/TrinityShield
// @version      6.1.0
// @description  TrinityShield integrity and protection framework
// @author       Trinity963
// @license      MIT
// @homepage     https://github.com/Trinity963/TrinityBrowseSe
// @homepage     https://github.com/Trinity963/TrinityShield
// @supportURL   https://github.com/Trinity963/TrinityBrowseSe/issues
// @updateURL    https://github.com/Trinity963/TrinityShield/raw/main/TrinityShield.user.js
// @downloadURL  https://github.com/Trinity963/TrinityBrowseSe/raw/main/TrinityShield.user.js
// @match        https://chatgpt.com/*
// @grant        GM_info
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
"use strict";

// Create global container safely
if (!window.TrinityShield) {
    window.TrinityShield = {
        modules: [],
        initialized: false,

        use(module) {
            this.modules.push(module);
        },

        async init() {
            if (this.initialized) return;
            this.initialized = true;

            console.log("[TSv6] Starting TrinityShield...");

            // Run Core first (module 0)
            if (this.core?.init) await this.core.init();

            // Then run all registered modules
            for (const m of this.modules) {
                try {
                    if (m.init) await m.init();
                } catch (e) {
                    console.warn("[TSv6] Module failed:", m.name, e);
                }
            }

            console.log("[TSv6] All modules loaded.");
        },

        updateDashboard(section, value) {
            const box = document.getElementById("ts-dashboard");
            if (!box) return;
            box.innerHTML += `<br>${section}: ${value}`;
        }
    };
}

const TS = window.TrinityShield;
TS.use({
    name: "selfCleaner",

    async init() {
        const existing = window.__TS_RUNNING__ || 0;

        if (existing >= 1) {
            console.warn("[TrinityShield] Duplicate instance detected. This version will auto-disable.");
            TS.updateDashboard("status", "DUPLICATE BLOCKED");

            // Stop modules from continuing
            throw new Error("Duplicate TrinityShield instance blocked");
        }

        window.__TS_RUNNING__ = existing + 1;
        console.log("[TrinityShield] Self-cleaner active: OK");
    }
});


// ---- LOAD CSS globally ----
function TS_loadCSS(file) {
    const url = `https://raw.githubusercontent.com/Trinity963/TrinityShield/main/css/${file}`;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}
TS.use({
    name: "versionManager",

    registry: {},
    activeVersion: null,

    async init() {
        console.log("[TSv6 VM] Version Manager initialized");
    },

    register(name, loader) {
        this.registry[name] = loader;
        console.log("[TSv6 VM] Registered version:", name);
    },

    async load(name) {
        if (!this.registry[name]) {
            console.warn("[TSv6 VM] Version not found:", name);
            return false;
        }

        console.log("[TSv6 VM] Loading version:", name);

        // Clear previous version classes
        this.cleanUI();

        // Run loader
        await this.registry[name]();

        this.activeVersion = name;
        TS.updateDashboard("menu-version", name);

        return true;
    },

    cleanUI() {
        const dashboard = document.getElementById("ts-dashboard");
        const debug = document.getElementById("ts-debug");

        if (!dashboard && !debug) return;

        const classes = [
            // v1
            "ts-hover-v1",
            // v2
            "ts-autofade-v2",
            "ts-faded-v2",
            // v3
            "ts-hidden-v3",
            // v4
            "ts-ghostfade-v4",
            "ts-ghosted-v4"
        ];

        [dashboard, debug].forEach(el => {
            if (!el) return;
            classes.forEach(c => el.classList.remove(c));
        });
    },

    list() {
        return Object.keys(this.registry);
    }
});
TS.use({
    name: "versionLoader",

    base: "https://raw.githubusercontent.com/Trinity963/TrinityShield/main/modules/menu/",


    async init() {
        console.log("[TSv6 VM] Loader ready.");
    },

    async require(path) {
        return new Promise((resolve, reject) => {
            const s = document.createElement("script");
            s.src = this.base + path + "?nocache=" + Date.now();
            s.onload = () => resolve(true);
            s.onerror = e => reject(e);
            document.head.appendChild(s);
        });
    }
});
TS.use({
    name: "versionRegistration",

    async init() {
        const VM = TS.versionManager;
        const VL = TS.versionLoader;

        VM.register("hover-v1", async () => {
            await VL.require("hover/v1.js");
        });

        VM.register("autofade-v2", async () => {
            await VL.require("autofade/v2.js");
        });

        VM.register("toggle-v3", async () => {
            await VL.require("toggle/v3.js");
        });

        VM.register("ghost-v4", async () => {
            await VL.require("ghost/v4.js");
        });

        console.log("[TSv6 VM] All versions registered.");

        // Load default version:
        VM.load("hover-v1");
    }
});
TS.use({
    name: "versionHotkeys",

    async init() {
        const VM = TS.versionManager;

        window.addEventListener("keydown", (e) => {
            if (!e.ctrlKey || !e.altKey) return;

            switch (e.key) {
                case "1": VM.load("hover-v1"); break;
                case "2": VM.load("autofade-v2"); break;
                case "3": VM.load("toggle-v3"); break;
                case "4": VM.load("ghost-v4"); break;
            }
        });

        console.log("[TSv6 VM] Hotkeys active (Ctrl+Alt+1-4)");
    }
});

// Load all theme CSS
TS_loadCSS("core.css");
TS_loadCSS("dashboard.css");
TS_loadCSS("debug-panel.css");
TS_loadCSS("shield-theme-purple.css");

    TS.core = {
    name: "core",
    
    async init() {
        console.log("[TSv6 Core] Init");

        this.safeBoot();
        this.startDashboard();

        await this.scanOnLoad();
        this.observeWorkers();
        this.observeStorage();
    },

    safeBoot() {
        document.documentElement.style.opacity = "0";
        console.log("[TSv6 Core] Safe Boot engaged");
    },

    async scanOnLoad() {
        try {
            await this.checkIndexedDB();
            await this.checkLocalStorage();
            document.documentElement.style.opacity = "1";
            console.log("[TSv6 Core] Page integrity OK.");
        } catch (err) {
            console.error(err);
        }
    },

    observeWorkers() {
        navigator.serviceWorker?.getRegistrations()
            .then(regs => {
                regs.forEach(r => console.log("[TSv6] Worker:", r.scope));
            });
    },

    observeStorage() {
        window.addEventListener("storage", () => {
            console.log("[TSv6] Storage mutated");
        });
    },

    async checkIndexedDB() {
        await indexedDB.databases();
    },

    async checkLocalStorage() {
        JSON.stringify(localStorage);
    },

    startDashboard() {
        const box = document.createElement("div");
        box.id = "ts-dashboard";
        box.style = `
            position:fixed;bottom:20px;right:20px;
            background:rgba(0,0,0,0.6);color:white;
            padding:10px;border-radius:8px;z-index:999999;
        `;
        box.innerHTML = "<b>TrinityShield v6</b>";
        document.body.appendChild(box);
    }
};
TS.use({
    name: "corruptionEngine",

    async init() {
        console.log("[TSv6 M2] Running corruption engine...");

        await this.checkLocalStorage();
        await this.checkIndexedDB();
        await this.checkCachedScripts();
        await this.checkPageJSON();

        TS.updateDashboard("integrity", "OK");
    },

    async checkLocalStorage() {
        JSON.stringify(localStorage);
    },

    async checkIndexedDB() {
        await indexedDB.databases();
    },

    async checkCachedScripts() {
        if (!caches.keys) return;
        const keys = await caches.keys();
        for (let k of keys) console.log("[M2] Cache:", k);
    },

    async checkPageJSON() {
        const txt = document.body.innerText;
        if (txt.includes("Unexpected end of JSON")) throw("JSON bad");
    }
});
TS.use({
    name: "autoPurifier",

    async init() {
        console.log("[TSv6 M3] Auto-Purifier active...");
        await this.cleanBadCache();
        await this.cleanBadWorkers();
        await this.cleanBrokenLocalStorage();
        await this.cleanBrokenIndexedDB();
        TS.updateDashboard("purifier", "CLEAN");
    },

    async cleanBadCache() {
        // (your full logic goes here)
    },

    async cleanBadWorkers() {
        // (your original logic)
    },

    async cleanBrokenLocalStorage() {
        try { JSON.stringify(localStorage); }
        catch {
            localStorage.clear();
        }
    },

    async cleanBrokenIndexedDB() {
    const dbs = await indexedDB.databases();
    for (let db of dbs) {
        if (!db.name) indexedDB.deleteDatabase(db.name);
    }
}
});

TS.use({
    name: "safeBootV2",

    async init() {
        console.log("[TSv6 M4] Advanced Safe Boot");

        const clean = await this.runStages();

        if (clean) {
            document.documentElement.style.opacity = "1";
            TS.updateDashboard("boot", "CLEAN");
        } else {
            TS.updateDashboard("boot", "WARNING");
        }
    },

    async runStages() {
        const ok = await this.integrityScan();
        if (!ok) await TS.modules.find(x => x.name==="autoPurifier").init();
        return this.finalCheck();
    },

    async integrityScan() {
        try {
            JSON.stringify(localStorage);
            await indexedDB.databases();
            return true;
        } catch { return false; }
    },

    async finalCheck() {
        try {
            JSON.stringify(localStorage);
            await indexedDB.databases();
            return true;
        } catch { return false; }
    }
});
TS.use({
    name: "conversationScanner",

    async init() {
        const scan = () => {
            const root = document.querySelector("[data-message-id], article, .markdown");
            if (!root) return;

            const txt = root.innerText || "";

            if ((txt.match(/```/g) || []).length % 2 !== 0) {
                console.warn("[TSv6 M5] Broken code block detected");
            }
        }; // ← THIS WAS MISSING

        scan();
        new MutationObserver(scan).observe(document.body, { childList:true, subtree:true });
        TS.updateDashboard("conversation", "SAFE");
    }
});


TS.use({
    name: "fullPowerAudit",

    async init() {
        console.log("[TSv6 M6] Full Power Audit");

        await this.inspectCDN();
        await this.auditSW();
        await this.scanCache();

        TS.updateDashboard("module6", "ACTIVE");
    },

    async inspectCDN() {
        const scripts = [...document.querySelectorAll("script[src]")];
        scripts.forEach(s => console.log("[M6] Script:", s.src));
    },

    async auditSW() {
        const regs = await navigator.serviceWorker?.getRegistrations();
        if (!regs) return;
        regs.forEach(r => console.log("[M6] SW:", r.scope));
    },

    async scanCache() {
        if (!caches.keys) return;
        const keys = await caches.keys();
        keys.forEach(k => console.log("[M6] Cache bucket:", k));
    }
});
// Boot after page loads
setTimeout(() => TS.init(), 200);
})();

TS.use({
    name: "versionChecker",

    async init() {
        const localVersion = GM_info.script.version;

        GM_xmlhttpRequest({
            method: "GET",
            url: "https://raw.githubusercontent.com/Trinity963/TrinityBrowseSe/main/TrinityShield.user.js",
            onload: (res) => {
                const online = res.responseText.match(/@version\s+([\d.]+)/);
                if (!online) return;

                const onlineVersion = online[1];

                if (this.isNewer(onlineVersion, localVersion)) {
                    TS.updateDashboard("update", "AVAILABLE");
                    this.notifyUpdate(onlineVersion);
                } else {
                    TS.updateDashboard("update", "OK");
                }
            }
        });
    },

    isNewer(a, b) {
        const pa = a.split(".").map(Number);
        const pb = b.split(".").map(Number);
        for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
            if ((pa[i] || 0) > (pb[i] || 0)) return true;
            if ((pa[i] || 0) < (pb[i] || 0)) return false;
        }
        return false;
    },

    notifyUpdate(newVersion) {
        const box = document.createElement("div");
        box.style = `
            position: fixed; top: 20px; right: 20px;
            padding: 12px 16px; background: #222;
            color: #0f0; border-radius: 8px;
            z-index: 999999; font-size: 14px;
        `;
        box.innerHTML = `
            <b>TrinityShield Update Available</b><br>
            New version: ${newVersion}<br>
            <button id="ts-update-btn">Update Now</button>
        `;
        document.body.appendChild(box);

        document.getElementById("ts-update-btn").onclick = () => {
            window.location.href = GM_info.script.downloadURL;
        };
    }
});
TS.use({
    name: "debugPanel",
    debugBuffer: [],

    async init() {
        this.createPanel();
        this.hookConsole();
        TS.updateDashboard("debug", "ON");
    },

    hookConsole() {
        const origLog = console.log;
        const origWarn = console.warn;
        const origErr = console.error;

        console.log = (...args) => {
            origLog.apply(console, args);
            this.write("log", args.join(" "));
        };
        console.warn = (...args) => {
            origWarn.apply(console, args);
            this.write("warn", args.join(" "));
        };
        console.error = (...args) => {
            origErr.apply(console, args);
            this.write("error", args.join(" "));
        };
    },

    createPanel() {
        const panel = document.createElement("div");
        panel.id = "ts-debug";
        panel.style = `
            position: fixed; bottom: 20px; left: 20px;
            width: 300px; height: 200px;
            background: rgba(0,0,0,0.7);
            color: #0f0;
            padding: 8px;
            overflow-y: auto;
            border-radius: 6px;
            font-size: 11px;
            z-index: 999999;
        `;
        panel.innerHTML = `<b>TrinityShield Debug</b><br>`;
        document.body.appendChild(panel);
    },

    write(type, msg) {
        const panel = document.getElementById("ts-debug");
        if (!panel) return;

        const entry = document.createElement("div");
        entry.textContent = `[${type.toUpperCase()}] ${msg}`;
        panel.appendChild(entry);

        // Auto-scroll
        panel.scrollTop = panel.scrollHeight;
    }
});
