import { generarID } from "./Clases/utils";

export class Proveedor {
    private nombre: string;
    private telefono: string;
    private id: number;

<<<<<<< HEAD
    constructor(nombre: string, telefono: number) {
=======
    constructor(nombre: string, telefono: string) {
>>>>>>> Naza
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = generarID('../bbdd/proveedores.txt');
    }

    //Getters
    getNombre(): string{
        return this.nombre;
    }
<<<<<<< HEAD
    getTelefono(): number{
=======

    getTelefono(): string{
>>>>>>> Naza
        return this.telefono;
    }
    getId(): number{
        return this.id
    }

    //Setters
    setNombre(nuevoNombre: string): void{
        this.nombre = nuevoNombre;
    }
<<<<<<< HEAD
    setTelefono(nuevoTelefono: number): void{
=======

    setTelefono(nuevoTelefono: string): void{
>>>>>>> Naza
        this.telefono = nuevoTelefono;
    }

}
