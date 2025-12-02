document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (!toggle || !sidebar) return;

    toggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });
});
