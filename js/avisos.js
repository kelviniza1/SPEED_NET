document.addEventListener("DOMContentLoaded", () => {

    const avisos = [

        {
            tipo: "Mantenimiento",
            clase: "mantenimiento",
            fecha: "30 de julio de 2026",
            zona: "Colonia Kennedy",
            titulo: "Mantenimiento preventivo de la red",
            descripcion: "Se realizarán trabajos de mantenimiento preventivo para mejorar la estabilidad y velocidad del servicio de internet en la zona.",
            hora: "8:00 AM - 12:00 PM"
        },

        {
            tipo: "Corte Programado",
            clase: "corte",
            fecha: "02 de agosto de 2026",
            zona: "Colonia Miraflores",
            titulo: "Interrupción temporal del servicio",
            descripcion: "Debido a trabajos de ampliación de infraestructura, el servicio estará suspendido durante el horario indicado.",
            hora: "9:00 AM - 1:00 PM"
        },

        {
            tipo: "Mejora de Red",
            clase: "mejora",
            fecha: "05 de agosto de 2026",
            zona: "Colonia Hato de Enmedio",
            titulo: "Actualización de equipos",
            descripcion: "Nuestro equipo técnico instalará nuevos equipos para ofrecer una conexión más rápida y estable a todos los clientes del sector.",
            hora: "7:00 AM - 11:00 AM"
        },

        {
            tipo: "Información",
            clase: "informacion",
            fecha: "08 de agosto de 2026",
            zona: "Cobertura General",
            titulo: "Nuevos horarios de atención",
            descripcion: "Informamos a nuestros clientes que el horario de atención presencial ha sido actualizado para brindar un mejor servicio.",
            hora: "Lunes a Viernes 8:00 AM - 5:00 PM"
        }

    ];

    const contenedor = document.getElementById("contenedorAvisos");

    let html = "";

    avisos.forEach(aviso => {

        html += `

        <article class="aviso-card ${aviso.clase}">

            <div class="aviso-badge">
                <i class="fa-solid fa-bullhorn"></i>
                ${aviso.tipo}
            </div>

            <div class="aviso-contenido">

                <div class="aviso-meta">

                    <span>
                        <i class="fa-solid fa-calendar-days"></i>
                        ${aviso.fecha}
                    </span>

                    <span>
                        <i class="fa-solid fa-location-dot"></i>
                        ${aviso.zona}
                    </span>

                </div>

                <h3>${aviso.titulo}</h3>

                <p>${aviso.descripcion}</p>

                <div class="hora-aviso">

                    <i class="fa-solid fa-clock"></i>

                    ${aviso.hora}

                </div>

            </div>

        </article>

        `;

    });

    contenedor.innerHTML = html;

});
