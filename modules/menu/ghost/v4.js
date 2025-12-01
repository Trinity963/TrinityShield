(function(){
const dashboard = document.getElementById("ts-dashboard");
const debug = document.getElementById("ts-debug");

const style = document.createElement("style");
style.textContent = `
    .ts-ghostfade-v4 {
        transition: opacity 0.35s ease;
    }
    .ts-ghosted-v4 {
        opacity: 0.25 !important;
    }
`;
document.head.appendChild(style);

function bind(el) {
    if (!el) return;
    el.classList.add("ts-ghostfade-v4");
    el.addEventListener("click", () => {
        el.classList.toggle("ts-ghosted-v4");
    });
}

bind(dashboard);
bind(debug);

console.log("[TSv6] GhostFade v4 applied");
})();
