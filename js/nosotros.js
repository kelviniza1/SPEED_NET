document.addEventListener("DOMContentLoaded", () => {
    const contenido = document.getElementById("contenido");

    const valores = [
        { titulo: "Transparencia", texto: "Planes claros, cuota fija mensual y comunicación directa con el cliente." },
        { titulo: "Calidad", texto: "Internet con megas reales e iguales en subida y bajada." },
        { titulo: "Cercanía", texto: "Atención por WhatsApp y soporte técnico oportuno." }
    ];

    let valoresHTML = "";
    for (let i = 0; i < valores.length; i++) {
        valoresHTML += `
            <article class="card" data-reveal>
                <strong>${valores[i].titulo}</strong>
                <p>${valores[i].texto}</p>
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
                        <span class="eyebrow">Sobre la empresa</span>
                        <h1>Una nueva etapa de conectividad con experiencia y visión.</h1>
                        <p>SpeedNet nace de la experiencia de un equipo del sector de telecomunicaciones que decidió iniciar una etapa más ordenada, cercana y enfocada en ofrecer internet de calidad.</p>
                        <div class="hero-actions">
                            <a class="btn btn-primary" href="planes.html">Conocer planes</a>
                            <a class="btn btn-outline" href="contacto.html">Contactar</a>
                        </div>
                    </div>
                    <figure class="hero-photo">
                        <img src="img/nosotros-conexion.jpg" alt="Persona trabajando con conexión a internet">
                    </figure>
                </div>
            </div>
        </section>

        <section class="marquee" aria-label="Identidad SpeedNet">
            <div class="marquee-track">
                <span>Calidad</span>
                <span>Transparencia</span>
                <span>Cercanía</span>
                <span>Innovación</span>
                <span>Conexión real</span>
                <span>Calidad</span>
                <span>Transparencia</span>
                <span>Cercanía</span>
                <span>Innovación</span>
                <span>Conexión real</span>
            </div>
        </section>

        <section class="section" data-reveal>
            <div class="container">
                <div class="media-band">
                    <img src="img/servicios-fibra.jpg" alt="Infraestructura de conectividad por fibra">
                    <article class="card">
                        <span class="eyebrow">Nuestra historia</span>
                        <h2>Conectar con honestidad, calidad y cercanía</h2>
                        <p>SpeedNet surge como una empresa hondureña comprometida con brindar conectividad residencial confiable. El proyecto nace de una nueva etapa empresarial, respaldada por aprendizaje, experiencia técnica y una visión clara de crecimiento.</p>
                        <p style="margin-top:12px;">Nuestro enfoque es que cada cliente reciba megas reales, atención clara y un servicio que acompañe las necesidades actuales del hogar.</p>
                    </article>
                </div>
            </div>
        </section>

        <section class="section section-alt" data-reveal>
            <div class="container mv-grid">
                <article class="card">
                    <span class="eyebrow">Misión</span>
                    <h2>Internet de calidad con megas reales</h2>
                    <p>Ofrecer internet de calidad, con megas reales e iguales en subida y bajada, respaldado por atención cercana y soporte técnico oportuno.</p>
                </article>
                <article class="card">
                    <span class="eyebrow">Visión</span>
                    <h2>Crecer dentro y fuera de Honduras</h2>
                    <p>Expandir SpeedNet a nivel nacional e internacional, convirtiéndonos en una empresa reconocida por transparencia, innovación y calidad de servicio.</p>
                </article>
            </div>
        </section>

        <section class="section" data-reveal>
            <div class="container">
                <div class="section-header">
                    <h2>Valores SpeedNet</h2>
                    <p>La identidad de la empresa se apoya en servicio claro, tecnología útil y trato cercano.</p>
                </div>
                <div class="benefits-grid">
                    ${valoresHTML}
                </div>
            </div>
        </section>
    `;
});
