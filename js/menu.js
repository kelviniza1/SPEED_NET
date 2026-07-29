document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector('.hmb-button') || document.querySelector('#menu-toggle');
    const mainMenu = document.querySelector('#menu');
    const headerNav = document.querySelector('header nav');

    if (!menuButton || !mainMenu) {
        return;
    }

    // initialize
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    if (menuButton.textContent === undefined || menuButton.textContent === null) {
        // nothing
    } else if (!menuButton.textContent.trim()) {
        menuButton.textContent = '☰';
    }

    const closeMenu = () => {
        mainMenu.classList.remove('show');
        if (headerNav) headerNav.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menú');
        try { menuButton.textContent = '☰'; } catch (e) {}
    };

    menuButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        const menuDisplayed = mainMenu.classList.toggle('show');
        if (headerNav) headerNav.classList.toggle('hidden', !menuDisplayed);

        menuButton.setAttribute('aria-expanded', String(menuDisplayed));
        menuButton.setAttribute('aria-label', menuDisplayed ? 'Cerrar menú' : 'Abrir menú');
        try { menuButton.textContent = menuDisplayed ? '×' : '☰'; } catch (e) {}
    });

    // close when any menu link is clicked
    mainMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // close on large resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1025) {
            closeMenu();
        }
    });
});
