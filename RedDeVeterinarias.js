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
        (0, inicio_1.cargarProveedores)(this);
        (0, inicio_1.generarSucursales)(this);
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
    RedDeVeterinarias.prototype.agregarVeterinariaInicio = function (nombre, direccion) {
        var id = this.generarID('veterinaria');
        var veterinaria = this.veterinarias.find(function (v) { return v.getNombre() === nombre && v.getDireccion() === direccion; });
        if (!veterinaria) {
            var nuevaVeterinaria = new Veterinaria_1.Veterinaria(nombre, direccion, id);
            this.veterinarias.push(nuevaVeterinaria);
        }
    };
    RedDeVeterinarias.prototype.agregarProveedor = function (nombre, telefono) {
        var proveedor = this.proveedores.find(function (p) { return p.getNombre() === nombre && p.getTelefono() === telefono; });
        if (!proveedor) {
            var id = this.generarID('proveedor');
            var nuevoProveedor = new Proveedor_1.Proveedor(id, nombre, telefono);
            this.proveedores.push(nuevoProveedor);
            console.log('El proveedor ha sido agregado');
        }
        else {
            console.log('No se puede agregar proveedor porque ya existe');
        }
    };
    RedDeVeterinarias.prototype.agregarProveedorInicio = function (nombre, telefono) {
        var id = this.generarID('proveedor');
        var proveedor = this.proveedores.find(function (p) { return p.getNombre() === nombre && p.getTelefono() === telefono; });
        if (!proveedor) {
            var nuevoProveedor = new Proveedor_1.Proveedor(id, nombre, telefono);
            this.proveedores.push(nuevoProveedor);
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
    RedDeVeterinarias.prototype.eliminarVeterinaria = function (idVeterinaria) {
        var veterinaria = this.veterinarias.find(function (vet) { return vet.getId() === idVeterinaria; });
        if (veterinaria) {
            // Eliminar los clientes y pacientes de la veterinaria
            veterinaria.setClientes([]);
            veterinaria.setPacientes([]);
            // Eliminar la veterinaria
            var index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias.splice(index, 1);
            console.log('La veterinaria ha sido eliminada junto a sus clientes y pacientes');
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
    RedDeVeterinarias.prototype.getVeterinaria = function () {
        return __spreadArray([], this.veterinarias, true);
    };
    RedDeVeterinarias.prototype.getProveedor = function () {
        return __spreadArray([], this.proveedores, true);
    };
    //Setters
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
        var clientesNoRepetidos = [];
        for (var _i = 0, _a = this.veterinarias; _i < _a.length; _i++) {
            var veterinaria = _a[_i];
            var _loop_1 = function (cliente) {
                // Si el cliente no esta en la lista de clientes no repetidos se agrega
                if (!clientesNoRepetidos.some(function (c) { return c.getNombre() === cliente.getNombre() && c.getTelefono() === cliente.getTelefono(); })) {
                    clientesNoRepetidos.push(cliente);
                }
            };
            for (var _b = 0, _c = veterinaria.getClientes(); _b < _c.length; _b++) {
                var cliente = _c[_b];
                _loop_1(cliente);
            }
        }
        return console.table(clientesNoRepetidos);
    };
    RedDeVeterinarias.prototype.listarPacientes = function () {
        var pacientesNoRepetidos = [];
        for (var _i = 0, _a = this.veterinarias; _i < _a.length; _i++) {
            var veterinaria = _a[_i];
            var _loop_2 = function (paciente) {
                // Si el paciente no esta en la lista de pacientes no repetidos se agrega
                if (!pacientesNoRepetidos.some(function (p) { return p.getNombre() === paciente.getNombre() && p.getIdDueno() === paciente.getIdDueno(); })) {
                    pacientesNoRepetidos.push(paciente);
                }
            };
            for (var _b = 0, _c = veterinaria.getPacientes(); _b < _c.length; _b++) {
                var paciente = _c[_b];
                _loop_2(paciente);
            }
        }
        return console.table(pacientesNoRepetidos);
    };
    RedDeVeterinarias.prototype.listarProveedores = function () {
        this.proveedores.forEach(function (proveedor) {
            console.table("".concat(proveedor.getId(), ", ").concat(proveedor.getNombre(), ", ").concat(proveedor.getTelefono()));
        });
    };
    return RedDeVeterinarias;
}());
exports.RedDeVeterinarias = RedDeVeterinarias;
