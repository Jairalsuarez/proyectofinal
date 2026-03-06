
import { stays } from './stays.js'
import { renderizarstays, renderizarUbicaciones } from './interfaz.js'

const contenedorstays = document.querySelector('#contenedorEstancias')
const contadorstays = document.querySelector('#contadorEstancias')
const modalVentana = document.querySelector('#modalVentana')
const contenidoModal = document.querySelector('#contenidoModal')
const botonAbrirModal = document.querySelector('#botonAbrirModal')
const botonCerrarModal = document.querySelector('#botonCerrarModal')
const entradaUbicacion = document.querySelector('#entradaUbicacion')
const entradaHuespedes = document.querySelector('#entradaHuespedes')
const listaUbicaciones = document.querySelector('#listaUbicaciones')
const navUbicacion = document.querySelector('#navUbicacion')
const navHuespedes = document.querySelector('#navHuespedes')
const botonesBusqueda = document.querySelectorAll('#botonBusquedaEscritorio, #botonBusquedaMovil')

const botonSubirAdultos = document.querySelector('#botonSubirAdultos')
const botonBajarAdultos = document.querySelector('#botonBajarAdultos')
const valorAdultosTexto = document.querySelector('#valorAdultosTexto')
const botonSubirNinos = document.querySelector('#botonSubirNinos')
const botonBajarNinos = document.querySelector('#botonBajarNinos')
const valorNinosTexto = document.querySelector('#valorNinosTexto')

const ubicacionesUnicas = [...new Set(stays.map(estancia => `${estancia.city}, ${estancia.country}`))]

// Oculta el modal de búsqueda quitando la clase Hidden.
function cerrarVentanaModal() {
    modalVentana.classList.add('opacity-0')
    contenidoModal.classList.add('-translate-y-full')
    setTimeout(() => {
        modalVentana.classList.add('hidden')
    }, 300)
}

// Ejecuta el filtrado principal cruzando ubicación y huéspedes
function ejecutarFiltro() {
    const ciudadBuscada = entradaUbicacion.value.split(',')[0].trim().toLowerCase()
    const totalHuespedesCalculado = parseInt(valorAdultosTexto.innerText) + parseInt(valorNinosTexto.innerText)

    navUbicacion.innerText = entradaUbicacion.value || "Add location"
    navHuespedes.innerText = totalHuespedesCalculado > 0 ? `${totalHuespedesCalculado} guests` : "Add guests"

    const resultadosFiltrados = stays.filter(estancia => {
        const coincideCiudad = ciudadBuscada === "" || estancia.city.toLowerCase() === ciudadBuscada
        const coincideHuespedes = totalHuespedesCalculado === 0 || estancia.maxGuests >= totalHuespedesCalculado
        return coincideCiudad && coincideHuespedes
    })

    renderizarstays(resultadosFiltrados, contenedorstays, contadorstays)
}

// Calcula el total de adultos y niños, actualiza el input y dispara el filtro automático
function actualizarTotalHuespedes() {
    const cantidadAdultos = parseInt(valorAdultosTexto.innerText)
    const cantidadNinos = parseInt(valorNinosTexto.innerText)
    const totalPersonas = cantidadAdultos + cantidadNinos
    entradaHuespedes.value = totalPersonas > 0 ? `${totalPersonas} guests` : ""
    ejecutarFiltro() 
}

// Eventos del Modal
botonAbrirModal.addEventListener('click', () => {
    modalVentana.classList.remove('hidden')
    setTimeout(() => {
        modalVentana.classList.remove('opacity-0')
        contenidoModal.classList.remove('-translate-y-full')
    }, 10)
})

botonCerrarModal.addEventListener('click', cerrarVentanaModal)

modalVentana.addEventListener('click', (evento) => {
    if (evento.target === modalVentana) {
        cerrarVentanaModal()
    }
})

// Evento de búsqueda dinámica de locaciones
entradaUbicacion.addEventListener('keyup', (evento) => {
    const terminoBusqueda = evento.target.value.trim().toLowerCase()

    if (terminoBusqueda === "") {
        renderizarUbicaciones([], listaUbicaciones, entradaUbicacion)
        ejecutarFiltro() 
        return
    }

    const ubicacionesFiltradas = ubicacionesUnicas.filter(ubicacion =>
        ubicacion.toLowerCase().includes(terminoBusqueda)
    )
    renderizarUbicaciones(ubicacionesFiltradas, listaUbicaciones, entradaUbicacion)
    ejecutarFiltro() 
})

// Eventos de botones de huéspedes
botonSubirAdultos.addEventListener('click', () => {
    let valorActual = parseInt(valorAdultosTexto.innerText)
    valorAdultosTexto.innerText = valorActual + 1
    actualizarTotalHuespedes()
})

botonBajarAdultos.addEventListener('click', () => {
    let valorActual = parseInt(valorAdultosTexto.innerText)
    if (valorActual > 0) {
        valorAdultosTexto.innerText = valorActual - 1
        actualizarTotalHuespedes()
    }
})

botonSubirNinos.addEventListener('click', () => {
    let valorActual = parseInt(valorNinosTexto.innerText)
    valorNinosTexto.innerText = valorActual + 1
    actualizarTotalHuespedes()
})

botonBajarNinos.addEventListener('click', () => {
    let valorActual = parseInt(valorNinosTexto.innerText)
    if (valorActual > 0) {
        valorNinosTexto.innerText = valorActual - 1
        actualizarTotalHuespedes()
    }
})

// Cierra el modal al darle Buscar. 
botonesBusqueda.forEach(boton => {
    boton.addEventListener('click', () => {
        ejecutarFiltro()
        cerrarVentanaModal()
    })
})

// Es el encargado de renderizar todo al iniciar la pagina
renderizarstays(stays, contenedorstays, contadorstays)