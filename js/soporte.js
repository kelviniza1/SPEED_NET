const buscador = document.getElementById("buscar");
const consultas = document.querySelectorAll("#listaConsultas li");

buscador.addEventListener("keyup", function(){
    let texto = buscador.value.toLowerCase();

    consultas.forEach(function(item){
        let contenido = item.textContent.toLowerCase();

        if(contenido.indexOf(texto) > -1){
            item.style.display = "";
        }else{
            item.style.display = "none";
        }
    });
});
