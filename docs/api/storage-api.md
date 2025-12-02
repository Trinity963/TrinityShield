title: Storage and Integrity API
layout: default
permalink: /api/storage-api
Storage and Integrity API

Handles:
storage validation
corruption detection
purification
repair
IndexedDB and cache integrity

TS.storage.get(key)

Returns the parsed stored value.

TS.storage.set(key, value)

Stores a serialized value.

TS.storage.delete(key)

Removes a stored value.

TS.storage.repair()

Attempts automatic repair.

TS.purifier.run()

Auto-repair system for:
malformed JSON
corrupt metadata
broken settings
truncated objects

TS.corruption.scan()

Deep scan of:
localStorage
IndexedDB
JSON structures

Returns:
{
jsonCorruption: false,
dbHealth: "ok",
warnings: [...]
}

TS.safeboot.start()

Runs staged safe boot.

TS.safeboot.recover()

Fallback recovery.

Related
/api/ts-core
/api/modules-api