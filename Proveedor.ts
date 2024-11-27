import { generarID } from "./Clases/utils";

export class Proveedor {
    private nombre: string;
    private telefono: number;
    private id: number;

    constructor(nombre: string, telefono: number, id:number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = generarID('../bbdd/proveedores.txt');
    }

    //Getters
    getNombre(): string{
        return this.nombre;
    }
    getTelefono(): number{
        return this.telefono;
    }
    getId(): number{
        return this.id
    }

    //Setters
    setNombre(nuevoNombre: string): void{
        this.nombre = nuevoNombre;
    }
    setTelefono(nuevoTelefono: number): void{
        this.telefono = nuevoTelefono;
    }

}
