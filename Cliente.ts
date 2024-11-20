import { generarIDAleatorio } from "./generarId";
import { Paciente } from "./Paciente";

export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: number;
    private visitas: number;
    private esVIP: boolean;
    private mascotas: Paciente[];

    constructor(nombre: string, telefono: number) {
        this.id = generarIDAleatorio();
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 1;
        this.esVIP = false;
        this.mascotas = [];
    }

    modificarDatos(nombre: string, telefono: number): void {
        this.nombre = nombre;
        this.telefono = telefono;
        console.log(`datos modificados satisactoriamente, nombre: ${this.nombre}, telefono: ${this.telefono}. `)
    }

    darDeBaja(): void {
        console.log(`Cliente ${this.nombre} ha sido dado de baja.`);
    }

    // getters & setters
    public getId(): number {
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string
    ) {
        this.nombre = nombre;
    }

    public getTelefono(): number {
        return this.telefono;
    }
    public setTelefono(telefono: number) {
        this.telefono = telefono;
    }

    public getVisitas(): number {
        return this.visitas;
    }
    public setVisitas(visitas: number) {
        this.visitas = visitas;
    }

    public getEsVIP(): boolean {
        return this.esVIP;
    }
    public setEsVIP(esVIP: boolean) {
        this.esVIP = esVIP;
    }
    
    agregarMascota(mascota: Paciente) {
        if (mascota != undefined && !this.mascotas.includes(mascota)) {
            this.mascotas.push(mascota);
            
        } 

}
}