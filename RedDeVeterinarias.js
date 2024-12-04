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
var inicio_1 = require("./inicio");
var RedDeVeterinarias = /** @class */ (function () {
    function RedDeVeterinarias() {
        this.veterinarias = [];
        this.proveedores = [];
        this.clientes = [];
        this.pacientes = [];
        (0, inicio_1.cargarProveedores)(this);
    }
    //Métodos
    RedDeVeterinarias.prototype.agregarVeterinaria = function (nombre, direccion) {
        var veterinaria = this.veterinarias.find(function (v) { return v.getNombre() === nombre && v.getDireccion() === direccion; });
        if (!veterinaria) {
            var id = this.generarID('veterinaria');
            var nuevaVeterinaria = new Veterinaria_1.Veterinaria(nombre, direccion, id);
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
            var id = this.generarID('proveedor');
            var nuevoProveedor = new Proveedor_1.Proveedor(nombre, telefono, id);
            this.proveedores.push(nuevoProveedor);
            console.log('El proveedor ha sido agregado');
        }
        else {
            console.log('No se puede agregar proveedor porque ya existe');
        }
    };
    RedDeVeterinarias.prototype.eliminarProveedor = function (id) {
        var proveedor = this.proveedores.find(function (v) { return v.getId() === id; });
        if (proveedor) {
            var index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado');
        }
        else {
            console.log('El proveedor no se encuentra en la base de datos');
        }
    };
    RedDeVeterinarias.prototype.eliminarVeterinaria = function (id) {
        var veterinaria = this.veterinarias.find(function (v) { return v.getId() === id; });
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
    //veterniaria
    //proveedor
    RedDeVeterinarias.prototype.generarID = function (tipo) {
        var estaDuplicado = false;
        while (!estaDuplicado) {
            var new_id = Math.floor(Math.random() * 1000);
            switch (tipo) {
                case 'veterinaria':
                    for (var _i = 0, _a = this.veterinarias; _i < _a.length; _i++) {
                        var veterinaria = _a[_i];
                        if (new_id === veterinaria.getId()) {
                            estaDuplicado = true;
                            break;
                        }
                    }
                    break;
                case 'proveedor':
                    for (var _b = 0, _c = this.proveedores; _b < _c.length; _b++) {
                        var proveedor = _c[_b];
                        if (new_id === proveedor.getId()) {
                            estaDuplicado = true;
                            break;
                        }
                    }
                    break;
                default:
                    throw new Error("Falla de generacion de ID");
            }
            if (!estaDuplicado) {
                return new_id;
            }
        }
        return 0;
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
        if (this.veterinarias != null) {
            this.veterinarias.forEach(function (veterinaria) {
                console.table("".concat(veterinaria.getId(), ", ").concat(veterinaria.getNombre(), ", ").concat(veterinaria.getDireccion()));
            });
        }
    };
    RedDeVeterinarias.prototype.listarClientes = function () {
        for (var _i = 0, _a = this.veterinarias; _i < _a.length; _i++) {
            var veterinaria = _a[_i];
            veterinaria.listarClientes();
        }
    };
    RedDeVeterinarias.prototype.listarPacientes = function () {
        for (var _i = 0, _a = this.veterinarias; _i < _a.length; _i++) {
            var veterinaria = _a[_i];
            veterinaria.listarPacientes();
        }
    };
    RedDeVeterinarias.prototype.listarProveedores = function () {
        this.proveedores.forEach(function (proveedor) {
            console.table("".concat(proveedor.getId(), ", ").concat(proveedor.getNombre(), ", ").concat(proveedor.getTelefono()));
        });
    };
    return RedDeVeterinarias;
}());
exports.RedDeVeterinarias = RedDeVeterinarias;
var papa = new RedDeVeterinarias();
papa.listarPacientes();
