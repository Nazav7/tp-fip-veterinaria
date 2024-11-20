"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
const generarId_1 = require("./generarId");
class Proveedor {
    id;
    nombre;
    telefono;
    constructor(nombre, telefono) {
        this.id = (0, generarId_1.generarIDAleatorio)();
        this.nombre = nombre;
        this.telefono = telefono;
    }
    getNombre() {
        return this.nombre;
    }
    getTelefono() {
        return this.telefono;
    }
    getId() {
        return this.id;
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    setTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono;
    }
    setId(nuevoId) {
        this.id = nuevoId;
    }
}
exports.Proveedor = Proveedor;
