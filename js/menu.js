document.addEventListener("DOMContentLoaded", () => {
    let menu_displayed = false;
    let hmb_button = document.querySelector(".hmb-button") || document.querySelector("#menu-toggle");
    let header_nav = document.querySelector("header nav");
    let menu = document.querySelector("#menu");

    if (!hmb_button || !header_nav || !menu) {
        return;
    }

    hmb_button.setAttribute("aria-expanded", "false");

    hmb_button.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!menu_displayed) {
            header_nav.classList.remove("hidden");
            menu.classList.add("show");
            menu_displayed = true;
        } else {
            header_nav.classList.add("hidden");
            menu.classList.remove("show");
            menu_displayed = false;
        }

        hmb_button.setAttribute("aria-expanded", String(menu_displayed));
        hmb_button.setAttribute("aria-label", menu_displayed ? "Cerrar menú" : "Abrir menú");
    });
});
