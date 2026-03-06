

export function configurarEventos(dom, acciones) {
    // 1. Eventos del Modal
    dom.botonAbrirModal.addEventListener('click', () => acciones.abrirModal(dom.modalVentana, dom.contenidoModal));
    dom.botonCerrarModal.addEventListener('click', () => acciones.cerrarModal(dom.modalVentana, dom.contenidoModal));
    
    dom.modalVentana.addEventListener('click', (evento) => {
        if (evento.target === dom.modalVentana) acciones.cerrarModal(dom.modalVentana, dom.contenidoModal);
    });

    // 2. Evento del Buscador (Teclado)
    dom.entradaUbicacion.addEventListener('keyup', (evento) => {
        const terminoBusqueda = evento.target.value.trim().toLowerCase();
        const sugerencias = acciones.filtrarSugerencias(acciones.ubicacionesUnicas, terminoBusqueda);
        acciones.renderizarUbicaciones(sugerencias, dom.listaUbicaciones, dom.entradaUbicacion, acciones.coordinarFiltro);
        acciones.coordinarFiltro(); 
    });

    // 3. Eventos de los botones de Huéspedes (+ y -)
    dom.botonSubirAdultos.addEventListener('click', () => {
        dom.valorAdultosTexto.innerText = parseInt(dom.valorAdultosTexto.innerText) + 1;
        acciones.actualizarHuespedes();
    });

    dom.botonBajarAdultos.addEventListener('click', () => {
        if (parseInt(dom.valorAdultosTexto.innerText) > 0) {
            dom.valorAdultosTexto.innerText = parseInt(dom.valorAdultosTexto.innerText) - 1;
            acciones.actualizarHuespedes();
        }
    });

    dom.botonSubirNinos.addEventListener('click', () => {
        dom.valorNinosTexto.innerText = parseInt(dom.valorNinosTexto.innerText) + 1;
        acciones.actualizarHuespedes();
    });

    dom.botonBajarNinos.addEventListener('click', () => {
        if (parseInt(dom.valorNinosTexto.innerText) > 0) {
            dom.valorNinosTexto.innerText = parseInt(dom.valorNinosTexto.innerText) - 1;
            acciones.actualizarHuespedes();
        }
    });

    // 4. Botones de búsqueda manual
    dom.botonesBusqueda.forEach(boton => {
        boton.addEventListener('click', () => {
            acciones.coordinarFiltro();
            acciones.cerrarModal(dom.modalVentana, dom.contenidoModal);
        });
    });
}