document.addEventListener("DOMContentLoaded", () => {
    const contenido = document.getElementById("contenido");

    const planes = [
        { nombre: "Básico", megas: "40 megas", precio: "L750", texto: "Para navegación diaria, estudio y redes sociales." },
        { nombre: "Hogar", megas: "50 megas", precio: "L850", texto: "Buena opción para varios dispositivos conectados." },
        { nombre: "Hogar Plus", megas: "60 megas", precio: "L950", texto: "Más velocidad para streaming, clases y trabajo remoto." },
        { nombre: "Avanzado", megas: "100 megas", precio: "L1,150", texto: "Plan recomendado para hogares con alta demanda." },
        { nombre: "Familiar", megas: "150 megas", precio: "L1,250", texto: "Pensado para familias con uso intensivo." },
        { nombre: "Premium", megas: "200 megas", precio: "L1,450", texto: "La mayor velocidad residencial de SpeedNet." }
    ];

    const beneficios = [
        { titulo: "Internet 100% simétrico", texto: "Misma velocidad de subida y bajada." },
        { titulo: "Soporte en menos de 24h", texto: "Atención técnica rápida ante reportes." },
        { titulo: "Sin Central de Riesgos", texto: "Contratación sin revisión crediticia." },
        { titulo: "Cuota fija mensual", texto: "Sin cargos ocultos ni sorpresas." },
        { titulo: "Cancelación sin costo", texto: "Puedes cancelar sin penalidades." },
        { titulo: "Sin contratos amarrados", texto: "Más libertad para el cliente." }
    ];

    let planesHTML = "";
    for (let i = 0; i < planes.length; i++) {
        planesHTML += `
            <article class="card plan-card ${i === 3 ? "featured" : ""}" data-reveal>
                <span class="plan-badge">${i === 3 ? "Plan destacado" : "Internet simétrico"}</span>
                <h3>${planes[i].nombre}</h3>
                <p class="plan-mb">${planes[i].megas}</p>
                <p>${planes[i].texto}</p>
                <p class="plan-price">${planes[i].precio}<span>/mes</span></p>
                <a class="btn btn-outline" href="contacto.html">Contratar</a>
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
                        <span class="eyebrow">Planes residenciales</span>
                        <h1>Elige la velocidad ideal para tu hogar.</h1>
                        <p>Todos los planes incluyen internet 100% simétrico, cuota fija mensual e instalación GRATIS por promoción actual.</p>
                        <div class="hero-actions">
                            <a class="btn btn-primary" href="contacto.html">Cotizar plan</a>
                            <a class="btn btn-outline" href="#beneficios">Ver beneficios</a>
                        </div>
                    </div>
                    <figure class="hero-photo">
                        <img src="img/planes-familia.jpg" alt="Familia usando internet en casa">
                    </figure>
                </div>
            </div>
        </section>

        <section class="marquee" aria-label="Beneficios principales SpeedNet">
            <div class="marquee-track">
                <span>Megas reales</span>
                <span>Internet simétrico</span>
                <span>Instalación gratis</span>
                <span>Cuota fija mensual</span>
                <span>Sin contratos amarrados</span>
                
            </div>
        </section>

        <section class="section" data-reveal>
            <div class="container">
                <div class="media-band" style="margin-bottom:34px;">
                    <img src="img/planes-router.jpg" alt="Router residencial para conexión SpeedNet">
                    <div>
                        <span class="eyebrow">Conectividad residencial</span>
                        <h2>Planes para trabajar, estudiar y disfrutar contenido en casa</h2>
                        <p class="muted">SpeedNet organiza sus planes para que cada hogar elija la velocidad que mejor se adapta a sus dispositivos y actividades diarias.</p>
                    </div>
                </div>

                <div class="section-header">
                    <span class="eyebrow">Precios mensuales</span>
                    <h2>Planes y precios SpeedNet</h2>
                    <p>La disponibilidad del plan depende de la cobertura en tu colonia.</p>
                </div>
                <div class="plans-grid">
                    ${planesHTML}
                </div>
            </div>
        </section>

        <section class="section section-alt" id="beneficios" data-reveal>
            <div class="container">
                <div class="section-header">
                    <h2>Todos los planes incluyen</h2>
                    <p>Beneficios claros para contratar sin complicaciones.</p>
                </div>
                <div class="benefits-grid">
                    ${beneficiosHTML}
                </div>
            </div>
        </section>
    `;
});
