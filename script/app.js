document.addEventListener("DOMContentLoaded", function() {
    const botonAnterior = document.getElementById('anterior'); // Botón Anterior
    const botonProximo = document.getElementById('proximo'); // Botón Proximo
    const carrusel = document.querySelector('.contenedor__tarjeta'); // Seleccionar el carrusel
    let posicionDelScroll = 0;
    let tituloOriginal = document.title; // Titulo original

    //  Cambio de texto de la pestaña
    window.onblur = function(){
        document.title = '¡Aquí estoy! :D';
    }
    
    window.onfocus = function() {
        document.title = tituloOriginal;
    }

    //  Funciones del carrusel
    botonAnterior.addEventListener('click', () => {
        const anchoTarjeta = carrusel.offsetWidth;
        posicionDelScroll = Math.max(posicionDelScroll - anchoTarjeta, 0);
        carrusel.scrollTo({ left: posicionDelScroll, behavior: 'smooth'});
    });

    botonProximo.addEventListener('click', () => {
        const anchoTarjeta = carrusel.offsetWidth;
        posicionDelScroll = Math.min(posicionDelScroll + anchoTarjeta, carrusel.scrollWidth - anchoTarjeta);
        carrusel.scrollTo({ left: posicionDelScroll, behavior: 'smooth'});
    });


})