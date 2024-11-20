"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var utils_1 = require("./Clases/utils");
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono) {
        this.id = (0, utils_1.generarID)('../bbdd/clientes.txt');
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 1;
        this.esVIP = false;
    }
    Cliente.prototype.registrarVisita = function () {
        this.visitas += 1;
        this.esVIP = this.visitas >= 5;
    };
    Cliente.prototype.modificarDatos = function (nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
        console.log("datos modificados satisactoriamente, nombre: ".concat(this.nombre, ", telefono: ").concat(this.telefono, ". "));
    };
    Cliente.prototype.darDeBaja = function () {
        console.log("Cliente ".concat(this.nombre, " ha sido dado de baja."));
    };
    // getters & setters
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Cliente.prototype.getVisitas = function () {
        return this.visitas;
    };
    Cliente.prototype.setVisitas = function (visitas) {
        this.visitas = visitas;
    };
    Cliente.prototype.getEsVIP = function () {
        return this.esVIP;
    };
    Cliente.prototype.setEsVIP = function (esVIP) {
        this.esVIP = esVIP;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
