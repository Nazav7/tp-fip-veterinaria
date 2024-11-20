import { Cliente } from "./Cliente";
import { generarIDAleatorio } from "./generarId";

export class Paciente {
    private id: number;
    private nombre: string;
    private especie: string;
    private idDuenio?: number;
    private duenios: Cliente[] = []

    constructor(nombre: string, especie: string) {
        this.nombre = nombre;
        this.especie = this.validarEspecie(especie);
        this.id = generarIDAleatorio();
    }

    validarEspecie(especie: string){
        if (especie === "perro" || especie === "gato") {
            return especie
        } else{
            return "exótica"
        }
    }

    asignarID(id: number){
        if (id > 0 &&  this.duenios?.find(duenio => duenio.getId() == id )) {
                this.idDuenio = id;
            } else {
                console.log("No se encontró un cliente con ese ID.");
            }
    }

    agregarDuenio(duenio: Cliente) {
        if (duenio != undefined) {
            this.duenios.push(duenio);

        }
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
    public getIdDuenio(): number | undefined {
        return this.idDuenio;
    }
    public setIdDuenio(idDuenio: number) {
        this.idDuenio = idDuenio;
    }
    public getId(){
        return this.id;
    }
}