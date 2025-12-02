title: Version Manager API
layout: default
permalink: /api/version-manager
Version Manager API

Controls UI behavior modes such as:
Hover Reveal
Auto Fade
Toggle Button
Ghost Fade

TS.versionManager.register(name, loader)

Registers a new UI mode module.

Example:
TS.versionManager.register("ghost", async () => {
await TS.versionLoader.require("menu/ghost/v4.js");
});

TS.versionManager.set(modeName)

Switches UI modes.

TS.versionManager.get()

Returns the current active mode.

TS.versionManager.list()

Lists all registered modes.

Version Loader

TS.versionLoader.require(path)

Example:
await TS.versionLoader.require("autofade/v2.js");

Hotkeys

Ctrl + Alt + 1
Ctrl + Alt + 2
Ctrl + Alt + 3
Ctrl + Alt + 4

Related
/modules-overview
/api/modules-api