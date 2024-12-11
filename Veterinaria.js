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
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, direccion, id) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.pacientes = [];
        this.clientes = [];
    }
    //Métodos
    Veterinaria.prototype.agregarCliente = function (nombre, telefono) {
        var id = this.generarID('cliente');
        var cliente = this.clientes.find(function (c) { return c.getNombre() == nombre && c.getTelefono() == telefono; });
        if (!cliente) {
            var nuevoCliente = new Cliente_1.Cliente(nombre, telefono, id);
            this.clientes.push(nuevoCliente);
            console.log('El cliente ha sido agregado');
        }
        else {
            console.log('No se puede agregar cliente porque ya existe');
        }
    };
    Veterinaria.prototype.agregarClienteInicio = function (id, nombre, telefono) {
        var cliente = this.clientes.find(function (c) { return c.getNombre() == nombre && c.getTelefono() == telefono; });
        if (!cliente) {
            var nuevoCliente = new Cliente_1.Cliente(nombre, telefono, id);
            this.clientes.push(nuevoCliente);
        }
    };
    Veterinaria.prototype.agregarPaciente = function (nombre, especie, id_duenio) {
        var id = this.generarID('paciente');
        //Verificar si el ID del dueño existe
        var duenio = this.clientes.find(function (c) { return c.getId() === id_duenio; });
        if (!duenio) {
            console.log('El ID del dueño no existe.');
            return;
        }
        // Verificar si el paciente existe
        var paciente = this.pacientes.find(function (p) { return p.getNombre() === nombre && p.getEspecie() === especie; });
        if (!paciente) {
            var nuevoPaciente = new Paciente_1.Paciente(nombre, especie, id_duenio, id);
            this.pacientes.push(nuevoPaciente);
            console.log('El paciente ha sido agregado');
        }
        else {
            console.log('No se puede agregar paciente porque ya existe');
        }
    };
    Veterinaria.prototype.agregarPacienteInicio = function (nombre, especie, id_duenio) {
        var id = this.generarID('paciente');
        var paciente = this.pacientes.find(function (p) { return p.getNombre() === nombre && p.getEspecie() === especie; });
        if (!paciente) {
            var nuevoPaciente = new Paciente_1.Paciente(nombre, especie, id_duenio, id);
            this.pacientes.push(nuevoPaciente);
        }
    };
    Veterinaria.prototype.eliminarCliente = function (id) {
        var cliente = this.clientes.find(function (c) { return c.getId() === id; });
        if (cliente) {
            var index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
            // Eliminar las mascotas del cliente
            this.pacientes = this.pacientes.filter(function (paciente) { return paciente.getIdDueno() !== id; });
            console.log('El cliente y sus mascotas han sido eliminados');
        }
        else {
            console.log('El cliente no se encuentra en la base de datos');
        }
    };
    Veterinaria.prototype.eliminarPaciente = function (id) {
        var paciente = this.pacientes.find(function (p) { return p.getId() === id; });
        if (paciente) {
            var index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);
            console.log('El paciente ha sido eliminado');
        }
        else {
            console.log('El paciente no se encuentra en la base de datos');
        }
    };
    Veterinaria.prototype.registrarVisita = function (id) {
        var cliente = this.clientes.find(function (p) { return p.getId() === id; });
        if (cliente) {
            cliente === null || cliente === void 0 ? void 0 : cliente.registrarVisita();
            console.log("Se ha registrado la visita");
        }
        else {
            console.log("No se encuentra id");
        }
    };
    Veterinaria.prototype.listarClientes = function () {
        this.clientes.forEach(function (cliente) {
            console.log(cliente.getId(), cliente.getNombre(), cliente.getTelefono(), cliente.getEsVIP());
        });
    };
    Veterinaria.prototype.listarPacientes = function () {
        this.pacientes.forEach(function (paciente) {
            console.log(paciente.getId(), paciente.getIdDueno(), paciente.getNombre(), paciente.getEspecie());
        });
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
    Veterinaria.prototype.generarID = function (tipo) {
        var estaDuplicado = false;
        while (!estaDuplicado) {
            var new_id = Math.floor(Math.random() * 1000);
            switch (tipo) {
                case 'cliente':
                    for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
                        var cliente = _a[_i];
                        if (new_id === cliente.getId()) {
                            estaDuplicado = true;
                            break;
                        }
                    }
                    break;
                case 'paciente':
                    for (var _b = 0, _c = this.pacientes; _b < _c.length; _b++) {
                        var paciente = _c[_b];
                        if (new_id === paciente.getId()) {
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
    Veterinaria.prototype.modificarCliente = function (id, nombre, telefono) {
        var cliente = this.clientes.find(function (c) { return c.getId() === id; });
        if (cliente) {
            cliente.setNombre(nombre);
            cliente.setTelefono(telefono);
            console.log('El cliente ha sido modificado');
        }
        else {
            console.log('No se encontró cliente');
        }
    };
    Veterinaria.prototype.modificarPaciente = function (id, nombre, especie) {
        var paciente = this.pacientes.find(function (p) { return p.getId() === id; });
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            console.log('El paciente ha sido modificado');
        }
        else {
            console.log('No se encontró paciente');
        }
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
