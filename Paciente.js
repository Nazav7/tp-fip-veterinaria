"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, idDueno, id) {
        this.id = id;
        this.nombre = nombre;
        this.especie = this.verificarEspecie(especie);
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
    Paciente.prototype.verificarEspecie = function (especie) {
        if (especie.toUpperCase() == 'PERRO') {
            return 'perro';
        }
        else if (especie.toUpperCase() == 'GATO') {
            return 'gato';
        }
        else {
            return 'exotico';
        }
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
