"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
var utils_1 = require("./Clases/utils");
var Proveedor = /** @class */ (function () {
    function Proveedor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = (0, utils_1.generarID)('../bbdd/proveedores.txt');
    }
    //Getters
    Proveedor.prototype.getNombre = function () {
        return this.nombre;
    };
    Proveedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    Proveedor.prototype.getId = function () {
        return this.id;
    };
    //Setters
    Proveedor.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Proveedor.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    return Proveedor;
}());
exports.Proveedor = Proveedor;
