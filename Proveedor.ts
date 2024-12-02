

export class Proveedor {
    private nombre: string;
    private telefono: string;
    private id: number;

    constructor(nombre: string, telefono: string, id:number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = id;
    }

    //Getters
    getNombre(): string{
        return this.nombre;
    }
    getTelefono(): string{
        return this.telefono;
    }
    getId(): number{
        return this.id
    }

    //Setters
    setNombre(nuevoNombre: string): void{
        this.nombre = nuevoNombre;
    }
    setTelefono(nuevoTelefono: string): void{
        this.telefono = nuevoTelefono;
    }

}
