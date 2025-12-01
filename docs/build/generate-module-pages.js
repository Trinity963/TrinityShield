/**
 * Generates docs pages for each module inside /modules
 */
const fs = require("fs");

module.exports = async function generateModuleDocs() {
    if (!fs.existsSync("modules")) return;

    const files = fs.readdirSync("modules");
    const outDir = "docs/modules";
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

    for (const file of files) {
        const name = file.replace(".js", "");
        const code = fs.readFileSync(`modules/${file}`, "utf8");

        const page = `
# Module: ${name}

\`\`\`js
${code}
\`\`\`

## Description
This module is part of the TrinityShield v6 modular system.

## Notes
- Auto-generated from code
- Updated every build
`;

        fs.writeFileSync(`${outDir}/${name}.md`, page);
    }

    console.log("Module documentation generated.");
};
