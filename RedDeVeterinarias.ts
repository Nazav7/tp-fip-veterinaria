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
            const id = this.generarID('veterinaria'); 
            const nuevaVeterinaria = new Veterinaria(nombre, direccion, id);
            this.veterinarias.push(nuevaVeterinaria);
            console.log('La veterinaria ha sido agregada');
        } else {
            console.log('No se puede agregar veterinaria porque ya existe');
        }
    }

    agregarProveedor(nombre: string, telefono: number) {
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

    modificarProveedor(id: number, nuevoNombre: string, nuevoTelefono: number) {
        const proveedor = this.proveedores.find(p => p.getId() === id);
        if (proveedor) {
            proveedor.setNombre(nuevoNombre)
            proveedor.setTelefono(nuevoTelefono);
            console.log('El proveedor ha sido modificado');
        } else {
            console.log('No se encontró ID');
        }
    }

    generarID(tipo): number{
        switch(tipo){
            case 'veterinaria':
                let id_v:number= 0;
                for(let veterinaria of this.veterinarias){
                    let id_veterinaria =veterinaria.getId();
                    if(id_veterinaria > id_v){
                        id_v = id_veterinaria; 
                    }
                }   
                return id_v = id_v +1;
            case 'proveedor' :
                let id_prov:number= 0;
                for(let proveedor of this.proveedores){
                    let id_proveedor =proveedor.getId();
                    if(id_proveedor > id_prov){
                        id_prov = id_proveedor; 
                    }
                }   
                return id_prov = id_prov +1;
            default:
                console.log("Error al crear id");
                return 0;
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
                console.log(`${veterinaria.getId()}, ${veterinaria.getNombre()}, ${veterinaria.getDireccion()}`);
            });
        }
        
    }
    listarClientes() {
        this.clientes.forEach(cliente => {
            console.log(`${cliente.getId()}, ${cliente.getNombre()}, ${cliente.getTelefono()}, ${cliente.getEsVIP()}`);
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

