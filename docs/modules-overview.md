title: Modules Overview
layout: default
permalink: /modules-overview
🧩 TrinityShield Modules Overview

TrinityShield uses a fully modular architecture where every feature is implemented as an isolated, self-contained module.
This keeps the system clean, fast to load, easy to debug, and highly customizable.

🔧 How Modules Work

Modules are loaded using:

TS.use({
name: "moduleName",
async init() {
// module logic
}
});

🛡 Core Modules (Built-In)
Core Engine

Boot process, environment validation, integrity lock, safety infrastructure.

Corruption Engine

Validates cache, JSON, IndexedDB, and storage health.

Auto-Purifier

Repairs malformed storage and corrupted metadata.

Safe Boot v2

Deep system validation and fallback repair logic.

Conversation Scanner

Detects malformed chunks and broken responses.

Full Power Audit

Validates CDN, service workers, routing, integrity signals.

Version Checker

Compares local version with GitHub releases.

Debug Panel

Live developer diagnostics window.

🎛️ Version Manager System (UI Modes)

UI modes live in:

modules/menu/<mode>/<version>.js

Included modes:

Hover Reveal (hover/v1.js)
Auto Fade (autofade/v2.js)
Toggle Button (toggle/v3.js)
Ghost Fade (ghost/v4.js)

Hotkeys:

Ctrl + Alt + 1
Ctrl + Alt + 2
Ctrl + Alt + 3
Ctrl + Alt + 4

🧰 Creating Your Own Modules

Create folder:
modules/menu/myNewMode/

Add version:
v1.js

Register:
TS.versionManager.register("myNewMode", async () => {
await TS.versionLoader.require("myNewMode/v1.js");
});

⚠️ Deprecated: versions/ Folder

Older builds used:
versions/

This is deprecated and unused.
No code loads from here.
Delete the folder.

All modules now live in:
modules/menu/

📘 Further Reading
docs/modules.md
docs/tutorials/extending-trinityshield.md
docs/api/ts-core.md