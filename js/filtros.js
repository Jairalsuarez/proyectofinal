
// Extrae las ubicaciones únicas para la barra de búsqueda
export function obtenerUbicacionesUnicas(estancias) {
    return [...new Set(estancias.map(estancia => `${estancia.city}, ${estancia.country}`))];
}

// Filtra la lista de sugerencias mientras el usuario escribe
export function filtrarSugerencias(ubicacionesUnicas, terminoBusqueda) {
    if (terminoBusqueda === "") return [];
    return ubicacionesUnicas.filter(ubicacion =>
        ubicacion.toLowerCase().includes(terminoBusqueda)
    );
}

// Ejecuta el filtrado principal cruzando ubicación y huéspedes
export function filtrarEstancias(estancias, ciudadBuscada, totalHuespedes) {
    return estancias.filter(estancia => {
        const coincideCiudad = ciudadBuscada === "" || estancia.city.toLowerCase() === ciudadBuscada;
        const coincideHuespedes = totalHuespedes === 0 || estancia.maxGuests >= totalHuespedes;
        return coincideCiudad && coincideHuespedes;
    });
}