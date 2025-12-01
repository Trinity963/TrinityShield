// ==UserScript==
// @name         TrinityShield Legacy Cleaner
// @namespace    https://github.com/Trinity963/TrinityShield
// @version      1.0
// @description  Automatically disable legacy TrinityShield versions in Tampermonkey
// @match        *://*/*
// @grant        GM_listValues
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// ==/UserScript==

(function() {
    "use strict";

    const legacyNames = [
        "TrinityShield v2 – Modular Framework",
        "TrinityShield v3 – Modular Framework",
        "TrinityShield v4 – Modular Framework",
        "TrinityShield v5 – Modular Framework",
        "TrinityShield v6 – Modular Framework",
        "TrinityShield v6Full – Modular Framework"
    ];

    const scripts = GM_listValues();

    for (const script of scripts) {
        if (legacyNames.includes(script)) {
            console.log("[TS Cleaner] Removing legacy:", script);
            GM_deleteValue(script);
        }
    }

    console.log("[TS Cleaner] Legacy cleaning complete.");
})();
