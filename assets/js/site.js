/* Navigation is in HTML so every page remains usable without JavaScript. */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-copyright-year]").forEach((el) => {
        el.textContent = new Date().getFullYear();
    });
    const toggle = document.querySelector(".nav-toggle");
    const list = document.querySelector(".nav-links");
    if (!toggle || !list) return;
    toggle.hidden = false;
    document.documentElement.classList.add("js");
    function setOpen(open) {
        list.classList.toggle("open", open);
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    toggle.addEventListener("click", () => setOpen(!list.classList.contains("open")));
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && list.classList.contains("open")) {
            setOpen(false);
            toggle.focus();
        }
    });
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".site-header")) setOpen(false);
    });
    list.addEventListener("click", (event) => {
        if (event.target.closest("a")) setOpen(false);
    });
    matchMedia("(min-width: 901px)").addEventListener("change", () => setOpen(false));
});
