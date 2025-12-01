/**
 * TrinityShield Documentation Builder
 * ===================================
 * 1. Extract API from code
 * 2. Generate module documentation
 * 3. Build navigation + sidebar
 * 4. Build landing index
 * 5. Prepare versioned docs
 */
const extractAPI = require("./extract-api");
const generateModules = require("./generate-module-pages");
const generateSidebar = require("./generate-sidebar");
const generateIndex = require("./generate-index");

(async () => {
    console.log("Building TrinityShield documentation...");

    await extractAPI();
    await generateModules();
    await generateSidebar();
    await generateIndex();

    console.log("Documentation build complete.");
})();
