export class Proveedor {
    private id: number;
    private nombre: string;
    private telefono: string;
    
    constructor(nombre: string, telefono: string) {
        this.id = 0
        this.nombre = nombre;
        this.telefono = telefono;
        
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

    setId(nuevoId: number): void{
        this.id = nuevoId;
    }

}
