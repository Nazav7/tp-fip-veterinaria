export class Cliente {
    id: number;
    nombre: string;
    telefono: string;
    visitas: number;
    esVIP: boolean;

    constructor(id: number, nombre: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 1;
        this.esVIP = false;
    }

    registrarVisita(): void {
        this.visitas += 1;
        this.esVIP = this.visitas >= 5;
    }

    modificarDatos(nombre: string, telefono: string): void {
        this.nombre = nombre;
        this.telefono = telefono;
        console.log(`datos modificados satisactoriamente, nombre: ${this.nombre}, telefono: ${this.telefono}. `)
    }

    darDeBaja(): void {
        console.log(`Cliente ${this.nombre} ha sido dado de baja.`);
    }
}
