<div align="center">
  <img src="assets/banner.svg" width="100%">
</div>

<br>

<div align="center">

<!-- Badges -->
<img src="https://img.shields.io/badge/version-v6.0.0-8E5CF6" alt="Version">
<img src="https://img.shields.io/badge/status-active-A57CFF" alt="Status">
<img src="https://img.shields.io/badge/license-MIT-8E5CF6" alt="License">
<img src="https://img.shields.io/badge/build-passing-8E5CF6" alt="Build">

</div>

<br>

<h1 align="center">
  <img src="assets/logo.svg" width="90"><br>
  <strong>TrinityShield v6</strong>
  <br>
  <sub>Integrity • Protection • Auto-Repair Framework for ChatGPT</sub>
</h1>

---

## 🌟 Overview

**TrinityShield v6** is a complete **stability, integrity, and self-repair framework** that hardens the ChatGPT web client against:

- Cache corruption  
- Broken localStorage  
- Damaged IndexedDB  
- Stale or foreign service workers  
- Malformed JSON  
- Render crashes  
- Bad CDN assets  

It ensures ChatGPT loads cleanly, repairs itself when needed, and provides transparent status through a modular dashboard system.

---

## 📦 Installation

Requires **Tampermonkey**:  
https://www.tampermonkey.net/

Click to install:

👉 **[Install TrinityShield.user.js](https://github.com/Trinity963/TrinityShield/raw/main/TrinityShield.user.js)**

---

## 🛡 Core Features

### 🔒 Safe Boot System
Stops page rendering until stability checks pass.

### 🧹 Auto-Purifier
Fixes:
- Broken cache buckets  
- Invalid IndexedDB entries  
- LocalStorage corruption  
- Stale service workers  

### 🔍 Conversation Integrity Scanner
Detects:
- malformed JSON  
- broken code blocks  
- partial outputs  

### 🧪 Full Power Audit (Advanced)
Checks:
- CDN integrity  
- Cache asset sources  
- Service worker origins  
- Routing region health  

### 💬 Debug Panel
Real-time capture of:
- console.log  
- console.warn  
- console.error  

### 🟣 TrinityShield Dashboard
Compact UI showing:
- Module health  
- Boot status  
- Integrity results  
- Update availability  

---

## 🧩 Architecture

TrinityShield uses a modular loader:

```js
TS.use({
  name: "module",
  async init() {
      // module code
  }
});


Modules load in this order:

Core

Corruption Engine

Auto-Purifier

Safe Boot v2

Conversation Scanner

Full Power Audit

Version Checker

Debug Panel

Full internals described in docs/architecture.md.

TrinityShield/
├── TrinityShield.user.js
├── TrinityShield.min.user.js
├── README.md
├── LICENSE
├── CHANGELOG.md
├── css/
│   ├── core.css
│   ├── dashboard.css
│   ├── debug-panel.css
│   └── shield-theme-purple.css
├── assets/
│   ├── logo.svg
│   ├── banner.svg
│   └── social-preview.png
└── docs/
    ├── index.md
    ├── architecture.md
    ├── modules.md
    ├── installation.md
    └── tutorials/
        ├── extending-trinityshield.md
        └── debugging.md
        
 ## 🎛️ Version Manager System (New in v6.1)

TrinityShield now includes a modular **Version Manager** that allows dynamic switching between different UI behavior profiles for the dashboard and debug panel.  
Each UI mode is stored separately inside the repository under `modules/menu/`, making the system clean, extensible, and user-friendly.

### ✨ Features
- Switch between UI versions instantly (no page reload)
- Four built-in UI modes (Hover, Auto-Fade, Toggle, Ghost-Fade)
- Hotkey support for fast switching
- Dashboard automatically updates showing active version
- Version modules hosted directly in the GitHub repo
- Fully isolated modules with automatic cleanup

---

## 📁 Version Folder Structure

TrinityShield/
└── modules/
└── menu/
├── hover/
│ └── v1.js
├── autofade/
│ └── v2.js
├── toggle/
│ └── v3.js
└── ghost/
└── v4.js
 
 
Each subfolder contains one UI behavior module.

---

## 🔄 Built-In Versions

### **v1 — Hover Reveal**
The dashboard and debug panel stay lightly faded and become fully visible on hover.

### **v2 — Auto Fade**
UI is fully visible at first, then gently fades after inactivity.  
Hover or click resets visibility.

### **v3 — Toggle Button**
Adds a small floating ⚡ button to hide/show both UI panels on demand.

### **v4 — Ghost Fade (Click)**
Click the dashboard or debug panel to toggle ghost opacity mode.

---

## ⌨️ Hotkeys

| Hotkey             | Loads Version      |
|--------------------|-------------------|
| **Ctrl + Alt + 1** | Hover Reveal (v1) |
| **Ctrl + Alt + 2** | Auto Fade (v2)    |
| **Ctrl + Alt + 3** | Toggle UI (v3)    |
| **Ctrl + Alt + 4** | Ghost Fade (v4)   |

---

## 🧩 How the Version Manager Works

The manager dynamically loads UI modules from your GitHub repo:

```js
TS.versionManager.load("hover-v1");

 https://raw.githubusercontent.com/<username>/<repo>/main/modules/menu/<folder>/<file>.js

 🛠 Creating Your Own Versions

Add a new folder:

modules/menu/<your-name>/


Add your script:

modules/menu/<your-name>/v1.js


Register it in the userscript:

TS.versionManager.register("myVersion", async () => {
    await TS.versionLoader.require("my-name/v1.js");
});


Now your new version can be loaded via:

TS.versionManager.load("myVersion");


---


 
        
📚 Documentation
🔗 GitHub Pages (Docs Site)

Coming soon — can be generated on request.

Key Docs:

docs/architecture.md

docs/modules.md

docs/api/ts-core.md

docs/api/ts-dashboard.md

docs/tutorials/debugging.md

🧾 Changelog (Highlights)
v6.0.0

Modular architecture

Full purple TrinityShield theme

Safe Boot system

Auto-Purifier

Conversation integrity scanner

Full power audit module

Debug console panel

CSS modularization

Banner + logo + branding

GitHub Actions build support

See CHANGELOG.md for full details.

🛠 Contributing

Contributions welcome!

See:

CONTRIBUTING.md

CODE_OF_CONDUCT.md

Bug Reports → https://github.com/Trinity963/TrinityShield/issues

🔐 Security

Please do not open security issues publicly.
Use:
trinity963-security@proton.me

📜 License

Released under the MIT License.

<div align="center">
💜 Thank you for using TrinityShield

If you like this project, please star the repository ⭐

</div> ```
        
