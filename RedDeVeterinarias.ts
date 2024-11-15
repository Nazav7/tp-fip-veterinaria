import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

export class RedDeVeterinarias {
    veterinarias: Veterinaria[];
    clientes: Cliente[];
    pacientes: Paciente[];
    proveedores: Proveedor[];


    constructor() {
        this.veterinarias = []
        this.proveedores = []
        this.clientes = []
        this.pacientes = []
    }


    //Métodos

    agregarVeterinaria(nombre: string, direccion: string) {
        const veterinaria = this.veterinarias.find(v => v.getNombre() === nombre && v.getDireccion() === direccion);
        if (!veterinaria) {
            const nuevaVeterinaria = new Veterinaria(nombre, direccion);
            this.veterinarias.push(nuevaVeterinaria);
            console.log('La veterinaria ha sido agregada');
        } else {
            console.log('No se puede agregar veterinaria porque ya existe');
        }
    }

    agregarProveedor(nombre: string, telefono: string) {
        const proveedor = this.proveedores.find(p => p.getNombre() === nombre && p.getTelefono() === telefono);
        if (!proveedor) {
            const nuevoProveedor = new Proveedor(nombre, telefono);
            this.proveedores.push(nuevoProveedor);
            console.log('El proveedor ha sido agregado');
        } else {
            console.log('No se puede agregar proveedor porque ya existe');
        }
    }

    eliminarProveedor(nombre: string, telefono: string) {
        const proveedor = this.proveedores.find(p => p.getNombre() === nombre && p.getTelefono() === telefono);
        if (proveedor) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado');
        } else {
            console.log('El proveedor no se encuentra en la base de datos');
        }
    }

    eliminarVeterinaria(nombre: string, direccion: string) {
        const veterinaria = this.veterinarias.find(p => p.getNombre() === nombre && p.getDireccion() === direccion);
        if (veterinaria) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias.splice(index, 1);
            console.log('La veterinaria ha sido eliminada');
        } else {
            console.log('La veterinaria no se encuentra en la base de datos');
        }
    }

    modificarVeterinaria(id: number, nuevoNombre: string, nuevaDireccion: string) {
        const veterinaria = this.veterinarias.find(v => v.getId() === id);
        if (veterinaria) {
            veterinaria.setNombre(nuevoNombre)
            veterinaria.setDireccion(nuevaDireccion);
            console.log('La veterinaria ha sido modificada');
        } else {
            console.log('No se encontró ID');
        }
    }

    modificarProveedor(id: number, nuevoNombre: string, nuevoTelefono: string) {
        const proveedor = this.proveedores.find(p => p.getId() === id);
        if (proveedor) {
            proveedor.setNombre(nuevoNombre)
            proveedor.setTelefono(nuevoTelefono);
            console.log('El proveedor ha sido modificado');
        } else {
            console.log('No se encontró ID');
        }
    }

    //Getters
    getClientes(): Cliente[] {
        return [...this.clientes];
    }


    getPacientes(): Paciente[] {
        return [...this.pacientes]
    }


    getVeterinaria(): Veterinaria[] {
        return [...this.veterinarias];
    }


    getProveedor(): Proveedor[] {
        return [...this.proveedores]
    }


    //Getters
    setClientes(nuevaLista: Cliente[]): void {
        this.clientes = [...nuevaLista];
    }


    setPacientes(nuevaLista: Paciente[]): void {
        this.pacientes = [...nuevaLista]
    }


    setVeterinarias(nuevaLista: Veterinaria[]): void {
        this.veterinarias = [...nuevaLista];
    }


    setProveedores(nuevaLista: Proveedor[]): void {
        this.proveedores = [...nuevaLista]
    }

    //listar
    listarVeterinarias() {
        this.veterinarias.forEach(veterinaria => {
            console.log(`${veterinaria.getId()}, ${veterinaria.getNombre()}, ${veterinaria.getDireccion()}`);
        });
    }

    listarClientes() {
        this.clientes.forEach(cliente => {
            console.log(`${cliente.getId()}, ${cliente.getNombre()}, ${cliente.getTelefono()}, ${cliente.getEsVip()}`);
        });
    }

    listarPacientes() {
        this.pacientes.forEach(paciente => {
            console.log(`${paciente.getId()}, ${paciente.getNombre()}, ${paciente.getEspecie()}`);
        });
    }

    listarProveedores() {
        this.proveedores.forEach(proveedor => {
            console.log(`${proveedor.getId()}, ${proveedor.getNombre()}, ${proveedor.getTelefono()}`);
        });
    }
}

