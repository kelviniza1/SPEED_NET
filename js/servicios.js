document.addEventListener("DOMContentLoaded", () => {
    const contenido = document.getElementById("contenido");

    const servicios = [
        {
            etiqueta: "Servicio principal",
            titulo: "Internet residencial simétrico",
            texto: "Planes desde 40 hasta 200 megas, diseñados para estudiar, trabajar desde casa, ver streaming, jugar en línea y conectar varios dispositivos.",
            puntos: ["Misma velocidad de subida y bajada", "Conexión estable para el hogar", "Soporte técnico en menos de 24 horas", "Instalación gratis por promoción actual"]
        },
        {
            etiqueta: "Servicio adicional",
            titulo: "Cable",
            texto: "Servicio de cable para complementar la experiencia del hogar junto al internet SpeedNet.",
            puntos: ["Consulta disponibilidad según zona", "Atención por WhatsApp", "Servicio pensado para uso familiar"]
        }
    ];

    const beneficios = [
        { titulo: "Internet 100% simétrico", texto: "Megas reales con igual subida y bajada." },
        { titulo: "Sin contratos amarrados", texto: "Contratación simple y transparente." },
        { titulo: "Sin Central de Riesgos", texto: "No se revisa historial crediticio." },
        { titulo: "Cuota fija mensual", texto: "Pagos claros cada mes." }
    ];

    let serviciosHTML = "";
    for (let i = 0; i < servicios.length; i++) {
        let puntosHTML = "";
        for (let j = 0; j < servicios[i].puntos.length; j++) {
            puntosHTML += `<li>${servicios[i].puntos[j]}</li>`;
        }

        serviciosHTML += `
            <article class="card image-card" data-reveal>
                <img src="${i === 0 ? "img/servicios-tecnico.jpg" : "img/servicios-cable.jpg"}" alt="${i === 0 ? "Técnico revisando equipo de internet" : "Control remoto para servicio de cable"}">
                <div class="image-card-content">
                <span class="eyebrow">${servicios[i].etiqueta}</span>
                <h2>${servicios[i].titulo}</h2>
                <p>${servicios[i].texto}</p>
                <ul class="service-list">
                    ${puntosHTML}
                </ul>
                </div>
            </article>
        `;
    }

    let beneficiosHTML = "";
    for (let i = 0; i < beneficios.length; i++) {
        beneficiosHTML += `
            <article class="card" data-reveal>
                <strong>${beneficios[i].titulo}</strong>
                <p>${beneficios[i].texto}</p>
            </article>
        `;
    }

    contenido.innerHTML = `
        <section class="hero">
            <div class="container">
                <div class="hero-layout">
                    <div class="hero-copy">
                        <div class="hero-mark">
                            <img src="img/Logo.PNG" alt="SpeedNet">
                            <strong>SpeedNet</strong>
                        </div>
                        <span class="eyebrow">Servicios</span>
                        <h1>Internet y cable para mantener tu hogar conectado.</h1>
                        <p>SpeedNet ofrece soluciones residenciales enfocadas en estabilidad, megas reales y atención personalizada.</p>
                        <div class="hero-actions">
                            <a class="btn btn-primary" href="contacto.html">Cotizar servicio</a>
                            <a class="btn btn-outline" href="planes.html">Ver planes</a>
                        </div>
                    </div>
                    <figure class="hero-photo">
                        <img src="img/servicios-fibra.jpg" alt="Conexiones de fibra óptica">
                    </figure>
                </div>
            </div>
        </section>

        <section class="marquee" aria-label="Servicios SpeedNet">
            <div class="marquee-track">
                <span>Internet residencial</span>
                <span>Cable</span>
                <span>Soporte en menos de 24h</span>
                <span>Instalación gratis</span>
                <span>Atención por WhatsApp</span>
                <span>Internet residencial</span>

            </div>
        </section>

        <section class="section" data-reveal>
            <div class="container service-grid">
                ${serviciosHTML}
            </div>
        </section>

        <section class="section section-alt" data-reveal>
            <div class="container">
                <div class="section-header">
                    <h2>Beneficios incluidos</h2>
                    <p>Condiciones claras para clientes nuevos y actuales.</p>
                </div>
                <div class="benefits-grid">
                    ${beneficiosHTML}
                </div>
            </div>
        </section>
    `;
});
