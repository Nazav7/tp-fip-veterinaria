"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const generarId_1 = require("./generarId");
class Paciente {
    id;
    nombre;
    especie;
    idDuenio;
    duenios = [];
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = this.validarEspecie(especie);
        this.id = (0, generarId_1.generarIDAleatorio)();
    }
    validarEspecie(especie) {
        if (especie === "perro" || especie === "gato") {
            return especie;
        }
        else {
            return "exótica";
        }
    }
    asignarID(id) {
        if (id > 0 && this.duenios?.find(duenio => duenio.getId() == id)) {
            this.idDuenio = id;
        }
        else {
            console.log("No se encontró un cliente con ese ID.");
        }
    }
    agregarDuenio(duenio) {
        if (duenio != undefined) {
            this.duenios.push(duenio);
        }
    }
    modificarDatos(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
        console.log(`datos modificados satisactoriamente, nombre: ${this.nombre}, especie: ${this.especie}. `);
    }
    darDeBaja() {
        console.log(`Paciente ${this.nombre} ha sido dado de baja.`);
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getEspecie() {
        return this.especie;
    }
    setEspecie(especie) {
        this.especie = especie;
    }
    getIdDuenio() {
        return this.idDuenio;
    }
    setIdDuenio(idDuenio) {
        this.idDuenio = idDuenio;
    }
    getId() {
        return this.id;
    }
}
exports.Paciente = Paciente;
