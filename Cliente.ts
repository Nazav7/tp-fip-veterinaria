import { generarID } from "./Clases/utils";

export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: number;
    private visitas: number;
    private esVIP: boolean;

    constructor(nombre: string, telefono: number) {
        this.id = generarID('./bbdd/clientes.txt');
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 1;
        this.esVIP = false;
    }

    registrarVisita(): void {
        this.visitas += 1;
        this.esVIP = this.visitas >= 5;
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

}
