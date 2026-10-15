document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // MENÚ DE NAVEGACIÓN
    // ==========================
    const botonMenu = document.getElementById("boton-menu");
    const navegacion = document.getElementById("navegacion");

    if (botonMenu && navegacion) {
        botonMenu.addEventListener("click", () => {
            const estaOculto = navegacion.classList.toggle("menu-oculto");

            botonMenu.setAttribute("aria-expanded", String(!estaOculto));
            botonMenu.setAttribute(
                "aria-label",
                estaOculto ? "Abrir menú" : "Cerrar menú"
            );
        });
    }

    // ==========================
    // BOTÓN EXPLORAR GÉNEROS
    // ==========================
    document.querySelectorAll('a[href="#generos"]').forEach(enlace => {
        enlace.addEventListener("click", () => {
            if (navegacion && !navegacion.classList.contains("menu-oculto")) {
                navegacion.classList.add("menu-oculto");
                botonMenu?.setAttribute("aria-expanded", "false");
                botonMenu?.setAttribute("aria-label", "Abrir menú");
            }
        });
    });

    // ==========================
    // INFORMACIÓN DE LOS GÉNEROS
    // ==========================
    const generos = {
        clasica: {
            icono: "🎻",
            titulo: "Música clásica",
            descripcion:
                "Tradición musical desarrollada durante siglos, reconocida por sus composiciones, orquestas y riqueza sonora.",
            caracteristicas:
                "Composiciones estructuradas, armonía, melodías elaboradas y diversidad de estilos históricos.",
            instrumentos:
                "Piano, violín, violonchelo, flauta y otros instrumentos orquestales.",
            artistas:
                "Wolfgang Amadeus Mozart, Ludwig van Beethoven y Frédéric Chopin.",
            youtube: "https://youtu.be/tpGSzH0Wlls"
        },
        rock: {
            icono: "🎸",
            titulo: "Rock",
            descripcion:
                "Género que tomó fuerza en la década de 1950 y se convirtió en una expresión cultural de distintas generaciones.",
            caracteristicas:
                "Ritmos marcados, guitarras eléctricas, batería y gran energía.",
            instrumentos:
                "Guitarra eléctrica, bajo, batería y voz.",
            artistas:
                "The Beatles, Queen y Nirvana.",
            youtube: "https://youtu.be/1w7OgIMMRc4"
        },
        pop: {
            icono: "🎤",
            titulo: "Música pop",
            descripcion:
                "Estilo popular que busca conectar con un público amplio mediante canciones memorables y sonidos variados.",
            caracteristicas:
                "Melodías pegadizas, estructuras accesibles y producción moderna.",
            instrumentos:
                "Voz, teclado, guitarra, batería y sintetizadores.",
            artistas:
                "Michael Jackson, Madonna y Taylor Swift.",
            youtube: "https://youtu.be/4NRXx6U8ABQ"
        },
        jazz: {
            icono: "🎷",
            titulo: "Jazz",
            descripcion:
                "Género surgido en comunidades afroamericanas de Estados Unidos, conocido por su creatividad y capacidad de improvisación.",
            caracteristicas:
                "Improvisación, síncopa, ritmos variados y armonías complejas.",
            instrumentos:
                "Saxofón, trompeta, piano, contrabajo y batería.",
            artistas:
                "Louis Armstrong, Miles Davis y Ella Fitzgerald.",
            youtube: "https://youtu.be/JYuyWrkwpok"
        },
        blues: {
            icono: "🎹",
            titulo: "Blues",
            descripcion:
                "Tradición musical afroamericana que influyó profundamente en el jazz, el rock y otros géneros.",
            caracteristicas:
                "Expresión emocional, patrones musicales recurrentes y frases características.",
            instrumentos:
                "Guitarra, piano, armónica, bajo y voz.",
            artistas:
                "B. B. King, Muddy Waters y Robert Johnson.",
            youtube: "https://youtu.be/SgXSomPE_FY"
        },
        reggae: {
            icono: "🌴",
            titulo: "Reggae",
            descripcion:
                "Género originario de Jamaica que alcanzó reconocimiento internacional por su ritmo y sus mensajes culturales y sociales.",
            caracteristicas:
                "Acentos rítmicos característicos, bajo destacado y ritmo relajado.",
            instrumentos:
                "Guitarra, bajo, batería, teclado y percusión.",
            artistas:
                "Bob Marley, Peter Tosh y Jimmy Cliff.",
            youtube: "https://youtu.be/DKVB_CtU8XQ"
        },
        electronica: {
            icono: "🎧",
            titulo: "Música electrónica",
            descripcion:
                "Música creada o transformada mediante instrumentos electrónicos y herramientas digitales.",
            caracteristicas:
                "Sonidos sintetizados, secuencias rítmicas y experimentación sonora.",
            instrumentos:
                "Sintetizadores, controladores MIDI, cajas de ritmos y computadoras.",
            artistas:
                "Daft Punk, Kraftwerk y Jean-Michel Jarre.",
            youtube: "https://youtu.be/jemgIOAjGDw"
        },
        urbana: {
            icono: "🎙️",
            titulo: "Música urbana",
            descripcion:
                "Conjunto de estilos contemporáneos vinculados con la cultura urbana, la identidad y las experiencias sociales.",
            caracteristicas:
                "Ritmos programados, rimas, producción digital y fusión de estilos.",
            instrumentos:
                "Voz, micrófono, computadora, sintetizadores y cajas de ritmos.",
            artistas:
                "Residente, Daddy Yankee y Bad Bunny.",
            youtube: "https://youtu.be/CTFtOOh47oo"
        }
    };

    const panel = document.getElementById("detalle-genero");
    const botonCerrar = document.getElementById("cerrar-detalle");

    const campos = {
        icono: document.getElementById("detalle-icono"),
        titulo: document.getElementById("detalle-titulo"),
        descripcion: document.getElementById("detalle-descripcion"),
        caracteristicas: document.getElementById("detalle-caracteristicas"),
        instrumentos: document.getElementById("detalle-instrumentos"),
        artistas: document.getElementById("detalle-artistas"),
        youtube: document.getElementById("detalle-youtube") 
    };

    function mostrarGenero(clave) {
        const genero = generos[clave];

        if (!genero || !panel) return;

        campos.icono.textContent = genero.icono;
        campos.titulo.textContent = genero.titulo;
        campos.descripcion.textContent = genero.descripcion;
        campos.caracteristicas.textContent = genero.caracteristicas;
        campos.instrumentos.textContent = genero.instrumentos;
        campos.artistas.textContent = genero.artistas;
        
        // Verifica si el botón de YouTube existe en el HTML antes de asignarle el link
        if(campos.youtube) {
            campos.youtube.href = genero.youtube;
        }

        panel.hidden = false;

        panel.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    }

    document.querySelectorAll("[data-genero]").forEach(boton => {
        boton.addEventListener("click", (evento) => {
            evento.preventDefault(); // Evita que salte hacia arriba si es una etiqueta <a>
            mostrarGenero(boton.dataset.genero);
        });
    });

    if (botonCerrar && panel) {
        botonCerrar.addEventListener("click", () => {
            panel.hidden = true;
        });
    }

});