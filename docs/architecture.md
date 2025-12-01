# TrinityShield Architecture (v6)

## Global Container (TS)
The TrinityShield engine exposes a single global object:

```js
window.TrinityShield = {
    core: {...},
    modules: [],
    use(module) {...},
    init() {...}
}
