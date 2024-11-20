export class Paciente {
    private id: number;
    private nombre: string;
    private especie: string;
    private idDueno: number;



    constructor(nombre: string, especie: string, idDueno: number, id:number) {
        this.id = id;
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


    //getters & setters

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
    public getEspecie(): string {
        return this.especie;
    }
    public setEspecie(especie: string) {
        this.especie = especie;
    }
    public getIdDueno(): number {
        return this.idDueno;
    }
    public setIdDueno(idDueno: number) {
        this.idDueno = idDueno;
    }
    public getId(){
        return this.id;
    }
}
