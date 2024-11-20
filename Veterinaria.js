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
exports.Veterinaria = void 0;
var Cliente_1 = require("./Cliente");
var Paciente_1 = require("./Paciente");
var utils_1 = require("./Clases/utils");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion) {
        this.id = (0, utils_1.generarID)('./bbdd/sucursales.txt');
        this.nombre = nombre;
        this.direccion = direccion;
        this.pacientes = [];
        this.clientes = [];
    }
    //Métodos
    Veterinaria.prototype.agregarCliente = function (nombre, telefono) {
        console.log(this.clientes);
        var cliente = this.clientes.find(function (c) { return c.getNombre() == nombre && c.getTelefono() == telefono; });
        if (!cliente) {
            var nuevoCliente = new Cliente_1.Cliente(nombre, telefono);
            this.clientes.push(nuevoCliente);
            console.log('El cliente ha sido agregado');
        }
        else {
            console.log('No se puede agregar cliente porque ya existe');
        }
    };
    Veterinaria.prototype.agregarPaciente = function (nombre, especie, id_duenio) {
        var paciente = this.pacientes.find(function (p) { return p.getNombre() === nombre && p.getEspecie() === especie; });
        if (!paciente) {
            var nuevoPaciente = new Paciente_1.Paciente(nombre, especie, id_duenio);
            this.pacientes.push(nuevoPaciente);
            console.log('El paciente ha sido agregado');
        }
        else {
            console.log('No se puede agregar paciente porque ya existe');
        }
    };
    Veterinaria.prototype.eliminarCliente = function (nombre, telefono) {
        var cliente = this.clientes.find(function (c) { return c.getNombre() === nombre && c.getTelefono() === telefono; });
        if (cliente) {
            var index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
            console.log('El cliente ha sido eliminado');
        }
        else {
            console.log('El cliente no se encuentra en la base de datos');
        }
    };
    Veterinaria.prototype.eliminarPaciente = function (nombre, especie) {
        var paciente = this.pacientes.find(function (p) { return p.getNombre() === nombre && p.getEspecie() === especie; });
        if (paciente) {
            var index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);
            console.log('El paciente ha sido eliminado');
        }
        else {
            console.log('El paciente no se encuentra en la base de datos');
        }
    };
    Veterinaria.prototype.modificarCliente = function (nombre, telefono) {
        var cliente = this.clientes.find(function (c) { return c.getNombre() === nombre && c.getTelefono() === telefono; });
        if (cliente) {
            cliente.setNombre(nombre);
            cliente.setTelefono(telefono);
            console.log('El cliente ha sido modificado');
        }
        else {
            console.log('No se encontró cliente');
        }
    };
    Veterinaria.prototype.modificarPaciente = function (nombre, especie) {
        var paciente = this.pacientes.find(function (p) { return p.getNombre() === nombre && p.getEspecie() === especie; });
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            console.log('El paciente ha sido modificado');
        }
        else {
            console.log('No se encontró paciente');
        }
    };
    //Getters
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.getDireccion = function () {
        return this.direccion;
    };
    Veterinaria.prototype.getClientes = function () {
        return __spreadArray([], this.clientes, true);
    };
    Veterinaria.prototype.getPacientes = function () {
        return __spreadArray([], this.pacientes, true);
    };
    //Setters
    Veterinaria.prototype.setNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    Veterinaria.prototype.setClientes = function (nuevaLista) {
        this.clientes = __spreadArray([], nuevaLista, true);
    };
    Veterinaria.prototype.setPacientes = function (nuevaLista) {
        this.pacientes = __spreadArray([], nuevaLista, true);
    };
    Veterinaria.prototype.setDireccion = function (nuevaDireccion) {
        this.direccion = nuevaDireccion;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;