// utils.js
// Módulo de utilidades

/**
 * Genera un saludo personalizado
 * @param {string} nombre - Nombre de la persona
 * @param {string} hora - Momento del día (mañana, tarde, noche)
 * @returns {string} Saludo personalizado
 */
function generarSaludo(nombre, hora = "día") {
    const saludos = {
        mañana: "Buenos días",
        tarde: "Buenas tardes",
        noche: "Buenas noches",
        día: "Hola"
    };
    
    const saludo = saludos[hora] || "Hola";
    return `${saludo}, ${nombre}!`;
}

/**
 * Formatea una fecha en español
 * @param {Date} fecha - Fecha a formatear
 * @returns {string} Fecha formateada
 */
function formatearFecha(fecha = new Date()) {
    return fecha.toLocaleDateString('es-CO', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

module.exports = {
    generarSaludo,
    formatearFecha
};