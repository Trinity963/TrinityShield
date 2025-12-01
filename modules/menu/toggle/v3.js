(function(){
const dashboard = document.getElementById("ts-dashboard");
const debug = document.getElementById("ts-debug");

const style = document.createElement("style");
style.textContent = `
    #ts-toggle-btn-v3 {
        position: fixed;
        bottom: 20px; right: 80px;
        width: 34px; height: 34px;
        border-radius: 50%;
        background: #663399;
        color: white;
        z-index: 999999;
        display:flex; align-items:center; justify-content:center;
        cursor:pointer;
        user-select:none;
        font-size:20px;
        transition: background 0.2s ease;
    }
    #ts-toggle-btn-v3:hover { background:#8855cc; }
    .ts-hidden-v3 {
        opacity: 0 !important;
        visibility: hidden !important;
    }
`;
document.head.appendChild(style);

const btn = document.createElement("div");
btn.id = "ts-toggle-btn-v3";
btn.textContent = "⚡";
document.body.appendChild(btn);

let visible = true;

btn.onclick = () => {
    visible = !visible;
    if (dashboard) dashboard.classList.toggle("ts-hidden-v3", !visible);
    if (debug) debug.classList.toggle("ts-hidden-v3", !visible);
};

console.log("[TSv6] Toggle v3 applied");
})();
