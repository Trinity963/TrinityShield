module.exports = function generateModule(name) {
    if (!name) return console.error("Please specify a module name.");

    const file = `modules/${name}.js`;

    const template = `
// TrinityShield Module: ${name}
TS.use({
    name: "${name}",
    async init() {
        console.log("[TS Module] ${name} initialized.");
    }
});
`;

    if (!fs.existsSync("modules")) fs.mkdirSync("modules");
    fs.writeFileSync(file, template);

    console.log(`Created module: ${file}`);
};
