import * as rls from 'readline-sync';
import { RedDeVeterinarias } from './RedDeVeterinarias';
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";

const redDeVeterinaria = new RedDeVeterinarias()
menuPrincipal()

function menuPrincipal() {
    console.log("BIENVENIDOS")
    console.log("-------------------------")
    console.log("1. Soy una Red de Veterinarias")
    console.log("2. Soy una sucursal")
    console.log("-------------------------")
    console.log("3. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");

    switch (opcion) {
        case 1:
            menuRedDeVeterinarias()
            break;
        case 2:
            menuSucursal()
            break;
        case 3:
            break; //fijarse si sale solo con el break
        default:
            console.log("La opción no es válida");
            menuPrincipal()
    }
}

function menuRedDeVeterinarias() {
    console.log("1. Proveedores")
    console.log("2. Sucursales")
    console.log("3. Ver clientes")
    console.log("4. Ver pacientes")
    console.log("-------------------------")
    console.log("5. Atrás")
    console.log("6. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");

    switch (opcion) {
        case 1:
            proveedores()
            break;
        case 2:
            sucursales()
            break;
        case 3:
            redDeVeterinaria.listarClientes;
            break;
        case 4:
            redDeVeterinaria.listarPacientes;
            break;
        case 5:
            menuPrincipal()
            break;
        case 6:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuRedDeVeterinarias()
    }
}

function menuSucursal() {
    console.log("1. Clientes")
    console.log("2. Pacientes")
    console.log("-------------------------")
    console.log("3. Atrás")
    console.log("4. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");

    switch (opcion) {
        case 1:
            clientes();
            break;
        case 2:
            pacientes();
            break;
        case 3:
            menuPrincipal()
            break;
        case 4:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuSucursal()
    }
}

function proveedores() {
    console.log("PROVEEDORES")
    console.log("-------------------------")
    redDeVeterinaria.listarProveedores();
    console.log("-------------------------")
    console.log("1. Agregar proveedor")
    console.log("2. Eliminar proveedor")
    console.log("3. Modificar proveedor")
    console.log("-------------------------")
    console.log("4. Atrás")
    console.log("5. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
    
    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre del proveedor: ");
            const telefono1: number = rls.question("Ingrese el telefono del proveedor: ");
            redDeVeterinaria.agregarProveedor(nombre1, telefono1)
            break;
        case 2:
            const nombre2: string = rls.question("Ingrese el nombre del proveedor: ");
            const telefono2: number = rls.question("Ingrese el telefono del proveedor: ");
            redDeVeterinaria.eliminarProveedor(nombre2, telefono2)
            break;
        case 3:
            const id3: number = rls.question("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese nuevo nombre ");
            const telefono3: number = rls.question("Ingrese nuevo telefono: ");
            redDeVeterinaria.modificarProveedor(id3, nombre3, telefono3)
            break;
        case 4:
        menuRedDeVeterinarias();
            break;
        case 6:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuRedDeVeterinarias()
    }
}

function sucursales(){
    console.log("SUCURSALES DE VETERINARIAS")
    console.log("-------------------------")
    console.log("1. Lista de sucursales")
    console.log("2. Agregar sucursal")
    console.log("3. Eliminar sucursal")
    console.log("4. Modificar sucursal")
    console.log("-------------------------")
    console.log("5. Atrás")
    console.log("6. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
}

function clientes(){
    console.log("CLIENTES")
    console.log("-------------------------")
    console.log("1. Lista de clientes")
    console.log("2. Agregar clientes")
    console.log("3. Eliminar clientes")
    console.log("4. Modificar clientes")
    console.log("-------------------------")
    console.log("5. Atrás")
    console.log("6. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
}

function pacientes(){
    console.log("PACIENTES")
    console.log("-------------------------")
    console.log("1. Lista de pacientes")
    console.log("2. Agregar pacientes")
    console.log("3. Eliminar pacientes")
    console.log("4. Modificar pacientes")
    console.log("-------------------------")
    console.log("5. Atrás")
    console.log("6. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");
}