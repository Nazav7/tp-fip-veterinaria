"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedDeVeterinarias = void 0;
const Veterinaria_1 = require("./Veterinaria");
const Proveedor_1 = require("./Proveedor");
class RedDeVeterinarias {
    veterinarias;
    proveedores;
    constructor() {
        this.veterinarias = [];
        this.proveedores = [];
    }
    agregarVeterinaria(veterinaria) {
        if (veterinaria != undefined && !this.veterinarias.includes(veterinaria)) {
            this.veterinarias.push(veterinaria);
            console.log('Veterinaria ha sido agregada');
        }
        else {
            console.log('No se puede agregar veterinaria');
        }
    }
    agregarVeterinariaConsola(nombre, direccion) {
        const veterinaria = this.veterinarias.find(v => v.getNombre() === nombre && v.getDireccion() === direccion);
        if (!veterinaria) {
            const nuevaVeterinaria = new Veterinaria_1.Veterinaria(nombre, direccion);
            this.veterinarias.push(nuevaVeterinaria);
            console.log('La veterinaria ha sido agregada');
        }
        else {
            console.log('No se puede agregar veterinaria porque ya existe');
        }
    }
    agregarProveedor(proveedor) {
        if (proveedor != undefined && !this.proveedores.includes(proveedor)) {
            this.proveedores.push(proveedor);
            console.log('El proveedor ha sido agregado');
        }
        else {
            console.log('No se puede agregar proveedor');
        }
    }
    agregarProveedorConsola(nombre, telefono) {
        const proveedor = this.proveedores.find(p => p.getNombre() === nombre && p.getTelefono() === telefono);
        if (!proveedor) {
            const nuevoProveedor = new Proveedor_1.Proveedor(nombre, telefono);
            this.proveedores.push(nuevoProveedor);
            console.log('El proveedor ha sido agregado');
        }
        else {
            console.log('No se puede agregar proveedor porque ya existe');
        }
    }
    eliminarProveedor(proveedor) {
        if (proveedor != undefined && this.proveedores.includes(proveedor)) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado');
        }
        else {
            console.log('El proveedor no se encuentra en la base de datos');
        }
    }
    eliminarProveedorConsola(id) {
        const proveedor = this.proveedores.find(p => p.getId() === id);
        if (proveedor) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado');
        }
        else {
            console.log('El proveedor no se encuentra en la base de datos');
        }
    }
    eliminarVeterinaria(veterinaria) {
        if (veterinaria != undefined && this.veterinarias.includes(veterinaria)) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias.splice(index, 1);
            console.log('La veterinaria ha sido eliminado');
        }
        else {
            console.log('La veterinaria no se encuentra en la base de datos');
        }
    }
    eliminarVeterinariaConsola(id) {
        const veterinaria = this.veterinarias.find(p => p.getId() === id);
        if (veterinaria) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias.splice(index, 1);
            console.log('La veterinaria ha sido eliminada');
        }
        else {
            console.log('La veterinaria no se encuentra en la base de datos');
        }
    }
    modificarVeterinaria(veterinaria, veterinariaModificado) {
        if (veterinaria != undefined && this.veterinarias.includes(veterinaria)) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias[index] = veterinariaModificado;
            console.log('La veterinaria ha sido modificada');
        }
        else {
            console.log('No se puede modificar veterinaria');
        }
    }
    modificarVeterinariaConsola(id, nuevoNombre, nuevaDireccion) {
        const veterinaria = this.veterinarias.find(v => v.getId() === id);
        if (veterinaria) {
            veterinaria.setNombre(nuevoNombre);
            veterinaria.setDireccion(nuevaDireccion);
            console.log('La veterinaria ha sido modificada');
        }
        else {
            console.log('No se encontró ID');
        }
    }
    modificarProveedor(proveedor, proveedorModificado) {
        if (proveedor != undefined && this.proveedores.includes(proveedor)) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores[index] = proveedorModificado;
            console.log('El proveedor ha sido modificado');
        }
        else {
            console.log('No se puede modificar proveedor');
        }
    }
    modificarProveedorConsola(id, nuevoNombre, nuevoTelefono) {
        const proveedor = this.proveedores.find(p => p.getId() === id);
        if (proveedor) {
            proveedor.setNombre(nuevoNombre);
            proveedor.setTelefono(nuevoTelefono);
            console.log('El proveedor ha sido modificado');
        }
        else {
            console.log('No se encontró ID');
        }
    }
    getVeterinarias() {
        return [...this.veterinarias];
    }
    getProveedores() {
        return [...this.proveedores];
    }
    setVeterinarias(nuevaLista) {
        this.veterinarias = [...nuevaLista];
    }
    setProveedores(nuevaLista) {
        this.proveedores = [...nuevaLista];
    }
    listarVeterinarias() {
        this.veterinarias.forEach(veterinaria => {
            console.log(`${veterinaria.getId()}, ${veterinaria.getNombre()}, ${veterinaria.getDireccion()}`);
        });
    }
    listarClientes() {
        this.veterinarias.forEach(veterinaria => {
            const clientes = veterinaria.getClientes();
            clientes.forEach(cliente => {
                console.log(`${cliente.getId()}, ${cliente.getNombre()}, ${cliente.getTelefono()}, ${cliente.getEsVIP()}`);
            });
        });
    }
    listarPacientes() {
        this.veterinarias.forEach(veterinaria => {
            const pacientes = veterinaria.getPacientes();
            pacientes.forEach(paciente => {
                console.log(`${paciente.getIdDuenio()}, ${paciente.getNombre()}, ${paciente.getEspecie()}`);
            });
        });
    }
    listarProveedores() {
        this.proveedores.forEach(proveedor => {
            console.log(`${proveedor.getId()}, ${proveedor.getNombre()}, ${proveedor.getTelefono()}`);
        });
    }
}
exports.RedDeVeterinarias = RedDeVeterinarias;
