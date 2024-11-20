"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var RedDeVeterinarias_1 = require("./RedDeVeterinarias");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sistema = new RedDeVeterinarias_1.RedDeVeterinarias();
function mostrarMenu() {
    console.log("\n    ********** MENU PRINCIPAL **********\n    1. Listar veterinarias\n    2. Agregar veterinaria\n    3. Modificar veterinaria\n    4. Eliminar veterinaria\n    5. Listar proveedores\n    6. Agregar proveedor\n    7. Modificar proveedor\n    8. Eliminar proveedor\n    9. Salir\n    *************************************\n    ");
    rl.question('Seleccione una opción: ', manejarOpcion);
}
function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            listarVeterinarias();
            break;
        case '2':
            agregarVeterinaria();
            break;
        case '3':
            modificarVeterinaria();
            break;
        case '4':
            eliminarVeterinaria();
            break;
        case '5':
            listarProveedores();
            break;
        case '6':
            agregarProveedor();
            break;
        case '7':
            modificarProveedor();
            break;
        case '8':
            eliminarProveedor();
            break;
        case '9':
            console.log('¡Gracias por usar el sistema!');
            rl.close();
            break;
        default:
            console.log('Opción inválida. Intente de nuevo.');
            mostrarMenu();
            break;
    }
}
function listarVeterinarias() {
    console.log('*** Veterinarias ***');
    sistema.listarVeterinarias();
    mostrarMenu();
}
function agregarVeterinaria() {
    rl.question('Ingrese el nombre de la veterinaria: ', function (nombre) {
        rl.question('Ingrese la dirección de la veterinaria: ', function (direccion) {
            sistema.agregarVeterinaria(nombre, direccion);
            mostrarMenu();
        });
    });
}
function modificarVeterinaria() {
    rl.question('Ingrese el ID de la veterinaria a modificar: ', function (id) {
        rl.question('Ingrese el nuevo nombre de la veterinaria: ', function (nuevoNombre) {
            rl.question('Ingrese la nueva dirección de la veterinaria: ', function (nuevaDireccion) {
                sistema.modificarVeterinaria(Number(id), nuevoNombre, nuevaDireccion);
                mostrarMenu();
            });
        });
    });
}
function eliminarVeterinaria() {
    rl.question('Ingrese el nombre de la veterinaria a eliminar: ', function (nombre) {
        rl.question('Ingrese la dirección de la veterinaria a eliminar: ', function (direccion) {
            sistema.eliminarVeterinaria(nombre, direccion);
            mostrarMenu();
        });
    });
}
function listarProveedores() {
    console.log('*** Proveedores ***');
    sistema.listarProveedores();
    mostrarMenu();
}
function agregarProveedor() {
    rl.question('Ingrese el nombre del proveedor: ', function (nombre) {
        rl.question('Ingrese el teléfono del proveedor: ', function (telefono) {
            sistema.agregarProveedor(nombre, Number(telefono));
            mostrarMenu();
        });
    });
}
function modificarProveedor() {
    rl.question('Ingrese el ID del proveedor a modificar: ', function (id) {
        rl.question('Ingrese el nuevo nombre del proveedor: ', function (nuevoNombre) {
            rl.question('Ingrese el nuevo teléfono del proveedor: ', function (nuevoTelefono) {
                sistema.modificarProveedor(Number(id), nuevoNombre, Number(nuevoTelefono));
                mostrarMenu();
            });
        });
    });
}
function eliminarProveedor() {
    rl.question('Ingrese el nombre del proveedor a eliminar: ', function (nombre) {
        rl.question('Ingrese el teléfono del proveedor a eliminar: ', function (telefono) {
            sistema.eliminarProveedor(nombre, Number(telefono));
            mostrarMenu();
        });
    });
}
mostrarMenu();
//++++++++++++++++++++++++++  OPCION 2  +++++++++++++++++++++++++++
/*


import * as readline from 'readline';
import { RedDeVeterinarias } from './RedDeVeterinarias';
import { Veterinaria } from './Veterinaria';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistemaRed = new RedDeVeterinarias(); // para la red de veterinarias
let veterinariaActual: Veterinaria | null = null; // para manejar la veterinaria seleccionada

function mostrarMenuPrincipal() {
    console.log(`
    ********** MENU PRINCIPAL **********
    1. Soy Sucursal
    2. Soy Red
    3. Salir
    *************************************
    `);
    rl.question('Seleccione una opción: ', manejarOpcionPrincipal);
}

function manejarOpcionPrincipal(opcion: string) {
    switch (opcion) {
        case '1':
            seleccionarSucursal();
            break;
        case '2':
            menuRed();
            break;
        case '3':
            console.log('¡Gracias por usar el sistema!');
            rl.close();
            break;
        default:
            console.log('Opción inválida. Intente de nuevo.');
            mostrarMenuPrincipal();
            break;
    }
}

function seleccionarSucursal() {
    console.log('*** Seleccionar Sucursal ***');
    sistemaRed.listarVeterinarias();
    rl.question('Ingrese el ID de la sucursal o escriba "atras" para volver: ', (id) => {
        if (id.toLowerCase() === 'atras') {
            mostrarMenuPrincipal();
        } else {
            const sucursal = sistemaRed.getVeterinaria().find(v => v.getId() === Number(id));
            if (sucursal) {
                veterinariaActual = sucursal;
                menuSucursal();
            } else {
                console.log('ID inválido. Intente de nuevo.');
                seleccionarSucursal();
            }
        }
    });
}

function menuSucursal() {
    if (!veterinariaActual) {
        console.log('No se seleccionó ninguna sucursal.');
        mostrarMenuPrincipal();
        return;
    }

    console.log(`
    ********** MENU SUCURSAL **********
    1. Clientes
    2. Pacientes
    3. Atras
    4. Salir
    ***********************************
    `);
    rl.question('Seleccione una opción: ', manejarOpcionSucursal);
}

function manejarOpcionSucursal(opcion: string) {
    switch (opcion) {
        case '1':
            menuClientes();
            break;
        case '2':
            menuPacientes();
            break;
        case '3':
            veterinariaActual = null;
            mostrarMenuPrincipal();
            break;
        case '4':
            console.log('¡Gracias por usar el sistema!');
            rl.close();
            break;
        default:
            console.log('Opción inválida. Intente de nuevo.');
            menuSucursal();
            break;
    }
}

function menuClientes() {
    if (!veterinariaActual) return;

    console.log(`
    ****** MENU CLIENTES ******
    1. Listar
    2. Agregar
    3. Modificar
    4. Eliminar
    5. Registrar Visita
    6. Atras
    7. Salir
    ***************************
    `);
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                console.log('*** Clientes ***');
                veterinariaActual.listarClientes();
                menuClientes();
                break;
            case '2':
                rl.question('Ingrese el nombre del cliente: ', (nombre) => {
                    rl.question('Ingrese el teléfono del cliente: ', (telefono) => {
                        veterinariaActual.agregarCliente(nombre, Number(telefono));
                        menuClientes();
                    });
                });
                break;
            case '3':
                rl.question('Ingrese el nombre del cliente a modificar: ', (nombre) => {
                    rl.question('Ingrese el nuevo teléfono: ', (telefono) => {
                        veterinariaActual.modificarCliente(nombre, Number(telefono));
                        menuClientes();
                    });
                });
                break;
            case '4':
                rl.question('Ingrese el nombre del cliente a eliminar: ', (nombre) => {
                    rl.question('Ingrese el teléfono del cliente: ', (telefono) => {
                        veterinariaActual.eliminarCliente(nombre, Number(telefono));
                        menuClientes();
                    });
                });
                break;
            case '5':
                console.log('Funcionalidad "Registrar Visita" no implementada aún.');
                menuClientes();
                break;
            case '6':
                menuSucursal();
                break;
            case '7':
                console.log('¡Gracias por usar el sistema!');
                rl.close();
                break;
            default:
                console.log('Opción inválida. Intente de nuevo.');
                menuClientes();
                break;
        }
    });
}

function menuPacientes() {
    if (!veterinariaActual) return;

    console.log(`
    ****** MENU PACIENTES ******
    1. Listar
    2. Agregar
    3. Modificar
    4. Eliminar
    5. Atras
    6. Salir
    ****************************
    `);
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            case '1':
                console.log('*** Pacientes ***');
                veterinariaActual.listarPacientes();
                menuPacientes();
                break;
            case '2':
                rl.question('Ingrese el nombre del paciente: ', (nombre) => {
                    rl.question('Ingrese la especie del paciente: ', (especie) => {
                        rl.question('Ingrese el ID del dueño: ', (idDueño) => {
                            veterinariaActual.agregarPaciente(nombre, especie, Number(idDueño));
                            menuPacientes();
                        });
                    });
                });
                break;
            case '3':
                rl.question('Ingrese el nombre del paciente a modificar: ', (nombre) => {
                    rl.question('Ingrese la nueva especie: ', (especie) => {
                        veterinariaActual.modificarPaciente(nombre, especie);
                        menuPacientes();
                    });
                });
                break;
            case '4':
                rl.question('Ingrese el nombre del paciente a eliminar: ', (nombre) => {
                    rl.question('Ingrese la especie del paciente: ', (especie) => {
                        veterinariaActual.eliminarPaciente(nombre, especie);
                        menuPacientes();
                    });
                });
                break;
            case '5':
                menuSucursal();
                break;
            case '6':
                console.log('¡Gracias por usar el sistema!');
                rl.close();
                break;
            default:
                console.log('Opción inválida. Intente de nuevo.');
                menuPacientes();
                break;
        }
    });
}

function menuRed() {
    console.log(`
    ****** MENU RED ******
    1. Proveedores
    2. Sucursales
    3. Ver Clientes
    4. Ver Pacientes
    5. Atras
    6. Salir
    **********************
    `);
    rl.question('Seleccione una opción: ', manejarOpcionRed);
}

function manejarOpcionRed(opcion: string) {
    switch (opcion) {
        case '1':
            menuProveedores();
            break;
        case '2':
            menuSucursales();
            break;
        case '3':
            console.log('*** Clientes ***');
            console.table(sistemaRed.getClientes());
            menuRed();
            break;
        case '4':
            console.log('*** Pacientes ***');
            console.table(sistemaRed.getPacientes());
            menuRed();
            break;
        case '5':
            mostrarMenuPrincipal();
            break;
        case '6':
            console.log('¡Gracias por usar el sistema!');
            rl.close();
            break;
        default:
            console.log('Opción inválida. Intente de nuevo.');
            menuRed();
            break;
    }
}

function menuProveedores() {
    console.log(`
    *** MENU PROVEEDORES ***
    1. Listar
    2. Agregar
    3. Modificar
    4. Eliminar
    5. Atras
    ***********************
    `);
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            default:
                console.log('Opción no implementada.');
                menuProveedores();
        }
    });
}

function menuSucursales() {
    console.log(`
    *** MENU SUCURSALES ***
    1. Listar
    2. Agregar
    3. Modificar
    4. Eliminar
    5. Atras
    ***********************
    `);
    rl.question('Seleccione una opción: ', (opcion) => {
        switch (opcion) {
            default:
                console.log('Opción no implementada.');
                menuSucursales();
        }
    });
}



mostrarMenuPrincipal();
*/ 
