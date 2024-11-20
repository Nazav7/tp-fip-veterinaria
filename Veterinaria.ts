
import {Cliente} from "./Cliente";
import {Paciente} from "./Paciente";
import { generarID } from "./Clases/utils";

export class Veterinaria {
    private id: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[];
    private pacientes: Paciente[]

    constructor(nombre: string, direccion:string) {
        this.id=generarID('./bbdd/sucursales.txt');
        this.nombre = nombre;
        this.direccion = direccion;
        this.pacientes = [];
        this.clientes = [];
    }

    //Métodos

    agregarCliente(nombre: string, telefono: number) {
        console.log(this.clientes);
        const cliente = this.clientes.find(c => c.getNombre() == nombre && c.getTelefono() == telefono);
        if (!cliente) {
            const nuevoCliente = new Cliente(nombre, telefono);
            this.clientes.push(nuevoCliente);
            console.log('El cliente ha sido agregado');
        } else {
            console.log('No se puede agregar cliente porque ya existe');
        }
    }
    
    agregarPaciente(nombre: string, especie: string, id_duenio:number) {
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (!paciente) {
            const nuevoPaciente = new Paciente(nombre, especie, id_duenio);
            this.pacientes.push(nuevoPaciente);
            console.log('El paciente ha sido agregado');
        } else {
            console.log('No se puede agregar paciente porque ya existe');
        }
    }

    
    eliminarCliente(nombre: string, telefono: number) {
        const cliente = this.clientes.find(c => c.getNombre() === nombre && c.getTelefono() === telefono);
        if (cliente) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
            console.log('El cliente ha sido eliminado');
        } else {
            console.log('El cliente no se encuentra en la base de datos');
        }
    }
    
    eliminarPaciente(nombre: string, especie: string) {
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (paciente) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);
            console.log('El paciente ha sido eliminado');
        } else {
            console.log('El paciente no se encuentra en la base de datos');
        }
    }


    modificarCliente(nombre: string, telefono: number) {
        const cliente = this.clientes.find(c => c.getNombre() === nombre && c.getTelefono() === telefono);
        if (cliente) {
            cliente.setNombre(nombre);
            cliente.setTelefono(telefono);
            console.log('El cliente ha sido modificado');
        } else {
            console.log('No se encontró cliente');
        }
    }
    
    modificarPaciente(nombre: string, especie: string) {
        const paciente = this.pacientes.find(p => p.getNombre() === nombre && p.getEspecie() === especie);
        if (paciente) {
            paciente.setNombre(nombre);
            paciente.setEspecie(especie);
            console.log('El paciente ha sido modificado');
        } else {
            console.log('No se encontró paciente');
        }
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

}



