title: Module System API
layout: default
permalink: /api/modules-api
TrinityShield Module System API

Modules are self-contained feature units loaded dynamically.

TS.use(module)

Registers and loads a module.

Module object fields:
name: string
init: async function
deps: array (optional)
autoStart: boolean

Example:
TS.use({
name: "hover-menu",
async init() {
setupHoverMode();
}
});

TS.modules

Object containing all registered modules.

Example:
TS.modules["hover-menu"]

Module lifecycle hooks

onInit()
onBoot()
onUnload()

Event Bus

TS.emit(eventName)
TS.on(eventName, handler)

UI Mode Modules

UI modules live here:
modules/menu/<mode>/<version>.js

They are controlled by the Version Manager.

Related
/api/version-manager
/modules-overview