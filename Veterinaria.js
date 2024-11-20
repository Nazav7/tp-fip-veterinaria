"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
const Cliente_1 = require("./Cliente");
const Paciente_1 = require("./Paciente");
const generarId_1 = require("./generarId");
class Veterinaria {
    id;
    nombre;
    direccion;
    clientes;
    pacientes;
    constructor(nombre, direccion) {
        this.id = (0, generarId_1.generarIDAleatorio)();
        this.nombre = nombre;
        this.direccion = direccion;
        this.clientes = [];
        this.pacientes = [];
    }
    agregarClienteConsola(nombre, telefono) {
        const cliente = this.clientes.find(c => c.getNombre() === nombre && c.getTelefono() === telefono);
        if (!cliente) {
            const nuevoCliente = new Cliente_1.Cliente(nombre, telefono);
            this.clientes.push(nuevoCliente);
            console.log('El cliente ha sido agregado');
        }
        else {
            console.log('No se puede agregar cliente porque ya existe');
        }
    }
    verificarIdYAgregarPacienteConsola(id, nombre, especie) {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            this.agregarPacienteConsola(id, nombre, especie);
        }
        else {
            console.log('El ID no esta registrado');
        }
    }
    agregarPacienteConsola(idDuenio, nombre, especie) {
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (!paciente) {
            const nuevoPaciente = new Paciente_1.Paciente(nombre, especie);
            nuevoPaciente.setIdDuenio(idDuenio);
            this.pacientes.push(nuevoPaciente);
            console.log('El paciente ha sido agregado');
        }
        else {
            console.log('No se puede agregar paciente porque ya existe');
        }
    }
    eliminarClienteConsola(id) {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
            console.log('El cliente ha sido eliminado');
        }
        else {
            console.log('El cliente no se encuentra en la base de datos');
        }
    }
    eliminarPacienteConsola(id) {
        const paciente = this.pacientes.find(p => p.getId() === id);
        if (paciente) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);
            console.log('El paciente ha sido eliminado');
        }
        else {
            console.log('El paciente no se encuentra en la base de datos');
        }
    }
    modificarClienteConsola(id, nombre, telefono) {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            cliente.setNombre(nombre);
            cliente.setTelefono(telefono);
            console.log('El cliente ha sido modificado');
        }
        else {
            console.log('No se encontró cliente');
        }
    }
    modificarPacienteConsola(id, nombre, especie) {
        const paciente = this.pacientes.find(p => p.getId() === id);
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            console.log('El paciente ha sido modificado');
        }
        else {
            console.log('No se encontró paciente');
        }
    }
    getNombre() {
        return this.nombre;
    }
    getId() {
        return this.id;
    }
    getDireccion() {
        return this.direccion;
    }
    getClientes() {
        return [...this.clientes];
    }
    getPacientes() {
        return [...this.pacientes];
    }
    setNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    setId(nuevoId) {
        this.id = nuevoId;
    }
    setClientes(nuevaLista) {
        this.clientes = [...nuevaLista];
    }
    setPacientes(nuevaLista) {
        this.pacientes = [...nuevaLista];
    }
    setDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }
    agregarCliente(cliente) {
        if (cliente != undefined && !this.clientes.includes(cliente)) {
            this.clientes.push(cliente);
        }
    }
    agregarPaciente(paciente) {
        if (paciente != undefined && !this.pacientes.includes(paciente)) {
            this.pacientes.push(paciente);
        }
    }
    eliminarCliente(cliente) {
        if (cliente != undefined && this.clientes.includes(cliente)) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
        }
    }
    eliminarPaciente(paciente) {
        if (paciente != undefined && this.pacientes.includes(paciente)) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);
        }
    }
    modificarCliente(cliente, clienteModificado) {
        if (cliente != undefined && this.clientes.includes(cliente)) {
            const index = this.clientes.indexOf(cliente);
            this.clientes[index] = clienteModificado;
        }
    }
    modificarPaciente(paciente, pacienteModificado) {
        if (paciente != undefined && this.pacientes.includes(paciente)) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes[index] = pacienteModificado;
        }
    }
    listarClientes() {
        this.clientes.forEach(cliente => {
            console.log(`${cliente.getId()}, ${cliente.getNombre()}, ${cliente.getTelefono()}, ${cliente.getEsVIP() ? "vip" : "No vip"}`);
        });
    }
    listarPacientes() {
        this.pacientes.forEach(paciente => {
            console.log(`${paciente.getId()}, ${paciente.getIdDuenio()}, ${paciente.getNombre()}, ${paciente.getEspecie()}`);
        });
    }
    registrarVisita(id) {
        const cliente = this.clientes.find(cliente => cliente.getId() === id);
        if (cliente) {
            const visitas = cliente.getVisitas();
            cliente.setVisitas(visitas + 1);
            if (cliente.getVisitas() >= 5) {
                cliente.setEsVIP(true);
            }
        }
    }
}
exports.Veterinaria = Veterinaria;
