# TrinityShield Release Engineering Guide

This playbook defines how official builds are created.

---

# 1. Release Channels

| Channel | Source Branch | Automation | Purpose |
|---------|---------------|------------|----------|
| Stable | main | Yes | Production |
| Canary | dev | Yes | Feature testing |
| Nightly | auto | Yes | Diagnostics |
| RC | feature/* | Yes | Pre-release |
| Hotfix | hotfix/* | Yes | Emergency fixes |

---

# 2. Versioning Policy

TrinityShield uses:
MAJOR.MINOR.PATCH


Example: `6.2.1`

## Major
Breaking module API changes  
Purifier redesigns  
New subsystem architectures  

## Minor
New modules  
Enhancements  
New dashboards  

## Patch
Bug fixes  
Stability improvements  
Safe-boot changes  

---

# 3. Release Steps (Manual or Auto)

1. Update changelog  
2. Bump version in userscript header  
3. Merge into `main`  
4. CI/CD runs:
   - Build  
   - Minify  
   - Hash  
   - Generate `.meta.js`  
   - Publish GitHub Release  
   - Propagate CDN  
   - Update version aliases  

5. Announce changes  
6. Update docs  

---

# 4. Release Cadence

- Stable → every 2–6 weeks  
- RC → before each stable  
- Canary → continuous  
- Nightly → daily  
- Hotfix → as needed  
