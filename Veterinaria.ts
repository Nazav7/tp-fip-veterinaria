import {Cliente} from "./Cliente";
import {Paciente} from "./Paciente";
import { cargarClientes } from "./inicio";
import { cargarPacientes } from "./inicio";

export class Veterinaria {
    private id: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[];
    private pacientes: Paciente[]

    constructor(nombre: string, direccion:string, id:number) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.pacientes = [];
        this.clientes = [];

        cargarClientes(this);
        cargarPacientes(this);
    }

    //Métodos

    agregarCliente(nombre: string, telefono: string) {
        const id = this.generarID('cliente');
        const cliente = this.clientes.find(c => c.getNombre() == nombre && c.getTelefono() == telefono);
        if (!cliente) {
            const nuevoCliente = new Cliente(nombre, telefono, id);
            this.clientes.push(nuevoCliente);
            console.log('El cliente ha sido agregado');
        } else {
            console.log('No se puede agregar cliente porque ya existe');
        }
    }

    agregarClienteInicio(nombre: string, telefono: string) {
        const id = this.generarID('cliente');
        const cliente = this.clientes.find(c => c.getNombre() == nombre && c.getTelefono() == telefono);
        if (!cliente) {
            const nuevoCliente = new Cliente(nombre, telefono, id);
            this.clientes.push(nuevoCliente);
        }
    }
    
    agregarPaciente(nombre: string, especie: string, id_duenio:string) {
        const id = this.generarID('paciente');
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (!paciente) {
            const nuevoPaciente = new Paciente(nombre, especie, id_duenio, id);
            this.pacientes.push(nuevoPaciente);
            console.log('El paciente ha sido agregado');
        } else {
            console.log('No se puede agregar paciente porque ya existe');
        }
    }

    agregarPacienteInicio(nombre: string, especie: string, id_duenio:string) {
        const id = this.generarID('paciente');
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (!paciente) {
            const nuevoPaciente = new Paciente(nombre, especie, id_duenio, id);
            this.pacientes.push(nuevoPaciente);
        }
    }
    
    eliminarCliente(id:number) {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
            console.log('El cliente ha sido eliminado');
        } else {
            console.log('El cliente no se encuentra en la base de datos');
        }
    }
    
    eliminarPaciente(id: number) {
        const paciente = this.pacientes.find(p => p.getId() === id);
        if (paciente) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);
            console.log('El paciente ha sido eliminado');
        } else {
            console.log('El paciente no se encuentra en la base de datos');
        }
    }

    registrarVisita(nombre : string){
        const cliente = this.clientes.find(p => p.getNombre() === nombre);
        cliente?.registrarVisita();
        console.log("Se ha registrado la visita de " + nombre);
    }





    listarClientes() {
        this.clientes.forEach(cliente => {
            console.log(cliente.getId(), cliente.getNombre(), cliente.getTelefono(), cliente.getEsVIP());
        });
    }

    listarPacientes() {
        this.pacientes.forEach(paciente => {
            console.log(paciente.getId(), paciente.getIdDueno(), paciente.getNombre(), paciente.getEspecie());
        });
    }

    //Getters
    getNombre(): string {
        return this.nombre;
    }
    getId(): number {
        return this.id;
    }
    getDireccion(): string {
        return this.direccion;
    }

    getClientes(): Cliente[] {
        return [...this.clientes];
    }
    getPacientes(): Paciente[] {
        return [...this.pacientes]
    }

    //Setters
    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }
    setClientes(nuevaLista: Cliente[]): void {
        this.clientes = [...nuevaLista];
    }
    setPacientes(nuevaLista: Paciente[]): void {
        this.pacientes = [...nuevaLista]
    }
    setDireccion(nuevaDireccion: string): void {
        this.direccion = nuevaDireccion;
    }


    /*
    GENERADOR VIEJO
    generarID(tipo): number{
        let new_id:number = Math.floor(Math.random()* 1000)
        switch(tipo){
            case 'cliente':
                let esDuplicado = false;
                for (let cliente of this.clientes) {
                    if (cliente.getId() === new_id) {
                        esDuplicado = true;
                        break;
                     }
                }
            case 'paciente' :
                let id_p:number= 0;
                for(let paciente of this.pacientes){
                    let id_paciente =paciente.getId();
                    if(id_paciente > id_p){
                    id_p = id_paciente; 
                    }
                }   
                return id_p = id_p +1;
            default:
                console.log("Error al crear id");
                return 0;
        }
    }
    GENERADOR VIEJO
    */

    generarID(tipo): number{
        let estaDuplicado = false;
        while(!estaDuplicado){
            let new_id:number = Math.floor(Math.random()* 1000);
            switch(tipo){
                case 'cliente' :
                    for (let cliente of this.clientes){
                        if(new_id === cliente.getId()){
                            estaDuplicado = true;
                            break;
                        }
                    }
                    break;
                case 'paciente':
                    for (let paciente of this.pacientes){
                        if(new_id === paciente.getId()){
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




    modificarCliente(id: number, nombre: string, telefono: string) {
        const cliente = this.clientes.find(c => c.getId() === id);
        if (cliente) {
            cliente.setNombre(nombre);
            cliente.setTelefono(telefono);
            console.log('El cliente ha sido modificado');
        } else {
            console.log('No se encontró cliente');
        }
    }

    modificarPaciente(id: number, nombre: string, especie: string) {
        const paciente = this.pacientes.find(p => p.getId() === id);
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            console.log('El paciente ha sido modificado');
        } else {
            console.log('No se encontró paciente');
        }
    }

}



