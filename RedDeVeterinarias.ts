import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import { cargarProveedores } from "./inicio";

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

        cargarProveedores(this);
    }


    //Métodos

    agregarVeterinaria(nombre: string, direccion: string) {
        const veterinaria = this.veterinarias.find(v => v.getNombre() === nombre && v.getDireccion() === direccion);
        if (!veterinaria) {
            const id = this.generarID('veterinaria'); 
            const nuevaVeterinaria = new Veterinaria(nombre, direccion, id);
            this.veterinarias.push(nuevaVeterinaria);
            console.log('La veterinaria ha sido agregada');
        } else {
            console.log('No se puede agregar veterinaria porque ya existe');
        }
    }

    agregarVeterinariaInicio(nombre: string, direccion: string) {
        const veterinaria = this.veterinarias.find(v => v.getNombre() === nombre && v.getDireccion() === direccion);
        if (!veterinaria) {
            const id = this.generarID('veterinaria');
            const nuevaVeterinaria = new Veterinaria(nombre, direccion, id);
            this.veterinarias.push(nuevaVeterinaria);
        }
    }

    agregarProveedor(nombre: string, telefono: string) {
        const proveedor = this.proveedores.find(p => p.getNombre() === nombre && p.getTelefono() === telefono);
        if (!proveedor) {
            const id = this.generarID('proveedor'); 
            const nuevoProveedor = new Proveedor(nombre, telefono, id);
            this.proveedores.push(nuevoProveedor);
            console.log('El proveedor ha sido agregado');
        } else {
            console.log('No se puede agregar proveedor porque ya existe');
        }
    }

    agregarProveedorInicio(nombre: string, telefono: string) {
        const proveedor = this.proveedores.find(p => p.getNombre() === nombre && p.getTelefono() === telefono);
        if (!proveedor) {
            const id = this.generarID('proveedor');
            const nuevoProveedor = new Proveedor(nombre, telefono, id);
            this.proveedores.push(nuevoProveedor);
        }
    }

    eliminarProveedor(id:number) {
        const proveedor = this.proveedores.find(v => v.getId() === id);
        if (proveedor) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado');
        } else {
            console.log('El proveedor no se encuentra en la base de datos');
        }
    }

    eliminarVeterinaria(id:number) {
        const veterinaria = this.veterinarias.find(v => v.getId() === id);
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

//veterniaria
//proveedor

generarID(tipo): number{
    let estaDuplicado = false;
    while(!estaDuplicado){
        let new_id:number = Math.floor(Math.random()* 1000);
        switch(tipo){
            case 'veterinaria' :
                for (let veterinaria of this.veterinarias){
                    if(new_id === veterinaria.getId()){
                        estaDuplicado = true;
                        break;
                    }
                }
                break;
            case 'proveedor':
                for (let proveedor of this.proveedores){
                    if(new_id === proveedor.getId()){
                        estaDuplicado = true;
                        break;
                    }
                }
                break; 
                default:
                throw new Error("Falla de generacion de ID");
        }
        if(!estaDuplicado){
            return new_id;
        }
    }
    return 0;
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

    //Setters
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
        if(this.veterinarias != null){
            this.veterinarias.forEach(veterinaria => {
                console.table(`${veterinaria.getId()}, ${veterinaria.getNombre()}, ${veterinaria.getDireccion()}`);
            });
        }
        
    }
    listarClientes() {
        for(let veterinaria of this.veterinarias){
            veterinaria.listarClientes();
        }
    }

    listarPacientes() {
        for(let veterinaria of this.veterinarias){
            veterinaria.listarPacientes();
        }
    }

    listarProveedores() {
        this.proveedores.forEach(proveedor => {
            console.table(`${proveedor.getId()}, ${proveedor.getNombre()}, ${proveedor.getTelefono()}`);
        });
    }
}

const papa = new RedDeVeterinarias()
papa.listarPacientes()