# 💜 TrinityShield Release Portal

<select id="versionSelect" style="
    background:#1a1a26;padding:12px;border-radius:8px;
    border:1px solid #8E5CF6;color:white;margin-bottom:20px;">
  <option value="stable.md">Stable</option>
  <option value="canary.md">Canary</option>
  <option value="nightly.md">Nightly</option>
  <option value="rc.md">Release Candidate</option>
  <option value="archive.md">Archive</option>
</select>

<script>
  document.getElementById('versionSelect').onchange = (e) => {
      window.location = e.target.value;
  }
</script>



Welcome to the official installation page for TrinityShield.

Choose your update channel:

---

# 🔵 Stable (Recommended)
Latest production-ready version.  
Fully tested, verified, and safe.

[Install Stable](stable.md){ .install-btn }

---

# 🟣 Canary (Daily Auto-Build)
Fastest updates, may include experimental features.  
Built from the `dev` branch.

[Install Canary](canary.md){ .install-btn }

---

# 🌙 Nightly Builds
Generated automatically every night.  
For testers and contributors.

[Install Nightly](nightly.md){ .install-btn }

---

# 🧪 Release Candidates (RCs)
Next-version previews.

[Install RC](rc.md){ .install-btn }

---

# 📚 Previous Versions
Archived versions, for debugging or regression testing.

[View Archive](archive.md){ .install-btn }

---

## ℹ About Update Channels

| Channel | Stability | Purpose |
|--------|-----------|---------|
| Stable | ⭐⭐⭐⭐⭐ | Production use |
| Canary | ⭐⭐⭐ | Feature testing |
| Nightly | ⭐⭐ | Diagnostics & experimentation |
| RC | ⭐⭐⭐⭐ | Pre-release validation |
