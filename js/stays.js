const estancias = [
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": "Stylist apartment in center of the city",
        "rating": 4.4,
        "maxGuests": 3,
        "type": "Entire apartment",
        "beds": 2,
        "photo": "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": false,
        "title": "Nice apartment in center of Helsinki",
        "rating": 4.2,
        "maxGuests": 5,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": true,
        "title": "Arty interior in 1900 wooden house",
        "rating": 4.5,
        "maxGuests": 10,
        "type": "Entire house",
        "beds": 6,
        "photo": "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": "Apartment next to market spuare",
        "rating": 4.48,
        "maxGuests": 3,
        "type": "Entire apartment",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": true,
        "title": "Villa Aurora guest-house",
        "rating": 4.75,
        "maxGuests": 9,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": true,
        "title": "A cosy family house",
        "rating": 4.95,
        "maxGuests": 6,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": false,
        "title": "Lovely Studio near Railway Station",
        "rating": 4.68,
        "maxGuests": 2,
        "type": "Private room",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2591&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": false,
        "title": "Peaceful little home in city center",
        "rating": 4.12,
        "maxGuests": 6,
        "type": "Entire house",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": false,
        "title": "Beautiful new studio apartment nearby the center",
        "rating": 4.49,
        "maxGuests": 2,
        "type": "Entire apartment",
        "beds": 1,
        "photo": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2255&q=80"
    },
    {
        "city": "Oulu",
        "country": "Finland",
        "superHost": true,
        "title": "Cozy woodhouse flat with wooden sauna",
        "rating": 4.38,
        "maxGuests": 4,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=930&q=80"
    },
    {
        "city": "Vaasa",
        "country": "Finland",
        "superHost": false,
        "title": "Brand new studio apartment near the harbour",
        "rating": 4.89,
        "maxGuests": 6,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1494203484021-3c454daf695d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Helsinki",
        "country": "Finland",
        "superHost": false,
        "title": "Beautiful and comfortable old wooden house",
        "rating": 4.63,
        "maxGuests": 10,
        "type": "Entire house",
        "beds": null,
        "photo": "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": false,
        "title": "Turku Nordic Home near city center",
        "rating": 4.24,
        "maxGuests": 5,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=2253&q=80"
    },
    {
        "city": "Turku",
        "country": "Finland",
        "superHost": true,
        "title": "Nice 2 room apartment close to everything",
        "rating": 4.34,
        "maxGuests": 6,
        "type": "Entire apartment",
        "beds": 3,
        "photo": "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80"
    }
]

const contenedorEstancias = document.querySelector('#contenedorEstancias')
const contadorEstancias = document.querySelector('#contadorEstancias')
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

const ubicacionesUnicas = [...new Set(estancias.map(estancia => `${estancia.city}, ${estancia.country}`))]

function renderizarEstancias(elementos) {
    contenedorEstancias.innerHTML = ""
    contadorEstancias.innerText = elementos.length > 12 ? '12+ stays' : `${elementos.length} stays`

    if (elementos.length === 0) {
        contenedorEstancias.innerHTML = `<p class="text-gray-500 font-semibold col-span-full text-center mt-10">No stays found for this search.</p>`
        return
    }

    elementos.forEach(estancia => {
        const tarjeta = document.createElement('div')
        tarjeta.className = "flex flex-col gap-3 cursor-pointer"

        tarjeta.innerHTML = `
            <div class="aspect-[16/10] overflow-hidden rounded-3xl">
                <img src="${estancia.photo}" alt="${estancia.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300">
            </div>
            <div class="flex justify-between items-center mt-1">
                <div class="flex items-center gap-2">
                    ${estancia.superHost ? '<span class="border border-gray-700 rounded-xl px-2 py-1 text-[10px] font-bold uppercase text-gray-700">Super Host</span>' : ''}
                    <p class="text-sm text-gray-500">${estancia.city}, ${estancia.type} ${estancia.beds ? `- ${estancia.beds} beds` : ''}</p>
                </div>
                <div class="flex items-center gap-1">
                    <span class="text-red-500 text-lg">★</span>
                    <span class="text-sm text-gray-700">${estancia.rating}</span>
                </div>
            </div>
            <h2 class="text-base font-semibold text-gray-800">${estancia.title}</h2>
        `
        contenedorEstancias.appendChild(tarjeta)
    })
}

function renderizarUbicaciones(ubicaciones) {
    listaUbicaciones.innerHTML = ""
    ubicaciones.forEach(ubicacion => {
        const elementoLista = document.createElement('li')
        elementoLista.className = "flex items-center gap-3 cursor-pointer text-gray-700 hover:text-black hover:font-semibold"
        elementoLista.innerHTML = `<span class="text-xl">📍</span> ${ubicacion}`
        elementoLista.addEventListener('click', () => {
            entradaUbicacion.value = ubicacion
            renderizarUbicaciones([])
        })
        listaUbicaciones.appendChild(elementoLista)
    })
}

function cerrarVentanaModal() {
    modalVentana.classList.add('opacity-0')
    contenidoModal.classList.add('-translate-y-full')
    setTimeout(() => {
        modalVentana.classList.add('hidden')
    }, 300)
}

function actualizarTotalHuespedes() {
    const cantidadAdultos = parseInt(valorAdultosTexto.innerText)
    const cantidadNinos = parseInt(valorNinosTexto.innerText)
    const totalPersonas = cantidadAdultos + cantidadNinos
    entradaHuespedes.value = totalPersonas > 0 ? `${totalPersonas} guests` : ""
}

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

entradaUbicacion.addEventListener('keyup', (evento) => {
    const terminoBusqueda = evento.target.value.trim().toLowerCase()

    if (terminoBusqueda === "") {
        renderizarUbicaciones([])
        return
    }

    const ubicacionesFiltradas = ubicacionesUnicas.filter(ubicacion =>
        ubicacion.toLowerCase().includes(terminoBusqueda)
    )
    renderizarUbicaciones(ubicacionesFiltradas)
})

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

botonesBusqueda.forEach(boton => {
    boton.addEventListener('click', () => {
        const ciudadBuscada = entradaUbicacion.value.split(',')[0].trim().toLowerCase()
        const totalHuespedesCalculado = parseInt(valorAdultosTexto.innerText) + parseInt(valorNinosTexto.innerText)

        navUbicacion.innerText = entradaUbicacion.value || "Add location"
        navHuespedes.innerText = totalHuespedesCalculado > 0 ? `${totalHuespedesCalculado} guests` : "Add guests"

        const resultadosFiltrados = estancias.filter(estancia => {
            const coincideCiudad = ciudadBuscada === "" || estancia.city.toLowerCase() === ciudadBuscada
            const coincideHuespedes = totalHuespedesCalculado === 0 || estancia.maxGuests >= totalHuespedesCalculado
            return coincideCiudad && coincideHuespedes
        })

        renderizarEstancias(resultadosFiltrados)
        cerrarVentanaModal()
    })
})

renderizarEstancias(estancias)