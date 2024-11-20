"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarIDAleatorio = generarIDAleatorio;
const idGeneradas = [];
function generarIDAleatorio() {
    const idGenerado = Math.floor(Math.random() * 10000) + 1;
    if (idGeneradas.find(id => id === idGenerado)) {
        generarIDAleatorio();
    }
    else {
        idGeneradas.push(idGenerado);
    }
    return idGenerado;
}
