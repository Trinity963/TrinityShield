/* ======================================================
   TrinityShield Docs UI Script
   - Dark mode (auto + manual override)
   - GitHub release version dropdown
   - Table of Contents (TOC)
   - Scrollspy
   - Search filter
   - Mobile sidebar toggle
====================================================== */

const TSUI = {};


/* ======================================================
   DARK MODE SYSTEM
====================================================== */

TSUI.applyDarkMode = function(mode) {
    if (mode === "dark") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("ts-darkmode", "dark");
    } else if (mode === "light") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("ts-darkmode", "light");
    }
};

TSUI.initDarkMode = function() {
    const saved = localStorage.getItem("ts-darkmode");

    if (saved === "dark") {
        TSUI.applyDarkMode("dark");
    } else if (saved === "light") {
        TSUI.applyDarkMode("light");
    } else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            TSUI.applyDarkMode("dark");
        }
    }

    const btn = document.getElementById("ts-darkmode-toggle");
    btn.addEventListener("click", () => {
        const isDark = document.documentElement.classList.contains("dark");
        TSUI.applyDarkMode(isDark ? "light" : "dark");
    });
};


/* ======================================================
   VERSION DROPDOWN (Auto-load GitHub Releases)
====================================================== */

TSUI.loadVersions = async function() {
    const url = "https://api.github.com/repos/Trinity963/TrinityShield/releases";
    const sel = document.getElementById("ts-version-selector");

    sel.innerHTML = "<option>Loading...</option>";

    try {
        const res = await fetch(url);
        const releases = await res.json();

        sel.innerHTML = "";

        releases.forEach(rel => {
            const opt = document.createElement("option");
            opt.textContent = rel.tag_name;
            opt.value = rel.tag_name;
            sel.appendChild(opt);
        });

        const latest = releases[0]?.tag_name;
        if (latest) sel.value = latest;

    } catch (err) {
        sel.innerHTML = "<option>Error</option>";
    }

    sel.addEventListener("change", () => {
        alert("Version switching coming soon: " + sel.value);
    });
};


/* ======================================================
   TABLE OF CONTENTS (Right Sidebar)
====================================================== */

TSUI.buildTOC = function() {
    const toc = document.getElementById("ts-toc");
    const headers = document.querySelectorAll(".ts-content h1, .ts-content h2, .ts-content h3");

    toc.innerHTML = "";

    headers.forEach(h => {
        const id = h.textContent.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");

        h.id = id;

        const a = document.createElement("a");
        a.textContent = h.textContent;
        a.href = "#" + id;

        a.dataset.level = h.tagName;

        toc.appendChild(a);
    });
};


/* ======================================================
   SCROLLSPY — Highlight TOC based on scroll position
====================================================== */

TSUI.scrollSpy = function() {
    const links = document.querySelectorAll("#ts-toc a");

    function spy() {
        let activeFound = false;

        links.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));

            if (!section) return;

            const rect = section.getBoundingClientRect();

            if (!activeFound && rect.top >= -50 && rect.top < 200) {
                link.classList.add("active");
                activeFound = true;
            } else {
                link.classList.remove("active");
            }
        });
    }

    document.addEventListener("scroll", spy);
    spy();
};


/* ======================================================
   SEARCH FILTER
====================================================== */

TSUI.initSearch = function() {
    const input = document.getElementById("ts-search-input");

    input.addEventListener("input", () => {
        const q = input.value.toLowerCase();
        const textNodes = document.querySelectorAll(".ts-content *");

        textNodes.forEach(node => {
            if (!node.innerText) return;

            const match = node.innerText.toLowerCase().includes(q);
            node.style.display = match ? "" : "none";
        });
    });
};


/* ======================================================
   SIDEBAR TOGGLE (Mobile)
====================================================== */

TSUI.toggleSidebar = function() {
    const sb = document.getElementById("ts-sidebar");
    sb.classList.toggle("ts-sidebar-open");
};


/* ======================================================
   INIT ALL
====================================================== */

window.addEventListener("DOMContentLoaded", () => {
    TSUI.initDarkMode();
    TSUI.loadVersions();
    TSUI.buildTOC();
    TSUI.scrollSpy();
    TSUI.initSearch();
});
