(function() {
const dashboard = document.getElementById("ts-dashboard");
const debug = document.getElementById("ts-debug");

const style = document.createElement("style");
style.textContent = `
    .ts-autofade-v2 { transition: opacity 0.4s ease; }
    .ts-faded-v2 { opacity: 0.18; }
`;
document.head.appendChild(style);

function setup(el) {
    if (!el) return;
    el.classList.add("ts-autofade-v2");

    let timer;
    const reset = () => {
        el.classList.remove("ts-faded-v2");
        clearTimeout(timer);
        timer = setTimeout(() => el.classList.add("ts-faded-v2"), 5000);
    };

    reset();
    el.addEventListener("mouseenter", reset);
    el.addEventListener("click", reset);
}

setup(dashboard);
setup(debug);

console.log("[TSv6] AutoFade v2 applied");
})();
