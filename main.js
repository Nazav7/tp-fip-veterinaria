"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var RedDeVeterinarias_1 = require("./RedDeVeterinarias");
var Veterinaria_1 = require("./Veterinaria");
var utils_1 = require("./Clases/utils");
var redDeVeterinaria = new RedDeVeterinarias_1.RedDeVeterinarias();
var veterinarias = [
    new Veterinaria_1.Veterinaria("Veterinaria Pepa", "Calle 1"),
    new Veterinaria_1.Veterinaria("Vet Tita", "Calle 2")
];
menuPrincipal();
function menuPrincipal() {
    console.log("BIENVENIDOS");
    console.log("-------------------------");
    console.log("1. Soy una Red de Veterinarias");
    console.log("2. Soy una sucursal");
    console.log("-------------------------");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
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
    console.log("1. Proveedores");
    console.log("2. Sucursales");
    console.log("3. Ver clientes");
    console.log("4. Ver pacientes");
    console.log("-------------------------");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    switch (opcion) {
        case 1:
            proveedores();
            break;
        case 2:
            sucursales();
            break;
        case 3:
            redDeVeterinaria.listarClientes;
            break;
        case 4:
            redDeVeterinaria.listarPacientes;
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
    //Antes el usuario deberia ingresar su ID de veterinaria y se debe buscar su ID
    //let opcion: number = rls.questionInt("Ingrese su ID: ");
    console.log("\n");
    console.log("1. Clientes");
    console.log("2. Pacientes");
    console.log("-------------------------");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    switch (opcion) {
        case 1:
            clientes();
            break;
        case 2:
            pacientes();
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
function proveedores() {
    console.log("\n");
    console.log("PROVEEDORES");
    console.log("-------------------------");
    redDeVeterinaria.listarProveedores();
    console.log("-------------------------");
    console.log("1. Agregar proveedor");
    console.log("2. Eliminar proveedor");
    console.log("3. Modificar proveedor");
    console.log("-------------------------");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    switch (opcion) {
        case 1:
            var nombre1 = rls.question("Ingrese el nombre del proveedor: ");
            var telefono1 = rls.question("Ingrese el telefono del proveedor: ");
            redDeVeterinaria.agregarProveedor(nombre1, telefono1);
            break;
        case 2:
            var nombre2 = rls.question("Ingrese el nombre del proveedor: ");
            var telefono2 = rls.question("Ingrese el telefono del proveedor: ");
            redDeVeterinaria.eliminarProveedor(nombre2, telefono2);
            break;
        case 3:
            var id3 = rls.question("Ingrese ID: ");
            var nombre3 = rls.question("Ingrese nuevo nombre ");
            var telefono3 = rls.question("Ingrese nuevo telefono: ");
            redDeVeterinaria.modificarProveedor(id3, nombre3, telefono3);
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
    console.log("\n");
    console.log("SUCURSALES DE VETERINARIAS");
    console.log("-------------------------");
    redDeVeterinaria.listarVeterinarias();
    console.log("-------------------------");
    console.log("1. Agregar sucursal");
    console.log("2. Eliminar sucursal");
    console.log("3. Modificar sucursal");
    console.log("-------------------------");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    switch (opcion) {
        case 1:
            var nombre1 = rls.question("Ingrese el nombre de la sucursal: ");
            var direccion1 = rls.question("Ingrese la direccion de la sucursal: ");
            redDeVeterinaria.agregarVeterinaria(nombre1, direccion1);
            break;
        case 2:
            var nombre2 = rls.question("Ingrese el nombre de la sucursal: ");
            var direccion2 = rls.question("Ingrese la direccion de la sucursal: ");
            redDeVeterinaria.eliminarVeterinaria(nombre2, direccion2);
            break;
        case 3:
            var id3 = rls.question("Ingrese ID: ");
            var nombre3 = rls.question("Ingrese nuevo nombre ");
            var direccion3 = rls.question("Ingrese nueva direccion: ");
            redDeVeterinaria.modificarVeterinaria(id3, nombre3, direccion3);
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
function clientes() {
    console.log("\n");
    console.log("CLIENTES");
    console.log("-------------------------");
    redDeVeterinaria.listarClientes();
    console.log("-------------------------");
    console.log("1. Agregar cliente");
    console.log("2. Eliminar cliente");
    console.log("3. Modificar cliente");
    console.log("4. Registrar visita"); //FALTA HACER ESTA, creo que hay que hacer registrar visita en Veterinaria, ahora esta en Cliente
    console.log("-------------------------");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opcion: ");
    switch (opcion) {
        case 1:
            var nombre1_1 = rls.question("Ingrese el nombre del cliente: ");
            var telefono1_1 = rls.question("Ingrese el telefono del cliente: ");
            veterinarias.forEach(function (veterinaria) {
                veterinaria.agregarCliente(nombre1_1, telefono1_1);
            });
            break;
        case 2:
            var nombre2 = rls.question("Ingrese el nombre del cliente: ");
            var telefono2_1 = rls.question("Ingrese el telefono del cliente: ");
            veterinarias.forEach(function (veterinaria) {
                veterinaria.eliminarCliente(nombre1_1, telefono2_1);
            });
            break;
        case 3:
            var id3 = rls.question("Ingrese ID: ");
            var nombre3 = rls.question("Ingrese el nuevo nombre del cliente: ");
            var telefono3_1 = rls.question("Ingrese el nuevo telefono del cliente: ");
            veterinarias.forEach(function (veterinaria) {
                veterinaria.modificarCliente(nombre1_1, telefono3_1);
            });
            break;
        case 4:
            var idClienteInput = rls.question("Ingrese ID de cliente: ");
            var id_cliente_1 = parseInt(idClienteInput, 10);
            if (!isNaN(id_cliente_1) && id_cliente_1 > 0) {
                var clientes_1 = (0, utils_1.leerTXT)('./bbdd/clientes.txt');
                var clienteEncontrado = clientes_1.find(function (cliente) { return parseInt(cliente.ID, 10) === id_cliente_1; }); // Busca por ID
                if (clienteEncontrado) {
                    console.log("Se registra la visita del cliente");
                }
                else {
                    console.log("El ID ingresado no corresponde a un cliente registrado.");
                }
            }
            else {
                console.log("ID inválido. Debe ser un número mayor a 0.");
            }
            clientes();
            break;
        case 9:
            menuRedDeVeterinarias();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            clientes();
    }
}
function pacientes() {
    console.log("\n");
    console.log("PACIENTES");
    console.log("-------------------------");
    redDeVeterinaria.listarPacientes();
    console.log("-------------------------");
    console.log("1. Agregar pacientes");
    console.log("2. Eliminar pacientes");
    console.log("3. Modificar pacientes");
    console.log("-------------------------");
    console.log("9. Atrás");
    console.log("0. Salir");
    var opcion = rls.questionInt("Ingrese una opción: ");
    switch (opcion) {
        case 1:
            var nombre1_2 = rls.question("Ingrese el nombre del paciente: ");
            var especie1_1 = rls.question("Ingrese la especie del paciente: ");
            var id_duenio_1_1 = rls.question("Ingrese el ID del dueño del paciente: ");
            veterinarias.forEach(function (veterinaria) {
                veterinaria.agregarPaciente(nombre1_2, especie1_1, id_duenio_1_1);
            });
            break;
        case 2:
            var nombre2_1 = rls.question("Ingrese el nombre del paciente: ");
            var especie2_1 = rls.question("Ingrese la especie del paciente: ");
            veterinarias.forEach(function (veterinaria) {
                veterinaria.eliminarPaciente(nombre2_1, especie2_1);
            });
            break;
        case 3:
            var nombre3_1 = rls.question("Ingrese el nombre del paciente: ");
            var especie3_1 = rls.question("Ingrese la especie del paciente: ");
            veterinarias.forEach(function (veterinaria) {
                veterinaria.modificarPaciente(nombre3_1, especie3_1);
            });
            break;
        case 4:
            break;
        case 9:
            menuRedDeVeterinarias();
            break;
        case 0:
            break; //fijarse si sale solo con break
        default:
            console.log("La opción no es válida");
            clientes();
    }
}
