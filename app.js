// app.js
// Mi aplicación de práctica para aprender Git

const APP_NAME = "Git Practice";
const VERSION = "1.0.0";

// Función para mostrar información
function mostrarInfo() {
    console.log("================================");
    console.log(`  ${APP_NAME} v${VERSION}`);
    console.log("================================");
    console.log("Aprendiendo Git paso a paso");
    console.log(`Fecha: ${new Date().toLocaleDateString()}`);
}

// Función para saludar
function saludar(nombre) {
    return `¡Hola, ${nombre}! Bienvenido al curso.`;
}

// Ejecutar
mostrarInfo();
console.log(saludar("Deimer Garcia"));