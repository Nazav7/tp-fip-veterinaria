export class Proveedor {
    private nombre: string;
    private telefono: number;
    private id: number;
    constructor(nombre: string, telefono: number) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.id = 0
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

    setId(nuevoId: number): void{
        this.id = nuevoId;
    }

}
