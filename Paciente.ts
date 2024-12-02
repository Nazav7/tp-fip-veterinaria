export class Paciente {
    private id: number;
    private nombre: string;
    private especie: string;
    private idDueno: string;



    constructor(nombre: string, especie: string, idDueno: string, id:number) {
        this.id = id;
        this.nombre = nombre;
        this.especie = this.verificarEspecie(especie);
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

    verificarEspecie(especie:string):string{
        if(especie.toUpperCase() == 'PERRO'){
            return 'perro';
        }
        else if(especie.toUpperCase() == 'GATO'){
            return 'gato';
        }
        else{
            return 'exotico';
        }
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
    public getIdDueno(): string {
        return this.idDueno;
    }
    public setIdDueno(idDueno: string) {
        this.idDueno = idDueno;
    }
    public getId(){
        return this.id;
    }
}
