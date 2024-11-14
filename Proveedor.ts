export class Proveedor {
    private id: number;
    private nombre: string;
    private telefono: number;
    
    constructor(nombre: string, telefono: number) {
        this.id = 0
        this.nombre = nombre;
        this.telefono = telefono;
        
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
