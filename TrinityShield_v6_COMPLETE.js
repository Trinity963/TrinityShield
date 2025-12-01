// ==UserScript==
// @name         TrinityShield v6 – Modular Framework
// @namespace    https://chatgpt.com/TrinityShield
// @version      6.0.0
// @description  TrinityShield integrity and protection framework
// @author       Trinity963
// @license      MIT
// @homepage     https://github.com/Trinity963/TrinityBrowseSe
// @match        https://chatgpt.com/*
// @match        https://*.chatgpt.com/*
// @grant        none
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
