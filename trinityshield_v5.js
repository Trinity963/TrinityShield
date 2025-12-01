(function() {
  const BROKEN = "/backend-api/qizmos/.185840f1efa4e6376.js";
  const REGIONS = ["us-east-1","us-west-2","eu-central-1","ap-south-1","ca-central-1"];
  let idx = parseInt(localStorage.getItem("ts_v5_idx") || "0");

  function rotate() {
    idx = (idx + 1) % REGIONS.length;
    localStorage.setItem("ts_v5_idx", idx);
    location.replace("https://chatgpt.com/?tm_region=" + REGIONS[idx]);
  }

  const orig = document.createElement;
  document.createElement = function(tag) {
    const el = orig.call(document, tag);
    if (tag === "script") {
      Object.defineProperty(el, "src", {
        set(v) { if (v.includes(BROKEN)) rotate(); else el.setAttribute("src", v); },
        get() { return el.getAttribute("src"); }
      });
    }
    return el;
  };

  window.addEventListener("error", e => {
    if (e?.target?.src && e.target.src.includes("chunk")) rotate();
  }, true);

})();
