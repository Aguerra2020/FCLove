
    // Función para verificar si el elemento de video es visible en la ventana
    function estaEnLaVentana(elemento) {
        const rect = elemento.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    // Función para activar la reproducción cuando el video es visible
    function activarReproduccion() {
        const video = document.getElementById('miVideo');
        if (estaEnLaVentana(video)) {
            video.play();
            // Detener la detección una vez que se haya activado la reproducción
            window.removeEventListener('scroll', activarReproduccion);
        }
    }

    // Agregar un event listener para el evento 'scroll'
    window.addEventListener('scroll', activarReproduccion);

    // Llamar a la función una vez al cargar la página para comprobar el estado inicial
    activarReproduccion();
