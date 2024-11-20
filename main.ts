import * as rls from 'readline-sync';
import { RedDeVeterinarias } from './RedDeVeterinarias';
import { Veterinaria } from "./Veterinaria";
import { Proveedor } from "./Proveedor";
import { Cliente } from './Cliente';
import { Paciente } from './Paciente';

//Se crea Red
const redDeVeterinaria = new RedDeVeterinarias()

//Se crea veterinaria
const arrayVeterinarias = [
    new Veterinaria("Veterinaria Pepa", "Calle 1"),
];

//Se crean proveedores
const arrayProveedores = [
    new Proveedor("Raul González", 2284689898),
    new Proveedor("Liliana Vélez", 2284689898)
]

//Se crean clientes
const arrayClientes = [
    new Cliente("Juan Pérez", 2284788959),
    new Cliente("María López", 2284475869)
]

//Se crean pacientes
const arrayPacientes = [
    new Paciente("Tita", "perro"),
    new Paciente("Misha", "gato"),
    new Paciente("Lore", "loro")
]

//Se agregan veterinarias, proveedores a Red
redDeVeterinaria.agregarVeterinaria(arrayVeterinarias[0]);
redDeVeterinaria.agregarProveedor(arrayProveedores[0]);
redDeVeterinaria.agregarProveedor(arrayProveedores[1]);

//Se agregan clientes y pacientes a veterinaria
arrayVeterinarias[0].agregarCliente(arrayClientes[0]);
arrayVeterinarias[0].agregarPaciente(arrayPacientes[0]);
arrayVeterinarias[0].agregarPaciente(arrayPacientes[1]);
arrayVeterinarias[0].agregarCliente(arrayClientes[1]);
arrayVeterinarias[0].agregarPaciente(arrayPacientes[2]);

//Se agregan pacientes(mascotas) a clientes
arrayClientes[0].agregarMascota(arrayPacientes[0]);
arrayClientes[0].agregarMascota(arrayPacientes[1]);
arrayClientes[1].agregarMascota(arrayPacientes[2]);

//Se asignan clientes a pacientes
arrayPacientes[0].agregarDuenio(arrayClientes[0])
arrayPacientes[1].agregarDuenio(arrayClientes[0])
arrayPacientes[2].agregarDuenio(arrayClientes[1])

//Se asignan id del duenio a pacientes
arrayPacientes[0].asignarID(arrayClientes[0].getId())
arrayPacientes[1].asignarID(arrayClientes[0].getId())
arrayPacientes[2].asignarID(arrayClientes[1].getId())

menuPrincipal()

function menuPrincipal() {
    console.clear()
    console.log("_________________________")
    console.log("BIENVENIDOS")
    console.log("-------------------------")
    console.log("1. Soy una Red de Veterinarias")
    console.log("2. Soy una sucursal")
    console.log("0. Salir")
    console.log("-------------------------")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            menuRedDeVeterinarias()
            break;
        case 2:
            menuSucursal()
            break;
        case 0:
            break; //fijarse si sale solo con el break
        default:
            console.log("La opción no es válida");
            menuPrincipal()
    }
}

function menuRedDeVeterinarias() {
    console.clear()
    console.log("_________________________")
    console.log("RED")
    console.log("-------------------------")
    console.log("1. Proveedores")
    console.log("2. Sucursales")
    console.log("3. Ver clientes")
    console.log("4. Ver pacientes")
    console.log("9. Atrás")
    console.log("0. Salir")
    console.log("-------------------------")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            proveedores()
            break;
        case 2:
            sucursales()
            break;
        case 3:
            redDeVeterinaria.listarClientes();
            console.log("-------------------------");
            console.log("9. Atrás")
            let opcionCliente: number = rls.questionInt("Ingrese una opción: ");
            ("_________________________")
            if (opcionCliente === 9) {
                menuRedDeVeterinarias();
            }
            break;
        case 4:
            redDeVeterinaria.listarPacientes();
            break;
        case 9:
            menuPrincipal()
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuRedDeVeterinarias()
    }
}

function menuSucursal() {
    console.clear()

    //Antes el usuario deberia ingresar su ID de veterinaria y se debe buscar su ID
    redDeVeterinaria.listarVeterinarias()
    const idVet: number = rls.questionInt("Ingrese su ID: ");
    const veterinariaEncontrada = redDeVeterinaria.getVeterinarias().find(veterinaria => veterinaria.getId() == idVet)
    if (veterinariaEncontrada) {
        console.log("_________________________")
        console.log("VETERINARIA")
        console.log("-------------------------")
        console.log("1. Clientes")
        console.log("2. Pacientes")
        console.log("9. Atrás")
        console.log("0. Salir")
        console.log("-------------------------")
        let opcion: number = rls.questionInt("Ingrese una opción: ");
        console.log("_________________________")

        switch (opcion) {
            case 1:
                clientes(veterinariaEncontrada);
                break;
            case 2:
                pacientes(veterinariaEncontrada);
                break;
            case 9:
                menuPrincipal()
                break;
            case 0:
                break; //fijarse si sale solo con break
            default:
                console.log("La opción no es válida");
                menuSucursal()
        }
    } else {
        console.log("No se encontro ID de Veterinaria")
        setTimeout(() => {
            menuPrincipal()
        }, 3000)
    }
}

