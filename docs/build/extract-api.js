/**
 * Extracts API docs from TrinityShield.user.js comments.
 * Searches for patterns:
 *   @function
 *   @module
 *   @param
 *   @returns
 */
const fs = require("fs");

module.exports = async function extractAPI() {
    const code = fs.readFileSync("TrinityShield.user.js", "utf8");

    const apiBlocks = [...code.matchAll(/\/\*\*([\s\S]*?)\*\//g)];

    let out = "# TrinityShield API Reference\n\n";

    for (const block of apiBlocks) {
        out += "## API Block\n";
        out += "```\n" + block[1].trim() + "\n```\n\n";
    }

    fs.writeFileSync("docs/api.md", out);
    console.log("API documentation written.");
};
