
import { stays } from './stays.js';
import { obtenerUbicacionesUnicas, filtrarSugerencias, filtrarEstancias } from './filtros.js';
import { renderizarstays, renderizarUbicaciones, abrirVentanaModal, cerrarVentanaModal } from './interfaz.js';
import { configurarEventos } from './eventos.js';

const dom = {
    contenedorstays: document.querySelector('#contenedorEstancias'),
    contadorstays: document.querySelector('#contadorEstancias'),
    modalVentana: document.querySelector('#modalVentana'),
    contenidoModal: document.querySelector('#contenidoModal'),
    botonAbrirModal: document.querySelector('#botonAbrirModal'),
    botonCerrarModal: document.querySelector('#botonCerrarModal'),
    entradaUbicacion: document.querySelector('#entradaUbicacion'),
    entradaHuespedes: document.querySelector('#entradaHuespedes'),
    listaUbicaciones: document.querySelector('#listaUbicaciones'),
    navUbicacion: document.querySelector('#navUbicacion'),
    navHuespedes: document.querySelector('#navHuespedes'),
    botonesBusqueda: document.querySelectorAll('#botonBusquedaEscritorio, #botonBusquedaMovil'),
    botonSubirAdultos: document.querySelector('#botonSubirAdultos'),
    botonBajarAdultos: document.querySelector('#botonBajarAdultos'),
    valorAdultosTexto: document.querySelector('#valorAdultosTexto'),
    botonSubirNinos: document.querySelector('#botonSubirNinos'),
    botonBajarNinos: document.querySelector('#botonBajarNinos'),
    valorNinosTexto: document.querySelector('#valorNinosTexto')
};

const ubicacionesUnicas = obtenerUbicacionesUnicas(stays);

// 2. Lógica central
function coordinarFiltro() {
    const ciudadBuscada = dom.entradaUbicacion.value.split(',')[0].trim().toLowerCase();
    const totalHuespedesCalculado = parseInt(dom.valorAdultosTexto.innerText) + parseInt(dom.valorNinosTexto.innerText);

    dom.navUbicacion.innerText = dom.entradaUbicacion.value || "Add location";
    dom.navHuespedes.innerText = totalHuespedesCalculado > 0 ? `${totalHuespedesCalculado} guests` : "Add guests";

    const resultados = filtrarEstancias(stays, ciudadBuscada, totalHuespedesCalculado);
    renderizarstays(resultados, dom.contenedorstays, dom.contadorstays);
}

function actualizarTotalHuespedes() {
    const totalPersonas = parseInt(dom.valorAdultosTexto.innerText) + parseInt(dom.valorNinosTexto.innerText);
    dom.entradaHuespedes.value = totalPersonas > 0 ? `${totalPersonas} guests` : "";
    coordinarFiltro();
}

// 3. Agrupar las funciones necesarias en un objeto
const acciones = {
    abrirModal: abrirVentanaModal,
    cerrarModal: cerrarVentanaModal,
    filtrarSugerencias: filtrarSugerencias,
    renderizarUbicaciones: renderizarUbicaciones,
    coordinarFiltro: coordinarFiltro,
    actualizarHuespedes: actualizarTotalHuespedes,
    ubicacionesUnicas: ubicacionesUnicas
};

// 4. Encender el proyecto
configurarEventos(dom, acciones);
renderizarstays(stays, dom.contenedorstays, dom.contadorstays);