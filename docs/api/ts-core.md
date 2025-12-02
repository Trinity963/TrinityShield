title: TrinityShield Core API
layout: default
permalink: /api/ts-core
TrinityShield Core API

The Core API provides the fundamental runtime, boot logic, integrity checks, and global interfaces used by TrinityShield.

TS.boot

Initializes the Safe Boot sequence.

Usage:
await TS.boot();

TS.status

Returns system status flags.

Example:
{
booted: true,
environmentSafe: true,
corruptionDetected: false,
purifierActive: false
}

TS.log(message)

Writes a message to the debug stream.

TS.warn(message)

Writes a warning to the debug stream.

TS.error(message)

Writes an error to the debug stream.

TS.integrity.checkEnvironment()

Runs environment validation.

TS.integrity.verify()

Runs full integrity validation.

TS.require(path)

Dynamic loader for internal modules.

Example:
await TS.require("modules/menu/ghost/v4.js");

TS.storage.get(key)

Returns a stored value.

TS.storage.set(key, value)

Stores a serialized value.

TS.storage.delete(key)

Removes a key.

TS.storage.repair()

Attempts automatic repair of corrupted items.

TS.conversation.scan(text)

Detects malformed content.

Example:
const report = TS.conversation.scan(responseText);

TS.debug.log(event)

Pushes an event into debug output.

Related
/api/modules-api
/api/version-manager
/api/storage-api