export class Veterinaria {
    private id: number;
    private nombre: string;
    private direccion: string;
    private clientes: Cliente[];
    private pacientes: Paciente[]

    constructor(nombre: string, direccion: string) {
        this.id = 0;
        this.nombre = nombre;
        this.direccion = direccion;
    }

    //Métodos
    agregarCliente(cliente: Cliente) {
        if (cliente != undefined && !this.clientes.includes(cliente)) {
            this.clientes.push(cliente);
            console.log('El cliente ha sido agregado');
        } else {
            console.log('No se puede agregar el cliente'); //puedo usar un try-catch
        }
    }

    agregarPaciente(paciente: Paciente) {
        if (paciente != undefined && !this.pacientes.includes(paciente)) {
            this.pacientes.push(paciente);
            console.log('El paciente ha sido agregado');
        } else {
            console.log('No se puede agregar paciente');
        }
    }

    eliminarCliente(cliente: Cliente) {
        if (cliente != undefined && this.clientes.includes(cliente)) {
            const index = this.clientes.indexOf(cliente);
            this.clientes.splice(index, 1);
            console.log('El cliente ha sido eliminado')
        } else {
            console.log('El cliente no se encuentra en la base de datos')
        }
    }

    eliminarPaciente(paciente: Paciente) {
        if (paciente != undefined && this.pacientes.includes(paciente)) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes.splice(index, 1);
            console.log('El paciente ha sido eliminado')
        } else {
            console.log('El paciente no se encuentra en la base de datos')
        }
    }

    modificarCliente(cliente: Cliente, clienteModificado: Cliente) {
        if (cliente != undefined && this.clientes.includes(cliente)) {
            const index = this.clientes.indexOf(cliente);
            this.clientes[index] = clienteModificado;
            console.log('El cliente ha sido modificado')
        } else {
            console.log('No se puede modificar cliente')
        }
    }

    modificarPaciente(paciente: Paciente, pacienteModificado: Paciente) {
        if (paciente != undefined && this.pacientes.includes(paciente)) {
            const index = this.pacientes.indexOf(paciente);
            this.pacientes[index] = pacienteModificado;
            console.log('El paciente ha sido modificado')
        } else {
            console.log('No se puede modificar cliente')
        }
    }

    //Getters
    getNombre(): string {
        return this.nombre;
    }

    getId(): number {
        return this.id;
    }

    getDireccion(): string {
        return this.direccion;
    }

    getClientes(): Cliente[] {
        return [...this.clientes];
    }

    getPacientes(): Paciente[] {
        return [...this.pacientes]
    }

    //Getters
    setNombre(nuevoNombre: string): void {
        this.nombre = nuevoNombre;
    }

    setId(nuevoId: number): void {
        this.id = nuevoId;
    }

    setClientes(nuevaLista: Cliente[]): void {
        this.clientes = [...nuevaLista];
    }

    setPacientes(nuevaLista: Paciente[]): void {
        this.pacientes = [...nuevaLista]
    }
}



