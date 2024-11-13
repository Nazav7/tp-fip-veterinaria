export class Sucursal {
    id: number;
    nombre: string;
    direccion: string;

    constructor(id: number, nombre: string, direccion: string) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
    }

    modificarDatos(nombre: string, direccion: string): void {
        this.nombre = nombre;
        this.direccion = direccion;
        console.log(`datos modificados satisactoriamente, nombre: ${this.nombre}, direccion: ${this.direccion}. `)
    }

    darDeBaja(): void {
        console.log(`Sucursal ${this.nombre} ha sido dada de baja.`);
    }
}