function proveedores() {
    console.clear()

    console.log("_________________________")
    console.log("PROVEEDORES")
    console.log("-------------------------")
    redDeVeterinaria.listarProveedores();
    console.log("-------------------------")
    console.log("1. Agregar proveedor")
    console.log("2. Eliminar proveedor")
    console.log("3. Modificar proveedor")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre del proveedor: ");
            const telefono1: number = rls.questionInt("Ingrese el telefono del proveedor: ");
            redDeVeterinaria.agregarProveedorConsola(nombre1, telefono1)
            menuRedDeVeterinarias();
            break;
        case 2:
            const id2: number = rls.questionInt("Ingrese el ID del proveedor: ");
            redDeVeterinaria.eliminarProveedorConsola(id2)
            menuRedDeVeterinarias();
            break;
        case 3:
            const id3: number = rls.questionInt("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese nuevo nombre ");
            const telefono3: number = rls.questionInt("Ingrese nuevo telefono: ");
            redDeVeterinaria.modificarProveedorConsola(id3, nombre3, telefono3)
            menuRedDeVeterinarias();
            break;
        case 9:
            menuRedDeVeterinarias();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuRedDeVeterinarias()
    }
}


function sucursales() {
    console.clear()

    console.log("_________________________")
    console.log("SUCURSALES DE VETERINARIAS")
    console.log("-------------------------")
    redDeVeterinaria.listarVeterinarias();
    console.log("-------------------------")
    console.log("1. Agregar sucursal")
    console.log("2. Eliminar sucursal")
    console.log("3. Modificar sucursal")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre de la sucursal: ");
            const direccion1: string = rls.question("Ingrese la direccion de la sucursal: ");
            redDeVeterinaria.agregarVeterinariaConsola(nombre1, direccion1)
            sucursales()
            break;
        case 2:
            const id2: number = rls.questionInt("Ingrese ID de la sucursal: ");
            redDeVeterinaria.eliminarVeterinariaConsola(id2)
            sucursales()
            break;
        case 3:
            const id3: number = rls.questionInt("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese nuevo nombre ");
            const direccion3: string = rls.question("Ingrese nueva direccion: ");
            redDeVeterinaria.modificarVeterinariaConsola(id3, nombre3, direccion3)
            sucursales()
            break;
        case 9:
            menuRedDeVeterinarias();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            sucursales()
    }
}

function clientes(veterinaria: Veterinaria) {
    console.clear()

    console.log("_________________________")
    console.log("CLIENTES")
    console.log("-------------------------")
    veterinaria.listarClientes();
    console.log("-------------------------")
    console.log("1. Agregar cliente")
    console.log("2. Eliminar cliente")
    console.log("3. Modificar cliente")
    console.log("4. Registrar visita")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre del cliente: ");
            const telefono1: number = rls.questionInt("Ingrese el telefono del cliente: ");
            veterinaria.agregarClienteConsola(nombre1, telefono1);
            clientes(veterinaria)
            break;
        case 2:
            const id2: number = rls.questionInt("Ingrese ID del cliente: ");
                veterinaria.eliminarClienteConsola(id2);
            clientes(veterinaria)
            break;
        case 3:
            const id3: number = rls.questionInt("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese el nuevo nombre del cliente: ");
            const telefono3: number = rls.questionInt("Ingrese el nuevo telefono del cliente: ");
                veterinaria.modificarClienteConsola(id3, nombre3, telefono3);
            clientes(veterinaria)
            break;
        case 4:
            const id4: number = rls.questionInt("Ingrese ID de cliente: ");
            veterinaria.registrarVisita(id4)
            clientes(veterinaria)
            break;
        case 9:
            menuSucursal();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            clientes(veterinaria)
    }
}

function pacientes(veterinaria: Veterinaria) {
    console.clear()

    console.log("_________________________")
    console.log("PACIENTES")
    console.log("-------------------------")
    veterinaria.listarPacientes();
    console.log("-------------------------")
    console.log("1. Agregar pacientes")
    console.log("2. Eliminar pacientes")
    console.log("3. Modificar pacientes")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________")

    switch (opcion) {
        case 1:
            veterinaria.listarClientes();
            const idDuenio1: number = rls.questionInt("Ingrese ID del propietario: ");
            const nombre1: string = rls.question("Ingrese el nombre del paciente: ");
            const especie1: string = rls.question("Ingrese la especie del paciente: ");
            veterinaria.verificarIdYAgregarPacienteConsola(idDuenio1, nombre1, especie1);
            pacientes(veterinaria)
            break;
        case 2:
            const id2: number = rls.questionInt("Ingrese el ID del paciente: ");
                veterinaria.eliminarPacienteConsola(id2);
            pacientes(veterinaria)
            break;
        case 3:
            const id3: number = rls.questionInt("Ingrese el ID del paciente: ");
            const nombre3: string = rls.question("Ingrese el nuevo nombre del paciente: ");
            const especie3: string = rls.question("Ingrese la especie del paciente: ");
                veterinaria.modificarPacienteConsola(id3, nombre3, especie3);
            pacientes(veterinaria)
            break;
        case 9:
            menuSucursal();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            pacientes(veterinaria)
    }
}