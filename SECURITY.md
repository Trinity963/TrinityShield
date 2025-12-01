# TrinityShield Security Policy

## Supported Versions
| Version | Supported |
|--------|-----------|
| latest | ✔ |
| canary | ✔ |
| nightly | ✔ |
| rc     | ✔ |

## Reporting a Vulnerability
If you discover a security vulnerability:

### 🔒 Contact
Please open a **private security advisory**:
https://github.com/Trinity963/TrinityShield/security/advisories

## Threat Model
TrinityShield protects users from:
- Local cache corruption  
- IndexedDB corruption  
- LocalStorage desync  
- Unexpected service worker behavior  
- Render-breaking JSON  
- Stale or invalid CDN assets  

## Responsible Disclosure
We ask that you:
- Provide steps to reproduce  
- Provide any console logs  
- Allow maintainers to create patches  
