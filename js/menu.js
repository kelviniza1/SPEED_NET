document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu-toggle");
    const mainMenu = document.querySelector("#menu");

    if (!menuButton || !mainMenu) {
        return;
    }

    const closeMenu = () => {
        mainMenu.classList.remove("show");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
        menuButton.textContent = "☰";
    };

    menuButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const menuDisplayed = mainMenu.classList.toggle("show");
        menuButton.setAttribute("aria-expanded", String(menuDisplayed));
        menuButton.setAttribute("aria-label", menuDisplayed ? "Cerrar menú" : "Abrir menú");
        menuButton.textContent = menuDisplayed ? "×" : "☰";
    });

    mainMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 1025) {
            closeMenu();
        }
    });
});
