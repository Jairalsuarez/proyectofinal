
export function renderizarstays(elementos, contenedorstays, contadorstays) {
    contenedorstays.innerHTML = "";
    contadorstays.innerText = elementos.length > 12 ? '12+ stays' : `${elementos.length} stays`;

    if (elementos.length === 0) {
        contenedorstays.innerHTML = `<p class="text-gray-500 font-semibold col-span-full text-center mt-10">No stays found for this search.</p>`;
        return;
    }

    elementos.forEach(estancia => {
        const tarjeta = document.createElement('div');
        tarjeta.className = "flex flex-col gap-3 cursor-pointer";

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
        `;
        contenedorstays.appendChild(tarjeta);
    });
}

export function renderizarUbicaciones(ubicaciones, listaUbicaciones, entradaUbicacion, funcionFiltro) {
    listaUbicaciones.innerHTML = "";
    ubicaciones.forEach(ubicacion => {
        const elementoLista = document.createElement('li');
        elementoLista.className = "flex items-center gap-3 cursor-pointer text-gray-700 hover:text-black hover:font-semibold";
        elementoLista.innerHTML = `<span class="text-xl">📍</span> ${ubicacion}`;
        
        elementoLista.addEventListener('click', () => {
            entradaUbicacion.value = ubicacion;
            renderizarUbicaciones([], listaUbicaciones, entradaUbicacion, funcionFiltro);
            if (funcionFiltro) funcionFiltro(); 
        });
        
        listaUbicaciones.appendChild(elementoLista);
    });
}

export function abrirVentanaModal(modalVentana, contenidoModal) {
    modalVentana.classList.remove('hidden');
    setTimeout(() => {
        modalVentana.classList.remove('opacity-0');
        contenidoModal.classList.remove('-translate-y-full');
    }, 10);
}

export function cerrarVentanaModal(modalVentana, contenidoModal) {
    modalVentana.classList.add('opacity-0');
    contenidoModal.classList.add('-translate-y-full');
    setTimeout(() => {
        modalVentana.classList.add('hidden');
    }, 300);
}