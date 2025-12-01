const fs = require("fs");

module.exports = () => {
    console.log("Building asset pack…");

    const timestamp = Date.now();
    const out = `dist/assets-${timestamp}.json`;

    fs.writeFileSync(out, JSON.stringify({ built: timestamp }, null, 2));

    console.log("Asset pack created:", out);
};
