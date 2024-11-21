"use strict";
/*


import * as readline from 'readline';
import { RedDeVeterinarias } from './RedDeVeterinarias';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistema = new RedDeVeterinarias();

function mostrarMenu() {
    console.log(`
    ********** MENU PRINCIPAL **********
    1. Listar veterinarias
    2. Agregar veterinaria
    3. Modificar veterinaria
    4. Eliminar veterinaria
    5. Listar proveedores
    6. Agregar proveedor
    7. Modificar proveedor
    8. Eliminar proveedor
    9. Salir
    *************************************
    `);
    rl.question('Seleccione una opción: ', manejarOpcion);
}

function manejarOpcion(opcion: string) {
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
    rl.question('Ingrese el nombre de la veterinaria: ', (nombre) => {
        rl.question('Ingrese la dirección de la veterinaria: ', (direccion) => {
            sistema.agregarVeterinaria(nombre, direccion);
            mostrarMenu();
        });
    });
}

function modificarVeterinaria() {
    rl.question('Ingrese el ID de la veterinaria a modificar: ', (id) => {
        rl.question('Ingrese el nuevo nombre de la veterinaria: ', (nuevoNombre) => {
            rl.question('Ingrese la nueva dirección de la veterinaria: ', (nuevaDireccion) => {
                sistema.modificarVeterinaria(Number(id), nuevoNombre, nuevaDireccion);
                mostrarMenu();
            });
        });
    });
}

function eliminarVeterinaria() {
    rl.question('Ingrese el nombre de la veterinaria a eliminar: ', (nombre) => {
        rl.question('Ingrese la dirección de la veterinaria a eliminar: ', (direccion) => {
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
    rl.question('Ingrese el nombre del proveedor: ', (nombre) => {
        rl.question('Ingrese el teléfono del proveedor: ', (telefono) => {
            sistema.agregarProveedor(nombre, Number(telefono));
            mostrarMenu();
        });
    });
}

function modificarProveedor() {
    rl.question('Ingrese el ID del proveedor a modificar: ', (id) => {
        rl.question('Ingrese el nuevo nombre del proveedor: ', (nuevoNombre) => {
            rl.question('Ingrese el nuevo teléfono del proveedor: ', (nuevoTelefono) => {
                sistema.modificarProveedor(Number(id), nuevoNombre, Number(nuevoTelefono));
                mostrarMenu();
            });
        });
    });
}

function eliminarProveedor() {
    rl.question('Ingrese el nombre del proveedor a eliminar: ', (nombre) => {
        rl.question('Ingrese el teléfono del proveedor a eliminar: ', (telefono) => {
            sistema.eliminarProveedor(nombre, Number(telefono));
            mostrarMenu();
        });
    });
}




mostrarMenu();



*/
//++++++++++++++++++++++++++  OPCION 2  +++++++++++++++++++++++++++
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var RedDeVeterinarias_1 = require("./RedDeVeterinarias");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sistemaRed = new RedDeVeterinarias_1.RedDeVeterinarias(); // para la red de veterinarias
var veterinariaActual = null; // para manejar la veterinaria seleccionada
function mostrarMenuPrincipal() {
    console.log("\n    ********** MENU PRINCIPAL **********\n    1. Soy Sucursal\n    2. Soy Red\n    3. Salir\n    *************************************\n    ");
    rl.question('Seleccione una opción: ', manejarOpcionPrincipal);
}
function manejarOpcionPrincipal(opcion) {
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
    rl.question('Ingrese el ID de la sucursal o escriba "atras" para volver: ', function (id) {
        if (id.toLowerCase() === 'atras') {
            mostrarMenuPrincipal();
        }
        else {
            var sucursal = sistemaRed.getVeterinaria().find(function (v) { return v.getId() === Number(id); });
            if (sucursal) {
                veterinariaActual = sucursal;
                menuSucursal();
            }
            else {
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
    console.log("\n    ********** MENU SUCURSAL **********\n    1. Clientes\n    2. Pacientes\n    3. Atras\n    4. Salir\n    ***********************************\n    ");
    rl.question('Seleccione una opción: ', manejarOpcionSucursal);
}
function manejarOpcionSucursal(opcion) {
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
    if (!veterinariaActual)
        return;
    console.log("\n    ****** MENU CLIENTES ******\n    1. Listar\n    2. Agregar\n    3. Modificar\n    4. Eliminar\n    5. Registrar Visita\n    6. Atras\n    7. Salir\n    ***************************\n    ");
    rl.question('Seleccione una opción: ', function (opcion) {
        switch (opcion) {
            case '1':
                console.log('*** Clientes ***');
                veterinariaActual.listarClientes();
                menuClientes();
                break;
            case '2':
                rl.question('Ingrese el nombre del cliente: ', function (nombre) {
                    rl.question('Ingrese el teléfono del cliente: ', function (telefono) {
                        veterinariaActual.agregarCliente(nombre, Number(telefono));
                        menuClientes();
                    });
                });
                break;
            case '3':
                rl.question('Ingrese el nombre del cliente a modificar: ', function (nombre) {
                    rl.question('Ingrese el nuevo teléfono: ', function (telefono) {
                        veterinariaActual.modificarCliente(nombre, Number(telefono));
                        menuClientes();
                    });
                });
                break;
            case '4':
                rl.question('Ingrese el nombre del cliente a eliminar: ', function (nombre) {
                    rl.question('Ingrese el teléfono del cliente: ', function (telefono) {
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
    if (!veterinariaActual)
        return;
    console.log("\n    ****** MENU PACIENTES ******\n    1. Listar\n    2. Agregar\n    3. Modificar\n    4. Eliminar\n    5. Atras\n    6. Salir\n    ****************************\n    ");
    rl.question('Seleccione una opción: ', function (opcion) {
        switch (opcion) {
            case '1':
                console.log('*** Pacientes ***');
                veterinariaActual.listarPacientes();
                menuPacientes();
                break;
            case '2':
                rl.question('Ingrese el nombre del paciente: ', function (nombre) {
                    rl.question('Ingrese la especie del paciente: ', function (especie) {
                        rl.question('Ingrese el ID del dueño: ', function (idDueño) {
                            veterinariaActual.agregarPaciente(nombre, especie, Number(idDueño));
                            menuPacientes();
                        });
                    });
                });
                break;
            case '3':
                rl.question('Ingrese el nombre del paciente a modificar: ', function (nombre) {
                    rl.question('Ingrese la nueva especie: ', function (especie) {
                        veterinariaActual.modificarPaciente(nombre, especie);
                        menuPacientes();
                    });
                });
                break;
            case '4':
                rl.question('Ingrese el nombre del paciente a eliminar: ', function (nombre) {
                    rl.question('Ingrese la especie del paciente: ', function (especie) {
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
    console.log("\n    ****** MENU RED ******\n    1. Proveedores\n    2. Sucursales\n    3. Ver Clientes\n    4. Ver Pacientes\n    5. Atras\n    6. Salir\n    **********************\n    ");
    rl.question('Seleccione una opción: ', manejarOpcionRed);
}
function manejarOpcionRed(opcion) {
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
    console.log("\n    *** MENU PROVEEDORES ***\n    1. Listar\n    2. Agregar\n    3. Modificar\n    4. Eliminar\n    5. Atras\n    ***********************\n    ");
    rl.question('Seleccione una opción: ', function (opcion) {
        switch (opcion) {
            case '1':
                listarProveedores();
                break;
            case '2':
                agregarProveedor();
                break;
            case '3':
                modificarProveedor();
                break;
            case '4':
                eliminarProveedor();
                break;
            case '5':
                menuRed();
                break;
            default:
                console.log('Opción inválida. Intente de nuevo.');
                menuProveedores();
                break;
        }
    });
}
function listarProveedores() {
    console.log('*** Listado de Proveedores ***');
    var proveedores = sistemaRed.getProveedor();
    console.table(proveedores);
    menuProveedores();
}
function agregarProveedor() {
    rl.question('Ingrese el nombre del proveedor: ', function (nombre) {
        rl.question('Ingrese el teléfono del proveedor: ', function (telefono) {
            sistemaRed.agregarProveedor(nombre, Number(telefono));
            console.log('Proveedor agregado exitosamente.');
            menuProveedores();
        });
    });
}
function modificarProveedor() {
    rl.question('Ingrese el ID del proveedor a modificar: ', function (id) {
        rl.question('Ingrese el nuevo nombre del proveedor: ', function (nuevoNombre) {
            rl.question('Ingrese el nuevo teléfono del proveedor: ', function (nuevoTelefono) {
                sistemaRed.modificarProveedor(Number(id), nuevoNombre, Number(nuevoTelefono));
                console.log('Proveedor modificado exitosamente.');
                menuProveedores();
            });
        });
    });
}
function eliminarProveedor() {
    rl.question('Ingrese el ID del proveedor a eliminar: ', function (id) {
        sistemaRed.eliminarProveedor(Number(id));
        console.log('Proveedor eliminado exitosamente.');
        menuProveedores();
    });
}
function menuSucursales() {
    console.log("\n    *** MENU SUCURSALES ***\n    1. Listar\n    2. Agregar\n    3. Modificar\n    4. Eliminar\n    5. Atras\n    ***********************\n    ");
    rl.question('Seleccione una opción: ', function (opcion) {
        switch (opcion) {
            case '1':
                listarSucursales();
                break;
            case '2':
                agregarSucursal();
                break;
            case '3':
                modificarSucursal();
                break;
            case '4':
                eliminarSucursal();
                break;
            case '5':
                menuRed();
                break;
            default:
                console.log('Opción inválida. Intente de nuevo.');
                menuSucursales();
                break;
        }
    });
}
function listarSucursales() {
    console.log('*** Listado de Sucursales ***');
    var sucursales = sistemaRed.getVeterinaria();
    console.table(sucursales);
    menuSucursales();
}
function agregarSucursal() {
    rl.question('Ingrese el nombre de la nueva sucursal: ', function (nombre) {
        rl.question('Ingrese la dirección de la sucursal: ', function (direccion) {
            sistemaRed.agregarVeterinaria(nombre, direccion);
            console.log('Sucursal agregada exitosamente.');
            menuSucursales();
        });
    });
}
function modificarSucursal() {
    rl.question('Ingrese el ID de la sucursal a modificar: ', function (id) {
        rl.question('Ingrese el nuevo nombre de la sucursal: ', function (nuevoNombre) {
            rl.question('Ingrese la nueva dirección de la sucursal: ', function (nuevaDireccion) {
                sistemaRed.modificarVeterinaria(Number(id), nuevoNombre, nuevaDireccion);
                console.log('Sucursal modificada exitosamente.');
                menuSucursales();
            });
        });
    });
}
function eliminarSucursal() {
    rl.question('Ingrese el ID de la sucursal a eliminar: ', function (id) {
        sistemaRed.eliminarVeterinaria(Number(id));
        console.log('Sucursal eliminada exitosamente.');
        menuSucursales();
    });
}
mostrarMenuPrincipal();
