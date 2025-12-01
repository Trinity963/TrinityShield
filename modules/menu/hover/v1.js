(function(){
const dashboard = document.getElementById("ts-dashboard");
const debug = document.getElementById("ts-debug");

const style = document.createElement("style");
style.textContent = `
    .ts-hover-v1 {
        opacity: 0.15;
        transition: opacity 0.35s ease;
    }
    .ts-hover-v1:hover {
        opacity: 1;
    }
`;
document.head.appendChild(style);

if (dashboard) dashboard.classList.add("ts-hover-v1");
if (debug) debug.classList.add("ts-hover-v1");

console.log("[TSv6] Hover v1 applied");
})();
