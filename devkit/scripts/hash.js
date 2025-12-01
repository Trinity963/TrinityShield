const fs = require("fs");
const crypto = require("crypto");

module.exports = () => {
    const file = fs.readFileSync("TrinityShield.min.user.js");
    const sha256 = crypto.createHash("sha256").update(file).digest("hex");
    const sha512 = crypto.createHash("sha512").update(file).digest("hex");

    fs.writeFileSync("TrinityShield.min.user.js.sha256", sha256);
    fs.writeFileSync("TrinityShield.min.user.js.sha512", sha512);

    console.log("Hashes generated.");
};
