    export class Paciente {
        nombre: string;
        especie: string;
        idDueno: number;

        constructor(nombre: string, especie: string, idDueno: number) {
            this.nombre = nombre;
            this.especie = especie;
            this.idDueno = idDueno;
        }

        modificarDatos(nombre: string, especie: string): void {
            this.nombre = nombre;
            this.especie = especie;
            console.log(`datos modificados satisactoriamente, nombre: ${this.nombre}, especie: ${this.especie}. `)

        }

        darDeBaja(): void {
            console.log(`Paciente ${this.nombre} ha sido dado de baja.`);
        }
    }
