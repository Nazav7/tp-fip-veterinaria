"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var utils_1 = require("./Clases/utils");
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, idDueno) {
        this.id = (0, utils_1.generarID)('../bbdd/pacientes.txt');
        this.nombre = nombre;
        this.especie = especie;
        this.idDueno = idDueno;
    }
    Paciente.prototype.modificarDatos = function (nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
        console.log("datos modificados satisactoriamente, nombre: ".concat(this.nombre, ", especie: ").concat(this.especie, ". "));
    };
    Paciente.prototype.darDeBaja = function () {
        console.log("Paciente ".concat(this.nombre, " ha sido dado de baja."));
    };
    //getters & setters
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    Paciente.prototype.getIdDueno = function () {
        return this.idDueno;
    };
    Paciente.prototype.setIdDueno = function (idDueno) {
        this.idDueno = idDueno;
    };
    Paciente.prototype.getId = function () {
        return this.id;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
