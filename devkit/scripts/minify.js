const fs = require("fs");

module.exports = () => {
    console.log("Minifying...");
    const input = fs.readFileSync("TrinityShield.user.js", "utf8");

    // Tiny minifier
    const min = input
        .replace(/\/\/.*$/gm, "")
        .replace(/\s+/g, " ");

    fs.writeFileSync("TrinityShield.min.user.js", min);
    console.log("Minified output written.");
};
