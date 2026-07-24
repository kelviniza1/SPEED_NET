document.addEventListener("DOMContentLoaded", iniciar);

function iniciar(){

    let boton=document.querySelector("#menu-toggle");
    let menu=document.querySelector("#menu");

    boton.addEventListener("click",function(){

        menu.classList.toggle("show");

    });

    let enlaces=document.querySelectorAll("nav ul li a");

    enlaces.forEach(function(enlace){

        enlace.addEventListener("mouseenter",function(){

            enlace.style.transition=".3s";

        });

    });

}