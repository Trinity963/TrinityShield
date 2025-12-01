module.exports = () => {
    const meta = `
// ==UserScript==
// @name         TrinityShield
// @version      6.0.0
// @updateURL    https://raw.githubusercontent.com/Trinity963/TrinityShield/main/TrinityShield.meta.js
// @downloadURL  https://raw.githubusercontent.com/Trinity963/TrinityShield/main/TrinityShield.user.js
// ==/UserScript==
    `;

    require("fs").writeFileSync("TrinityShield.meta.js", meta);
    console.log("Meta file generated.");
};
