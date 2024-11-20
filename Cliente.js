"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const generarId_1 = require("./generarId");
class Cliente {
    id;
    nombre;
    telefono;
    visitas;
    esVIP;
    mascotas;
    constructor(nombre, telefono) {
        this.id = (0, generarId_1.generarIDAleatorio)();
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 1;
        this.esVIP = false;
        this.mascotas = [];
    }
    modificarDatos(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
        console.log(`datos modificados satisactoriamente, nombre: ${this.nombre}, telefono: ${this.telefono}. `);
    }
    darDeBaja() {
        console.log(`Cliente ${this.nombre} ha sido dado de baja.`);
    }
    getId() {
        return this.id;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getTelefono() {
        return this.telefono;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
    getVisitas() {
        return this.visitas;
    }
    setVisitas(visitas) {
        this.visitas = visitas;
    }
    getEsVIP() {
        return this.esVIP;
    }
    setEsVIP(esVIP) {
        this.esVIP = esVIP;
    }
    agregarMascota(mascota) {
        if (mascota != undefined && !this.mascotas.includes(mascota)) {
            this.mascotas.push(mascota);
        }
    }
}
exports.Cliente = Cliente;
