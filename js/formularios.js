const emptyStringRegex = /^\s*$/;
const validEmailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
const validPhoneRegex = /^\d{4}-?\d{4}$/;
const speednetWhatsapp = "50487362897";

document.addEventListener("DOMContentLoaded", ()=>{
    let formCotizar = document.getElementById("form-cotizar");
    let formContacto = document.getElementById("form-contacto");
    let errorsRegistered = {};

    if(formCotizar){
        formCotizar.addEventListener("submit", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            let focused = false;
            let validated = true;
            let nombre = document.getElementById("cot-nombre");
            let telefono = document.getElementById("cot-telefono");
            let plan = document.getElementById("cot-plan");
            let direccion = document.getElementById("cot-direccion");

            if(emptyStringRegex.test(nombre.value)){
                validated = false;
                focused = createErrorElement(nombre.parentElement, nombre, "¡Este campo es requerido!", !focused);
            }
            if(!validPhoneRegex.test(telefono.value)){
                validated = false;
                focused = createErrorElement(telefono.parentElement, telefono, "¡Escribe un teléfono válido!", !focused);
            }
            if(emptyStringRegex.test(plan.value)){
                validated = false;
                focused = createErrorElement(plan.parentElement, plan, "¡Selecciona un plan!", !focused);
            }
            if(emptyStringRegex.test(direccion.value)){
                validated = false;
                focused = createErrorElement(direccion.parentElement, direccion, "¡Este campo es requerido!", !focused);
            }

            if(validated){
                let mensaje = "Hola SpeedNet, quiero cotizar un plan:\n";
                mensaje += "Nombre: " + nombre.value + "\n";
                mensaje += "Teléfono: " + telefono.value + "\n";
                mensaje += "Plan: " + plan.value + "\n";
                mensaje += "Dirección: " + direccion.value;
                abrirWhatsapp(mensaje);
                document.getElementById("cot-resultado").innerHTML = "¡Formulario validado correctamente!";
            }
        });
    }

    if(formContacto){
        formContacto.addEventListener("submit", (e)=>{
            e.preventDefault();
            e.stopPropagation();
            let focused = false;
            let validated = true;
            let nombre = document.getElementById("con-nombre");
            let contacto = document.getElementById("con-contacto");
            let motivo = document.getElementById("con-motivo");
            let mensaje = document.getElementById("con-mensaje");

            if(emptyStringRegex.test(nombre.value)){
                validated = false;
                focused = createErrorElement(nombre.parentElement, nombre, "¡Este campo es requerido!", !focused);
            }
            if(!validEmailRegex.test(contacto.value) && !validPhoneRegex.test(contacto.value)){
                validated = false;
                focused = createErrorElement(contacto.parentElement, contacto, "¡Escribe un correo o teléfono válido!", !focused);
            }
            if(emptyStringRegex.test(motivo.value)){
                validated = false;
                focused = createErrorElement(motivo.parentElement, motivo, "¡Selecciona un motivo!", !focused);
            }
            if(emptyStringRegex.test(mensaje.value)){
                validated = false;
                focused = createErrorElement(mensaje.parentElement, mensaje, "¡Este campo es requerido!", !focused);
            }

            if(validated){
                let texto = "Hola SpeedNet, tengo una consulta:\n";
                texto += "Nombre: " + nombre.value + "\n";
                texto += "Contacto: " + contacto.value + "\n";
                texto += "Motivo: " + motivo.value + "\n";
                texto += "Mensaje: " + mensaje.value;
                abrirWhatsapp(texto);
                document.getElementById("con-resultado").innerHTML = "¡Formulario validado correctamente!";
            }
        });
    }

    function createErrorElement(inputField, input, errorMsg, focused){
        if(!errorsRegistered[input.id]){
            let errorField = document.createElement("DIV");
            errorField.classList.add("form-error");
            input.classList.add("error");
            input.addEventListener("change", onBlurOrChange);
            errorField.innerHTML = errorMsg;
            inputField.appendChild(errorField);
            errorsRegistered[input.id] = [input, errorField, inputField];
        }
        if(focused){input.focus();}
        return true;
    }

    function onBlurOrChange(e){
        const target = e.target;
        if(errorsRegistered[target.id]){
            let [input, errorField] = errorsRegistered[target.id];
            input.classList.remove("error");
            errorField.remove();
            delete errorsRegistered[target.id];
            input.removeEventListener("change", onBlurOrChange);
        }
    }
});

function abrirWhatsapp(mensaje){
    let url = "https://wa.me/" + speednetWhatsapp + "?text=" + encodeURIComponent(mensaje);
    window.open(url, "_blank");
}
