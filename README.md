# TrinityShield v6  
### Integrity, Safety & Auto-Repair Framework for ChatGPT

TrinityShield is a modular userscript designed to add a protection, audit, and stabilization layer over the ChatGPT interface.  
It monitors local integrity, prevents render corruption, repairs broken cache/DB entries, and provides an advanced visual dashboard for system health.

---

# 🚀 Features

### 🛡 Full Protection Suite
- Safe Boot & Render Guard
- Local corruption detection
- IndexedDB & LocalStorage validation
- Cache integrity scanning

### 🧹 Auto-Purifier
- Clears corrupted cache buckets  
- Removes stale/bad service workers  
- Repairs broken localStorage  
- Fixes invalid IndexedDB entries  

### 🧠 Advanced Integrity Systems
- Conversation JSON scanner  
- Code-block repair detection  
- UTF-8 corruption detection  
- Partial/truncated message detection  

### 🔍 Full Power Audit
- CDN verification  
- Service worker origin checks  
- Cache source auditing  
- Region routing inspection  

### 🔄 Auto-Updater
- Checks GitHub for newer versions  
- Displays update notification panel  
- One-click "Update Now" button  

### 🧪 Debug Panel
- Live console capture (log/warn/error)  
- Draggable debug window  
- Automatically scrolls output  

---

# 📦 Installation (Tampermonkey)

1. Install **Tampermonkey**:  
   https://www.tampermonkey.net/

2. Install TrinityShield:  
https://github.com/Trinity963/TrinityShield/raw/main/TrinityShield.user.js



3. Refresh ChatGPT.

---

# 📁 File Structure (This Repo)

TrinityShield/
├── TrinityShield.user.js ← Main userscript
├── README.md ← This file
├── LICENSE ← MIT License
├── CHANGELOG.md  ← Included below



---

# 🧩 Modules (Architecture Overview)

TrinityShield v6 is built on a **modular engine**.

All modules register through:

```js
TS.use({
    name: "moduleName",
    async init() { ... }
});
Core Modules (Automatic)
Module	Purpose
Core	Safe boot, dashboard, storage/worker monitors
Corruption Engine	Local integrity scanning
Auto-Purifier	Repairs local environment
Safe Boot V2	Staged render protection
Conversation Scanner	Scans message content
Full Power Audit	CDN, SW, cache analyzer
Version Checker	Auto-update system
Debug Panel	Console capture overlay

These modules run in order once TS.init() is called.

🔄 Auto-Update System
TrinityShield automatically checks GitHub for updates using:



@updateURL
@downloadURL
Update process:

TrinityShield fetches the latest version from GitHub.

If a newer version exists:

A dashboard entry appears (update: AVAILABLE)

A popup displays an “Update Now” button

Tampermonkey downloads the latest .user.js file

🧬 Internal Architecture
🔷 Global Container
All systems run under:



window.TrinityShield
Properties:


{
  modules: [],
  core: { ... },
  init: async () => {},
  use: (module) => {},
  updateDashboard: ...
}
🔷 Loading Flow
Safe Boot (Core)

Dashboard initialized

Corruption Engine

Auto-Purifier

Safe Boot V2

Conversation Scanner

Full Power Audit

Version Checker

Debug Panel

📜 CHANGELOG
v6.0.0 — Initial Public Release
Modular TrinityShield Framework

Full Core + Dashboard System

Corruption Engine

Local Auto-Purifier

Advanced Safe Boot v2

Conversation Integrity Scanner

Full Power Audit Engine

Debug Panel (live logs)

Version Checker (GitHub-connected)

Corrected load sequencing and architecture

📄 LICENSE (MIT)

MIT License

Copyright (c) 2025 Trinity963

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell      
copies of the Software, and to permit persons to whom the Software is         
furnished to do so, subject to the following conditions:                       

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.                                

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR     
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,       
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE    
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER         
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE  
SOFTWARE.
💬 Issues & Requests
Submit bugs & feature requests here:

👉 https://github.com/Trinity963/TrinityShield/issues

🎉 Thank You
TrinityShield exists to maintain stability, integrity, and safety —
designed with powerful local-only auditing and fully modular architecture.








