#!/usr/bin/env node
/**
 * TrinityShield DevKit CLI
 * ==========================================
 * Commands:
 *  ts g module <name>
 *  ts build
 *  ts minify
 *  ts hash
 *  ts meta
 *  ts test
 *  ts sandbox
 */
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const cmd = args[0];

switch (cmd) {
    case "g":
    case "generate":
        require("./generators/module")(args[1]);
        break;

    case "build":
        require("./scripts/build")();
        break;

    case "minify":
        require("./scripts/minify")();
        break;

    case "hash":
        require("./scripts/hash")();
        break;

    case "meta":
        require("./scripts/generate-meta")();
        break;

    case "test":
        require("./test/harness")();
        break;

    case "sandbox":
        console.log("Open devkit/test/sandbox.html in browser");
        break;

    default:
        console.log(`
TrinityShield DevKit CLI

  ts g module <name>   Generate new module
  ts build             Build script
  ts minify            Minify script
  ts hash              Generate hash files
  ts meta              Generate meta.js
  ts test              Run test harness
  ts sandbox           Open browser sandbox

        `);
}
