"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedDeVeterinarias = void 0;
var Veterinaria_1 = require("./Veterinaria");
var Proveedor_1 = require("./Proveedor");
var RedDeVeterinarias = /** @class */ (function () {
    function RedDeVeterinarias() {
        this.veterinarias = [];
        this.proveedores = [];
        this.clientes = [];
        this.pacientes = [];
    }
    //Métodos
    RedDeVeterinarias.prototype.agregarVeterinaria = function (nombre, direccion) {
        var veterinaria = this.veterinarias.find(function (v) { return v.getNombre() === nombre && v.getDireccion() === direccion; });
        if (!veterinaria) {
            var nuevaVeterinaria = new Veterinaria_1.Veterinaria(nombre, direccion);
            this.veterinarias.push(nuevaVeterinaria);
            console.log('La veterinaria ha sido agregada');
        }
        else {
            console.log('No se puede agregar veterinaria porque ya existe');
        }
    };
    RedDeVeterinarias.prototype.agregarProveedor = function (nombre, telefono) {
        var proveedor = this.proveedores.find(function (p) { return p.getNombre() === nombre && p.getTelefono() === telefono; });
        if (!proveedor) {
            var nuevoProveedor = new Proveedor_1.Proveedor(nombre, telefono);
            this.proveedores.push(nuevoProveedor);
            console.log('El proveedor ha sido agregado');
        }
        else {
            console.log('No se puede agregar proveedor porque ya existe');
        }
    };
    RedDeVeterinarias.prototype.eliminarProveedor = function (nombre, telefono) {
        var proveedor = this.proveedores.find(function (p) { return p.getNombre() === nombre && p.getTelefono() === telefono; });
        if (proveedor) {
            var index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado');
        }
        else {
            console.log('El proveedor no se encuentra en la base de datos');
        }
    };
    RedDeVeterinarias.prototype.eliminarVeterinaria = function (nombre, direccion) {
        var veterinaria = this.veterinarias.find(function (p) { return p.getNombre() === nombre && p.getDireccion() === direccion; });
        if (veterinaria) {
            var index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias.splice(index, 1);
            console.log('La veterinaria ha sido eliminada');
        }
        else {
            console.log('La veterinaria no se encuentra en la base de datos');
        }
    };
    RedDeVeterinarias.prototype.modificarVeterinaria = function (id, nuevoNombre, nuevaDireccion) {
        var veterinaria = this.veterinarias.find(function (v) { return v.getId() === id; });
        if (veterinaria) {
            veterinaria.setNombre(nuevoNombre);
            veterinaria.setDireccion(nuevaDireccion);
            console.log('La veterinaria ha sido modificada');
        }
        else {
            console.log('No se encontró ID');
        }
    };
    RedDeVeterinarias.prototype.modificarProveedor = function (id, nuevoNombre, nuevoTelefono) {
        var proveedor = this.proveedores.find(function (p) { return p.getId() === id; });
        if (proveedor) {
            proveedor.setNombre(nuevoNombre);
            proveedor.setTelefono(nuevoTelefono);
            console.log('El proveedor ha sido modificado');
        }
        else {
            console.log('No se encontró ID');
        }
    };
    //Getters
    RedDeVeterinarias.prototype.getClientes = function () {
        return __spreadArray([], this.clientes, true);
    };
    RedDeVeterinarias.prototype.getPacientes = function () {
        return __spreadArray([], this.pacientes, true);
    };
    RedDeVeterinarias.prototype.getVeterinaria = function () {
        return __spreadArray([], this.veterinarias, true);
    };
    RedDeVeterinarias.prototype.getProveedor = function () {
        return __spreadArray([], this.proveedores, true);
    };
    //Setters
    RedDeVeterinarias.prototype.setClientes = function (nuevaLista) {
        this.clientes = __spreadArray([], nuevaLista, true);
    };
    RedDeVeterinarias.prototype.setPacientes = function (nuevaLista) {
        this.pacientes = __spreadArray([], nuevaLista, true);
    };
    RedDeVeterinarias.prototype.setVeterinarias = function (nuevaLista) {
        this.veterinarias = __spreadArray([], nuevaLista, true);
    };
    RedDeVeterinarias.prototype.setProveedores = function (nuevaLista) {
        this.proveedores = __spreadArray([], nuevaLista, true);
    };
    //listar
    RedDeVeterinarias.prototype.listarVeterinarias = function () {
        this.veterinarias.forEach(function (veterinaria) {
            console.log("".concat(veterinaria.getId(), ", ").concat(veterinaria.getNombre(), ", ").concat(veterinaria.getDireccion()));
        });
    };
    RedDeVeterinarias.prototype.listarClientes = function () {
        this.clientes.forEach(function (cliente) {
            console.log("".concat(cliente.getId(), ", ").concat(cliente.getNombre(), ", ").concat(cliente.getTelefono(), ", ").concat(cliente.getEsVIP()));
        });
    };
    RedDeVeterinarias.prototype.listarPacientes = function () {
        this.pacientes.forEach(function (paciente) {
            console.log("".concat(paciente.getId(), ", ").concat(paciente.getNombre(), ", ").concat(paciente.getEspecie()));
        });
    };
    RedDeVeterinarias.prototype.listarProveedores = function () {
        this.proveedores.forEach(function (proveedor) {
            console.log("".concat(proveedor.getId(), ", ").concat(proveedor.getNombre(), ", ").concat(proveedor.getTelefono()));
        });
    };
    return RedDeVeterinarias;
}());
exports.RedDeVeterinarias = RedDeVeterinarias;
