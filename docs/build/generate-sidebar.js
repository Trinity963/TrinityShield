/**
 * Automatically generates sidebar navigation
 * for GitHub Pages or static site bundlers.
 */
const fs = require("fs");

module.exports = async function generateSidebar() {
    const sidebar = `
- [Home](/docs/index.md)
- [Install](/docs/install.md)
- [API Reference](/docs/api.md)
- Modules:
`;

    const moduleDir = "docs/modules";
    const modules = fs.readdirSync(moduleDir);

    let moduleEntries = modules
        .map(f => `  - [${f.replace(".md","")}](/docs/modules/${f})`)
        .join("\n");

    const finalContent = sidebar + moduleEntries;

    fs.writeFileSync("docs/sidebar.md", finalContent);
    console.log("Sidebar generated.");
};
