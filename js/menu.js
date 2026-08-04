document.addEventListener("DOMContentLoaded", ()=>{
    let menu_displayed = false;
    let hmb_button = document.querySelector(".hmb-button");
    let header_nav = document.querySelector("header nav");

    hmb_button.addEventListener("click", (e)=>{
        e.preventDefault();
        e.stopPropagation();

        if (!menu_displayed) {
            header_nav.classList.remove("hidden");
            menu_displayed = true;
        } else {
            header_nav.classList.add("hidden");
            menu_displayed = false;
        }
    });
});
