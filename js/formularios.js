const SPEEDNET_WHATSAPP = "50487362897"; 

const REGEX = {
    vacio: /^\s*$/,
    nombre: /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]{3,60}$/,
    telefono: /^\d{4}-?\d{4}$/, 
    email: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/
};

document.addEventListener("DOMContentLoaded", () => {
    iniciarFormularioCotizar();
    iniciarFormularioContacto();
});


function mostrarError(input, mensaje){
    const campo = input.closest(".form-field");
    let error = campo.querySelector(".form-error");
    if (!error){
        error = document.createElement("span");
        error.className = "form-error";
        campo.appendChild(error);
    }
    error.textContent = mensaje;
    input.classList.add("input-error");
}

function limpiarError(input){
    const campo = input.closest(".form-field");
    const error = campo.querySelector(".form-error");
    if (error) error.remove();
    input.classList.remove("input-error");
}

function engancharLimpiezaEnVivo(input){
    input.addEventListener("input", () => limpiarError(input));
    input.addEventListener("change", () => limpiarError(input));
}

function mostrarMensajeFinal(contenedor, tipo, texto){
    contenedor.className = "form-submit-msg show " + tipo;
    contenedor.textContent = texto;
}

function abrirWhatsApp(mensaje){
    const url = `https://wa.me/${SPEEDNET_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank", "noopener");
}

/* ------------------------ Formulario: Cotizar/Contratar ------------------------ */

function iniciarFormularioCotizar(){
    const form = document.getElementById("form-cotizar");
    if (!form) return;

    const nombre = document.getElementById("cot-nombre");
    const telefono = document.getElementById("cot-telefono");
    const direccion = document.getElementById("cot-direccion");
    const plan = document.getElementById("cot-plan");
    const comentario = document.getElementById("cot-comentario");
    const trampa = document.getElementById("cot-empresa"); // honeypot
    const mensajeFinal = document.getElementById("cot-resultado");

    [nombre, telefono, direccion, plan].forEach(engancharLimpiezaEnVivo);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

    
        if (trampa && trampa.value.trim() !== "") return;

        let valido = true;
        let primerCampoConError = null;

        if (REGEX.vacio.test(nombre.value) || !REGEX.nombre.test(nombre.value.trim())){
            mostrarError(nombre, "Escribe tu nombre completo (solo letras, mínimo 3 caracteres).");
            valido = false;
            primerCampoConError = primerCampoConError || nombre;
        }

        if (!REGEX.telefono.test(telefono.value.trim())){
            mostrarError(telefono, "Ingresa un número válido de 8 dígitos (ej. 9999-9999).");
            valido = false;
            primerCampoConError = primerCampoConError || telefono;
        }

        if (REGEX.vacio.test(direccion.value) || direccion.value.trim().length < 10){
            mostrarError(direccion, "Describe tu dirección con colonia y punto de referencia.");
            valido = false;
            primerCampoConError = primerCampoConError || direccion;
        }

        if (plan.value === ""){
            mostrarError(plan, "Selecciona el plan que te interesa.");
            valido = false;
            primerCampoConError = primerCampoConError || plan;
        }

        if (!valido){
            if (primerCampoConError) primerCampoConError.focus();
            mostrarMensajeFinal(mensajeFinal, "fail", "Revisa los campos marcados en rojo antes de continuar.");
            return;
        }

        const servicioSeleccionado = form.querySelector('input[name="cot-servicio"]:checked');
        const servicio = servicioSeleccionado ? servicioSeleccionado.value : "Internet";
        const planTexto = plan.options[plan.selectedIndex].text;
        const comentarioTexto = comentario.value.trim() === "" ? "Sin comentarios" : comentario.value.trim();

        const mensaje =
            "Hola SpeedNet, quiero cotizar/contratar un plan:\n" +
            `Nombre: ${nombre.value.trim()}\n` +
            `Teléfono: ${telefono.value.trim()}\n` +
            `Dirección: ${direccion.value.trim()}\n` +
            `Plan de interés: ${planTexto}\n` +
            `Servicio: ${servicio}\n` +
            `Comentario: ${comentarioTexto}`;

        abrirWhatsApp(mensaje);
        mostrarMensajeFinal(mensajeFinal, "ok", "¡Listo! Se abrió WhatsApp con tus datos. Solo confirma el envío.");
        form.reset();
    });
}



function iniciarFormularioContacto(){
    const form = document.getElementById("form-contacto");
    if (!form) return;

    const nombre = document.getElementById("con-nombre");
    const contacto = document.getElementById("con-contacto");
    const motivo = document.getElementById("con-motivo");
    const mensaje = document.getElementById("con-mensaje");
    const trampa = document.getElementById("con-empresa"); 
    const mensajeFinal = document.getElementById("con-resultado");

    [nombre, contacto, motivo, mensaje].forEach(engancharLimpiezaEnVivo);

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (trampa && trampa.value.trim() !== "") return;

        let valido = true;
        let primerCampoConError = null;

        if (REGEX.vacio.test(nombre.value) || !REGEX.nombre.test(nombre.value.trim())){
            mostrarError(nombre, "Escribe tu nombre completo (solo letras, mínimo 3 caracteres).");
            valido = false;
            primerCampoConError = primerCampoConError || nombre;
        }

        const contactoValor = contacto.value.trim();
        const esTelefonoValido = REGEX.telefono.test(contactoValor);
        const esCorreoValido = REGEX.email.test(contactoValor);
        if (contactoValor === "" || (!esTelefonoValido && !esCorreoValido)){
            mostrarError(contacto, "Ingresa un teléfono (8 dígitos) o un correo válido.");
            valido = false;
            primerCampoConError = primerCampoConError || contacto;
        }

        if (motivo.value === ""){
            mostrarError(motivo, "Selecciona el motivo de tu mensaje.");
            valido = false;
            primerCampoConError = primerCampoConError || motivo;
        }

        if (REGEX.vacio.test(mensaje.value) || mensaje.value.trim().length < 10){
            mostrarError(mensaje, "Cuéntanos en qué te ayudamos (mínimo 10 caracteres).");
            valido = false;
            primerCampoConError = primerCampoConError || mensaje;
        }

        if (!valido){
            if (primerCampoConError) primerCampoConError.focus();
            mostrarMensajeFinal(mensajeFinal, "fail", "Revisa los campos marcados en rojo antes de continuar.");
            return;
        }

        const motivoTexto = motivo.options[motivo.selectedIndex].text;

        const mensajeWhatsApp =
            "Hola SpeedNet, tengo una consulta:\n" +
            `Nombre: ${nombre.value.trim()}\n` +
            `Teléfono/Correo: ${contactoValor}\n` +
            `Motivo: ${motivoTexto}\n` +
            `Mensaje: ${mensaje.value.trim()}`;

        abrirWhatsApp(mensajeWhatsApp);
        mostrarMensajeFinal(mensajeFinal, "ok", "¡Listo! Se abrió WhatsApp con tu mensaje. Solo confirma el envío.");
        form.reset();
    });
}
