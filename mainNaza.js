"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var RedDeVeterinarias_1 = require("./RedDeVeterinarias");
var Veterinaria_1 = require("./Veterinaria");
var Proveedor_1 = require("./Proveedor");
var Cliente_1 = require("./Cliente");
var Paciente_1 = require("./Paciente");
//Se crea Red
var redDeVeterinaria = new RedDeVeterinarias_1.RedDeVeterinarias();
//Se crea veterinaria
var arrayVeterinarias = [
    new Veterinaria_1.Veterinaria("Veterinaria Pepa", "Calle 1"),
];
//Se crean proveedores
var arrayProveedores = [
    new Proveedor_1.Proveedor("Raul González", 2284689898),
    new Proveedor_1.Proveedor("Liliana Vélez", 2284689898)
];
//Se crean clientes
var arrayClientes = [
    new Cliente_1.Cliente("Juan Pérez", 2284788959),
    new Cliente_1.Cliente("María López", 2284475869)
];
//Se crean pacientes
var arrayPacientes = [
    new Paciente_1.Paciente("Tita", "perro"),
    new Paciente_1.Paciente("Misha", "gato"),
    new Paciente_1.Paciente("Lore", "loro")
];
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
arrayPacientes[0].agregarDuenio(arrayClientes[0]);
arrayPacientes[1].agregarDuenio(arrayClientes[0]);
arrayPacientes[2].agregarDuenio(arrayClientes[1]);
//Se asignan id del duenio a pacientes
arrayPacientes[0].asignarID(arrayClientes[0].getId());
arrayPacientes[1].asignarID(arrayClientes[0].getId());
arrayPacientes[2].asignarID(arrayClientes[1].getId());
menuPrincipal();
function menuPrincipal() {
    console.clear();
    console.log("_________________________");
    console.log("BIENVENIDOS");
    console.log("-------------------------");
    console.log("1. Soy una Red de Veterinarias");
    console.log("2. Soy una sucursal");
    console.log("0. Salir");
    console.log("-------------------------");
    var opcion = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________");
    switch (opcion) {
        case 1:
            menuRedDeVeterinarias();
            break;
        case 2:
            menuSucursal();
            break;
        case 0:
            break; //fijarse si sale solo con el break
        default:
            console.log("La opción no es válida");
            menuPrincipal();
    }
}
function menuRedDeVeterinarias() {
    console.clear();
    console.log("_________________________");
    console.log("RED");
    console.log("-------------------------");
    console.log("1. Proveedores");
    console.log("2. Sucursales");
    console.log("3. Ver clientes");
    console.log("4. Ver pacientes");
    console.log("9. Atrás");
    console.log("0. Salir");
    console.log("-------------------------");
    var opcion = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________");
    switch (opcion) {
        case 1:
            proveedores();
            break;
        case 2:
            sucursales();
            break;
        case 3:
            redDeVeterinaria.listarClientes();
            console.log("-------------------------");
            console.log("9. Atrás");
            var opcionCliente = rls.questionInt("Ingrese una opción: ");
            ("_________________________");
            if (opcionCliente === 9) {
                menuRedDeVeterinarias();
            }
            break;
        case 4:
            redDeVeterinaria.listarPacientes();
            break;
        case 9:
            menuPrincipal();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuRedDeVeterinarias();
    }
}
function menuSucursal() {
    console.clear();
    //Antes el usuario deberia ingresar su ID de veterinaria y se debe buscar su ID
    redDeVeterinaria.listarVeterinarias();
    var idVet = rls.questionInt("Ingrese su ID: ");
    var veterinariaEncontrada = redDeVeterinaria.getVeterinarias().find(function (veterinaria) { return veterinaria.getId() == idVet; });
    if (veterinariaEncontrada) {
        console.log("_________________________");
        console.log("VETERINARIA");
        console.log("-------------------------");
        console.log("1. Clientes");
        console.log("2. Pacientes");
        console.log("9. Atrás");
        console.log("0. Salir");
        console.log("-------------------------");
        var opcion = rls.questionInt("Ingrese una opción: ");
        console.log("_________________________");
        switch (opcion) {
            case 1:
                clientes(veterinariaEncontrada);
                break;
            case 2:
                pacientes(veterinariaEncontrada);
                break;
            case 9:
                menuPrincipal();
                break;
            case 0:
                break; //fijarse si sale solo con break
            default:
                console.log("La opción no es válida");
                menuSucursal();
        }
    }
    else {
        console.log("No se encontro ID de Veterinaria");
        setTimeout(function () {
            menuPrincipal();
        }, 3000);
    }
}
function proveedores() {
    console.clear();
    console.log("_________________________");
    console.log("PROVEEDORES");
    console.log("-------------------------");
    redDeVeterinaria.listarProveedores();
    console.log("-------------------------");
    console.log("1. Agregar proveedor");
    console.log("2. Eliminar proveedor");
    console.log("3. Modificar proveedor");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________");
    switch (opcion) {
        case 1:
            var nombre1 = rls.question("Ingrese el nombre del proveedor: ");
            var telefono1 = rls.questionInt("Ingrese el telefono del proveedor: ");
            redDeVeterinaria.agregarProveedorConsola(nombre1, telefono1);
            menuRedDeVeterinarias();
            break;
        case 2:
            var id2 = rls.questionInt("Ingrese el ID del proveedor: ");
            redDeVeterinaria.eliminarProveedorConsola(id2);
            menuRedDeVeterinarias();
            break;
        case 3:
            var id3 = rls.questionInt("Ingrese ID: ");
            var nombre3 = rls.question("Ingrese nuevo nombre ");
            var telefono3 = rls.questionInt("Ingrese nuevo telefono: ");
            redDeVeterinaria.modificarProveedorConsola(id3, nombre3, telefono3);
            menuRedDeVeterinarias();
            break;
        case 9:
            menuRedDeVeterinarias();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            menuRedDeVeterinarias();
    }
}
function sucursales() {
    console.clear();
    console.log("_________________________");
    console.log("SUCURSALES DE VETERINARIAS");
    console.log("-------------------------");
    redDeVeterinaria.listarVeterinarias();
    console.log("-------------------------");
    console.log("1. Agregar sucursal");
    console.log("2. Eliminar sucursal");
    console.log("3. Modificar sucursal");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________");
    switch (opcion) {
        case 1:
            var nombre1 = rls.question("Ingrese el nombre de la sucursal: ");
            var direccion1 = rls.question("Ingrese la direccion de la sucursal: ");
            redDeVeterinaria.agregarVeterinariaConsola(nombre1, direccion1);
            sucursales();
            break;
        case 2:
            var id2 = rls.questionInt("Ingrese ID de la sucursal: ");
            redDeVeterinaria.eliminarVeterinariaConsola(id2);
            sucursales();
            break;
        case 3:
            var id3 = rls.questionInt("Ingrese ID: ");
            var nombre3 = rls.question("Ingrese nuevo nombre ");
            var direccion3 = rls.question("Ingrese nueva direccion: ");
            redDeVeterinaria.modificarVeterinariaConsola(id3, nombre3, direccion3);
            sucursales();
            break;
        case 9:
            menuRedDeVeterinarias();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            sucursales();
    }
}
function clientes(veterinaria) {
    console.clear();
    console.log("_________________________");
    console.log("CLIENTES");
    console.log("-------------------------");
    veterinaria.listarClientes();
    console.log("-------------------------");
    console.log("1. Agregar cliente");
    console.log("2. Eliminar cliente");
    console.log("3. Modificar cliente");
    console.log("4. Registrar visita");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________");
    switch (opcion) {
        case 1:
            var nombre1 = rls.question("Ingrese el nombre del cliente: ");
            var telefono1 = rls.questionInt("Ingrese el telefono del cliente: ");
            veterinaria.agregarClienteConsola(nombre1, telefono1);
            clientes(veterinaria);
            break;
        case 2:
            var id2 = rls.questionInt("Ingrese ID del cliente: ");
            veterinaria.eliminarClienteConsola(id2);
            clientes(veterinaria);
            break;
        case 3:
            var id3 = rls.questionInt("Ingrese ID: ");
            var nombre3 = rls.question("Ingrese el nuevo nombre del cliente: ");
            var telefono3 = rls.questionInt("Ingrese el nuevo telefono del cliente: ");
            veterinaria.modificarClienteConsola(id3, nombre3, telefono3);
            clientes(veterinaria);
            break;
        case 4:
            var id4 = rls.questionInt("Ingrese ID de cliente: ");
            veterinaria.registrarVisita(id4);
            clientes(veterinaria);
            break;
        case 9:
            menuSucursal();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            clientes(veterinaria);
    }
}
function pacientes(veterinaria) {
    console.clear();
    console.log("_________________________");
    console.log("PACIENTES");
    console.log("-------------------------");
    veterinaria.listarPacientes();
    console.log("-------------------------");
    console.log("1. Agregar pacientes");
    console.log("2. Eliminar pacientes");
    console.log("3. Modificar pacientes");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    console.log("_________________________");
    switch (opcion) {
        case 1:
            veterinaria.listarClientes();
            var idDuenio1 = rls.questionInt("Ingrese ID del propietario: ");
            var nombre1 = rls.question("Ingrese el nombre del paciente: ");
            var especie1 = rls.question("Ingrese la especie del paciente: ");
            veterinaria.verificarIdYAgregarPacienteConsola(idDuenio1, nombre1, especie1);
            pacientes(veterinaria);
            break;
        case 2:
            var id2 = rls.questionInt("Ingrese el ID del paciente: ");
            veterinaria.eliminarPacienteConsola(id2);
            pacientes(veterinaria);
            break;
        case 3:
            var id3 = rls.questionInt("Ingrese el ID del paciente: ");
            var nombre3 = rls.question("Ingrese el nuevo nombre del paciente: ");
            var especie3 = rls.question("Ingrese la especie del paciente: ");
            veterinaria.modificarPacienteConsola(id3, nombre3, especie3);
            pacientes(veterinaria);
            break;
        case 9:
            menuSucursal();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            pacientes(veterinaria);
    }
}
