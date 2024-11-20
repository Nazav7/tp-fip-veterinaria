import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

export class RedDeVeterinarias {
    veterinarias: Veterinaria[];
    // clientes: Cliente[];
    // pacientes: Paciente[];
    proveedores: Proveedor[];


    constructor() {
        this.veterinarias = []
        this.proveedores = []
        // this.clientes = []
        // this.pacientes = []
    }


    //Métodos
    agregarVeterinaria(veterinaria: Veterinaria) {
        if (veterinaria != undefined && !this.veterinarias.includes(veterinaria)) {
            this.veterinarias.push(veterinaria);
            console.log('Veterinaria ha sido agregada');
        } else {
            console.log('No se puede agregar veterinaria');
        }
    }

    agregarVeterinariaConsola(nombre: string, direccion: string) {
        const veterinaria = this.veterinarias.find(v => v.getNombre() === nombre && v.getDireccion() === direccion);
        if (!veterinaria) {
            const nuevaVeterinaria = new Veterinaria(nombre, direccion);
            this.veterinarias.push(nuevaVeterinaria);
            console.log('La veterinaria ha sido agregada');
        } else {
            console.log('No se puede agregar veterinaria porque ya existe');
        }
    }


    agregarProveedor(proveedor: Proveedor) {
        if (proveedor != undefined && !this.proveedores.includes(proveedor)) {
            this.proveedores.push(proveedor);
            console.log('El proveedor ha sido agregado');
        } else {
            console.log('No se puede agregar proveedor');
        }
    }

    agregarProveedorConsola(nombre: string, telefono: number) {
        const proveedor = this.proveedores.find(p => p.getNombre() === nombre && p.getTelefono() === telefono);
        if (!proveedor) {
            const nuevoProveedor = new Proveedor(nombre, telefono);
            this.proveedores.push(nuevoProveedor);
            console.log('El proveedor ha sido agregado');
        } else {
            console.log('No se puede agregar proveedor porque ya existe');
        }
    }


    eliminarProveedor(proveedor: Proveedor) {
        if (proveedor != undefined && this.proveedores.includes(proveedor)) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado')
        } else {
            console.log('El proveedor no se encuentra en la base de datos')
        }
    }

    eliminarProveedorConsola(id: number) {
        const proveedor = this.proveedores.find(p => p.getId() === id);
        if (proveedor) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores.splice(index, 1);
            console.log('El proveedor ha sido eliminado');
        } else {
            console.log('El proveedor no se encuentra en la base de datos');
        }
    }


    eliminarVeterinaria(veterinaria: Veterinaria) {
        if (veterinaria != undefined && this.veterinarias.includes(veterinaria)) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias.splice(index, 1);
            console.log('La veterinaria ha sido eliminado')
        } else {
            console.log('La veterinaria no se encuentra en la base de datos')
        }
    }

    eliminarVeterinariaConsola(id: number) {
        const veterinaria = this.veterinarias.find(p => p.getId() === id);
        if (veterinaria) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias.splice(index, 1);
            console.log('La veterinaria ha sido eliminada');
        } else {
            console.log('La veterinaria no se encuentra en la base de datos');
        }
    }


    modificarVeterinaria(veterinaria: Veterinaria, veterinariaModificado: Veterinaria) {
        if (veterinaria != undefined && this.veterinarias.includes(veterinaria)) {
            const index = this.veterinarias.indexOf(veterinaria);
            this.veterinarias[index] = veterinariaModificado;
            console.log('La veterinaria ha sido modificada')
        } else {
            console.log('No se puede modificar veterinaria')
        }
    }

    modificarVeterinariaConsola(id: number, nuevoNombre: string, nuevaDireccion: string) {
        const veterinaria = this.veterinarias.find(v => v.getId() === id);
        if (veterinaria) {
            veterinaria.setNombre(nuevoNombre)
            veterinaria.setDireccion(nuevaDireccion);
            console.log('La veterinaria ha sido modificada');
        } else {
            console.log('No se encontró ID');
        }
    }


    modificarProveedor(proveedor: Proveedor, proveedorModificado: Proveedor) {
        if (proveedor != undefined && this.proveedores.includes(proveedor)) {
            const index = this.proveedores.indexOf(proveedor);
            this.proveedores[index] = proveedorModificado;
            console.log('El proveedor ha sido modificado')
        } else {
            console.log('No se puede modificar proveedor')
        }
    }

    modificarProveedorConsola(id: number, nuevoNombre: string, nuevoTelefono: number) {
        const proveedor = this.proveedores.find(p => p.getId() === id);
        if (proveedor) {
            proveedor.setNombre(nuevoNombre)
            proveedor.setTelefono(nuevoTelefono);
            console.log('El proveedor ha sido modificado');
        } else {
            console.log('No se encontró ID');
        }
    }

    //Getters
    
    // getClientes(): Cliente[] {
    //     return [...this.clientes];
    // }


    // getPacientes(): Paciente[] {
    //     return [...this.pacientes]
    // }


    getVeterinarias(): Veterinaria[] {
        return [...this.veterinarias];
    }


    getProveedores(): Proveedor[] {
        return [...this.proveedores]
    }


    //Getters

    // setClientes(nuevaLista: Cliente[]): void {
    //     this.clientes = [...nuevaLista];
    // }


    // setPacientes(nuevaLista: Paciente[]): void {
    //     this.pacientes = [...nuevaLista]
    // }


    setVeterinarias(nuevaLista: Veterinaria[]): void {
        this.veterinarias = [...nuevaLista];
    }


    setProveedores(nuevaLista: Proveedor[]): void {
        this.proveedores = [...nuevaLista]
    }

    //listar
    listarVeterinarias() {
        this.veterinarias.forEach(veterinaria => {
            console.log(`${veterinaria.getId()}, ${veterinaria.getNombre()}, ${veterinaria.getDireccion()}`);
        });
    }

    listarClientes() {
        this.veterinarias.forEach(veterinaria => {
            const clientes: Cliente[] = veterinaria.getClientes();
            clientes.forEach(cliente => {
                console.log(`${cliente.getId()}, ${cliente.getNombre()}, ${cliente.getTelefono()}, ${cliente.getEsVIP()}`);
            });    
        }) 

        // this.clientes.forEach(cliente => {
        //     console.log(`${cliente.getId()}, ${cliente.getNombre()}, ${cliente.getTelefono()}, ${cliente.getEsVIP()}`);
        // });
    }

    listarPacientes() {
        this.veterinarias.forEach(veterinaria => {
            const pacientes: Paciente[] = veterinaria.getPacientes();
            pacientes.forEach(paciente => {
                console.log(`${paciente.getIdDuenio()}, ${paciente.getNombre()}, ${paciente.getEspecie()}`);
        })
        
        });
    }

    listarProveedores() {
        this.proveedores.forEach(proveedor => {
            console.log(`${proveedor.getId()}, ${proveedor.getNombre()}, ${proveedor.getTelefono()}`);
        });
    }

    // agregarCliente(cliente: Cliente) {
    //     if (cliente != undefined && !this.clientes.includes(cliente)) {
    //         this.clientes.push(cliente);
            
    //     } 
    // }

    // agregarPaciente(paciente: Paciente) {
    //     if (paciente != undefined && !this.pacientes.includes(paciente)) {
    //         this.pacientes.push(paciente);
            
    //     } 
    // }
}