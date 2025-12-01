const fs = require("fs");

module.exports = async function generateIndex() {
    const content = `
# TrinityShield Documentation

Generated automatically via DevKit Doc Engine.

## Key Sections
- API Reference
- Modules
- Guides
- Diagnostics
- Monitoring
`;

    fs.writeFileSync("docs/generated-index.md", content);
    console.log("Index generated.");
};
