import * as readline from 'readline';
import { RedDeVeterinarias } from './RedDeVeterinarias';
import { Veterinaria } from "./Veterinaria";
import { Cliente } from "./Cliente";
import { Paciente } from "./Paciente";
import { Proveedor } from "./Proveedor";
import { leerTXT } from './Clases/utils';
import { cargarClientes, cargarPacientes, generarSucursales } from './inicio';



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sistemaRed = new RedDeVeterinarias(); // para la red de veterinarias

let veterinariaActual: Veterinaria | null = null; // para manejar la veterinaria seleccionada

sistemaRed.getVeterinaria().forEach(v => {
    cargarClientes(v)
    cargarPacientes(v)
});

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
    const veterinariasListadas = sistemaRed.getVeterinaria();
    console.table(veterinariasListadas);
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
                const listaClientes = veterinariaActual?.getClientes();
                console.table(listaClientes)
                menuClientes();
                break;
            case '2':
                agregarCliente()
                break;
            case '3':
                modificarCliente()
                break;

            case '4':
                rl.question('Ingrese el ID del cliente a eliminar: ', (id) => {
                    veterinariaActual?.eliminarCliente(parseInt(id));
                    menuClientes();
                })
                break;
            case '5':
                rl.question('Indique ID del cliente para registrar la visita: ', (id) => {
                    veterinariaActual?.registrarVisita(parseInt(id));
                    menuClientes();
                })
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

function agregarCliente() {
    rl.question('Ingrese el nombre del cliente: ', (nombre) => {
        if (!isNaN(parseInt(nombre))) {
            console.log("El nombre no puede contener numeros. Volver a intentar");
            agregarCliente()
        } else {
            rl.question('Ingrese el telefono del cliente: ', (telefono) => {
                veterinariaActual?.agregarCliente(nombre, String(telefono));
                menuClientes();
            });
        }
    });
}

function modificarCliente() {
    rl.question('ingrese el ID del cliente a modificar: ', (id) => {
        rl.question('ingrese el nuevo nombre del cliente: ', (nuevoNombre) => {
            if (!isNaN(parseInt(nuevoNombre))) {
                console.log("El nombre no puede contener numeros. Volver a intentar");
                modificarCliente()
            } else {
                rl.question('ingrese el nuevo telefono del cliente: ', (nuevoTelefono) => {
                    veterinariaActual?.modificarCliente(Number(id), nuevoNombre, String(nuevoTelefono));
                    menuClientes();
                });
            }
        });
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
        if (veterinariaActual) {
            switch (opcion) {
                case '1':
                    console.log('*** Pacientes ***');
                    const listaPacientes = veterinariaActual.getPacientes();
                    console.table(listaPacientes);
                    menuPacientes()
                    break;
                case '2':
                    rl.question('Ingrese el nombre del paciente: ', (nombre) => {
                        rl.question('Ingrese la especie del paciente: ', (especie) => {
                            rl.question('Ingrese el ID del dueño: ', (idDueño) => {
                                veterinariaActual?.agregarPaciente(nombre, especie, parseInt(idDueño));
                                menuPacientes();
                            });
                        });
                    });
                    break;
                case '3':
                    rl.question('ingrese el ID del paciente a modificar: ', (id) => {
                        rl.question('ingrese el nuevo nombre del paciente: ', (nuevoNombre) => {
                            rl.question('ingrese el nueva especie del paciente: ', (nuevaEspecie) => {
                                veterinariaActual?.modificarPaciente(Number(id), nuevoNombre, nuevaEspecie);
                                menuPacientes();
                            });
                        });
                    });
                    break;
                case '4':
                    rl.question('Ingrese el ID del paciente a eliminar: ', (id) => {
                        veterinariaActual?.eliminarPaciente(parseInt(id));
                        menuPacientes();
                    })
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
        }

    }

    );
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
            sistemaRed.listarClientes();
            menuRed();
            break;
        case '4':
            console.log('*** Pacientes ***');
            sistemaRed.listarPacientes();
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
    const proveedores = sistemaRed.getProveedor();
    console.table(proveedores);
    menuProveedores();
}

function agregarProveedor() {
    rl.question('Ingrese el nombre del proveedor: ', (nombre) => {
        if (!isNaN(parseInt(nombre))) {
            console.log("El nombre no puede contener numeros. Volver a intentar");
            agregarProveedor()
        }else{
        rl.question('Ingrese el teléfono del proveedor: ', (telefono) => {
            sistemaRed.agregarProveedor(nombre, String(telefono));
            menuProveedores();
        });
        }
    });
}

function modificarProveedor() {
    rl.question('Ingrese el ID del proveedor a modificar: ', (id) => {
        rl.question('Ingrese el nuevo nombre del proveedor: ', (nuevoNombre) => {
            if (!isNaN(parseInt(nuevoNombre))) {
                console.log("El nombre no puede contener numeros. Volver a intentar");
                modificarProveedor()
            }else{
            rl.question('Ingrese el nuevo teléfono del proveedor: ', (nuevoTelefono) => {
                sistemaRed.modificarProveedor(Number(id), nuevoNombre, String(nuevoTelefono));
                menuProveedores();
            });
        }
        });
    });
}

function eliminarProveedor() {
    rl.question('Ingrese el ID del proveedor a eliminar: ', (id) => {
        sistemaRed.eliminarProveedor(Number(id));
        menuProveedores();
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
    const sucursales = sistemaRed.getVeterinaria();
    console.table(sucursales);
    menuSucursales();
}

function agregarSucursal() {
    rl.question('Ingrese el nombre de la nueva sucursal: ', (nombre) => {
        rl.question('Ingrese la dirección de la sucursal: ', (direccion) => {
            sistemaRed.agregarVeterinaria(nombre, direccion);
            menuSucursales();
        });
    });
}

function modificarSucursal() {
    rl.question('Ingrese el ID de la sucursal a modificar: ', (id) => {
        rl.question('Ingrese el nuevo nombre de la sucursal: ', (nuevoNombre) => {
            rl.question('Ingrese la nueva dirección de la sucursal: ', (nuevaDireccion) => {
                sistemaRed.modificarVeterinaria(Number(id), nuevoNombre, nuevaDireccion);
                menuSucursales();
            });
        });
    });
}

function eliminarSucursal() {
    rl.question('Ingrese el ID de la sucursal a eliminar: ', (id) => {
        sistemaRed.eliminarVeterinaria(Number(id));
        menuSucursales();
    });
}

mostrarMenuPrincipal();
