import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

export class RedDeVeterinarias {
    veterinarias: Veterinaria[];
    clientes: Cliente[];
    pacientes: Paciente[];
    proveedores: Proveedor[];


    constructor(nombre: string) {
        this.nombre = nombre;
        this.id = 0
    }


    //Métodos
    agregarVeterinaria(veterinaria: Veterinaria) {
        if (veterinaria != undefined && !this.veterinarias.includes(veterinaria)) {
            this.veterinarias.push(veterinaria);
            console.log('Veterinaria ha sido agregada');
        } else {
            console.log('No se puede agregar veterinaria');
        }
    }


    agregarProveedor(proveedor: Proveedor) {
        if (proveedor != undefined && !this.proveedores.includes(proveedor)) {
            this.proveedores.push(proveedor);
            console.log('El proveedor ha sido agregado');
        } else {
            console.log('No se puede agregar proveedor');
        }
    }


    eliminarProveedor(proveedor: Proveedor) {
        if (proveedor != undefined && this.proveedores.includes(proveedor)) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado')
        } else {
            console.log('El proveedor no se encuentra en la base de datos')
        }
    }


    eliminarVeterinaria(paciente: Veterinaria) {
        if (veterinaria != undefined && this.veterinarias.includes(veterinaria)) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias.splice(index, 1);
            console.log('La veterinaria ha sido eliminado')
        } else {
            console.log('La veterinaria no se encuentra en la base de datos')
        }
    }


    modificarVeterinaria(veterinaria: Veterinaria, veterinariaModificado: Veterinaria) {
        if (veterinaria != undefined && this.veterinarias.includes(veterinaria)) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias[index] = veterinariaModificado;
            console.log('La veterinaria ha sido modificada')
        } else {
            console.log('No se puede modificar veterinaria')
        }
    }


    modificarProveedor(proveedor: Proveedor, proveedorModificado: Proveedor) {
        if (proveedor != undefined && this.proveedores.includes(proveedor)) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores[index] = proveedorModificado;
            console.log('El proveedor ha sido modificado')
        } else {
            console.log('No se puede modificar proveedor')
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
}

