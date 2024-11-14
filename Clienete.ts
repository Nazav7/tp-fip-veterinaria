export class Cliente {
    private id: number;
    private nombre: string;
    private telefono: string;
    private visitas: number;
    private esVIP: boolean;

    constructor(id: number, nombre: string, telefono: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.visitas = 1;
        this.esVIP = false;
    }

    registrarVisita(): void {
        this.visitas += 1;
        this.esVIP = this.visitas >= 5;
    }

    modificarDatos(nombre: string, telefono: string): void {
        this.nombre = nombre;
        this.telefono = telefono;
        console.log(`datos modificados satisactoriamente, nombre: ${this.nombre}, telefono: ${this.telefono}. `)
    }

    darDeBaja(): void {
        console.log(`Cliente ${this.nombre} ha sido dado de baja.`);
    }

    // getters & setters
    public getId(): number {
        return this.id;
    }
    public setId(id: number) {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string
    ) {
        this.nombre = nombre;
    }

    public getTelefono(): string {
        return this.telefono;
    }
    public setTelefono(telefono: string) {
        this.telefono = telefono;
    }

    public getVisitas(): number {
        return this.visitas;
    }
    public setVisitas(visitas: number) {
        this.visitas = visitas;
    }

    public getEsVIP(): boolean {
        return this.esVIP;
    }
    public setEsVIP(esVIP: boolean) {
        this.esVIP = esVIP;
    }

}
