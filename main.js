"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var RedDeVeterinarias_1 = require("./RedDeVeterinarias");
var inicio_1 = require("./inicio");
var redDeVeterinaria = new RedDeVeterinarias_1.RedDeVeterinarias();
(0, inicio_1.generarSucursales)(redDeVeterinaria);
redDeVeterinaria.listarVeterinarias();
//menuPrincipal()
/*

function menuPrincipal() {
    console.clear();
    console.log("BIENVENIDOS")
    console.log("-------------------------")
    console.log("1. Soy una Red de Veterinarias")
    console.log("2. Soy una sucursal")
    console.log("-------------------------")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opcion: ");

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
    console.clear();
    console.log("1. Proveedores")
    console.log("2. Sucursales")
    console.log("3. Ver clientes")
    console.log("4. Ver pacientes")
    console.log("-------------------------")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opcion: ");

    switch (opcion) {
        case 1:
            proveedores()
            break;
        case 2:
            console.log("\n");
            redDeVeterinaria.listarVeterinarias();
            break;
        case 3:
            console.log("\n");
            redDeVeterinaria.listarClientes;
            break;
        case 4:
            console.log("\n");
            redDeVeterinaria.listarPacientes;
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
    //Antes el usuario deberia ingresar su ID de veterinaria y se debe buscar su ID
    //let opcion: number = rls.questionInt("Ingrese su ID: ");
    console.clear();
    console.log("\n");
    console.log("1. Clientes")
    console.log("2. Pacientes")
    console.log("-------------------------")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opcion: ");

    switch (opcion) {
        case 1:
            clientes();
            break;
        case 2:
            pacientes();
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
}

function proveedores() {
    console.clear();
    console.log("\n");
    console.log("PROVEEDORES")
    console.log("-------------------------")
    redDeVeterinaria.listarProveedores();
    console.log("-------------------------")
    console.log("1. Agregar proveedor")
    console.log("2. Eliminar proveedor")
    console.log("3. Modificar proveedor")
    console.log("-------------------------")
    console.log("9. Atrás")
    console.log("0. Salir")
    console.log("\n");
    let opcion: number = rls.questionInt("Ingrese una opcion: ");

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
    console.clear();
    console.log("\n");
    console.log("SUCURSALES DE VETERINARIAS")
    console.log("-------------------------")
    redDeVeterinaria.listarVeterinarias();
    console.log("-------------------------")
    console.log("1. Agregar sucursal")
    console.log("2. Eliminar sucursal")
    console.log("3. Modificar sucursal")
    console.log("-------------------------")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre de la sucursal: ");
            const direccion1: string = rls.question("Ingrese la direccion de la sucursal: ");
            redDeVeterinaria.agregarVeterinaria(nombre1, direccion1)
            break;
        case 2:
            const nombre2: string = rls.question("Ingrese el nombre de la sucursal: ");
            const direccion2: string = rls.question("Ingrese la direccion de la sucursal: ");
            redDeVeterinaria.eliminarVeterinaria(nombre2, direccion2)
            break;
        case 3:
            const id3: number = rls.question("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese nuevo nombre ");
            const direccion3: string = rls.question("Ingrese nueva direccion: ");
            redDeVeterinaria.modificarVeterinaria(id3, nombre3, direccion3)
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

function clientes() {
    console.clear();
    console.log("\n");
    console.log("CLIENTES")
    console.log("-------------------------")
    redDeVeterinaria.listarClientes();
    console.log("-------------------------")
    console.log("1. Agregar cliente")
    console.log("2. Eliminar cliente")
    console.log("3. Modificar cliente")
    console.log("4. Registrar visita") //FALTA HACER ESTA, creo que hay que hacer registrar visita en Veterinaria, ahora esta en Cliente
    console.log("-------------------------")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opcion: ");

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre del cliente: ");
            const telefono1: number = rls.question("Ingrese el telefono del cliente: ");
            redDeVeterinaria.veterinarias.forEach(veterinaria => {
                veterinaria.agregarCliente(nombre1, telefono1);
            });

            break;
        case 2:
            const nombre2: string = rls.question("Ingrese el nombre del cliente: ");
            const telefono2: number = rls.question("Ingrese el telefono del cliente: ");
            redDeVeterinaria.veterinarias.forEach(veterinaria => {
                veterinaria.eliminarCliente(nombre1, telefono2);
            });
            break;
        case 3:
            const id3: number = rls.question("Ingrese ID: ");
            const nombre3: string = rls.question("Ingrese el nuevo nombre del cliente: ");
            const telefono3: number = rls.question("Ingrese el nuevo telefono del cliente: ");
            redDeVeterinaria.veterinarias.forEach(veterinaria => {
                veterinaria.modificarCliente(nombre1, telefono3);
            });
            break;
            case 4:
                const idClienteInput = rls.question("Ingrese ID de cliente: ");
                const id_cliente = parseInt(idClienteInput, 10);
                if (!isNaN(id_cliente) && id_cliente > 0) {
                    const clientes = leerTXT('./bbdd/clientes.txt');
                    const clienteEncontrado = clientes.find(cliente => parseInt(cliente.ID, 10) === id_cliente); // Busca por ID
                    if (clienteEncontrado) {
                        console.log("Se registra la visita del cliente");
                    } else {
                        console.log("El ID ingresado no corresponde a un cliente registrado.");
                    }
                } else {
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
            clientes()
    }
}

function pacientes() {
    console.clear();
    console.log("\n");
    console.log("PACIENTES")
    console.log("-------------------------")
    redDeVeterinaria.listarPacientes();
    console.log("-------------------------")
    console.log("1. Agregar pacientes")
    console.log("2. Eliminar pacientes")
    console.log("3. Modificar pacientes")
    console.log("-------------------------")
    console.log("9. Atrás")
    console.log("0. Salir")
    let opcion: number = rls.questionInt("Ingrese una opción: ");

    switch (opcion) {
        case 1:
            const nombre1: string = rls.question("Ingrese el nombre del paciente: ");
            const especie1: string = rls.question("Ingrese la especie del paciente: ");
            const id_duenio_1 : number = rls.question("Ingrese el ID del dueño del paciente: ");
            redDeVeterinaria.veterinarias.forEach(veterinaria => {
                veterinaria.agregarPaciente(nombre1, especie1, id_duenio_1);
            });
            break;
        case 2:
            const nombre2: string = rls.question("Ingrese el nombre del paciente: ");
            const especie2: string = rls.question("Ingrese la especie del paciente: ");
            redDeVeterinaria.veterinarias.forEach(veterinaria => {
                veterinaria.eliminarPaciente(nombre2, especie2);
            });
            break;
        case 3:
            const nombre3: string = rls.question("Ingrese el nombre del paciente: ");
            const especie3: string = rls.question("Ingrese la especie del paciente: ");
            redDeVeterinaria.veterinarias.forEach(veterinaria => {
                veterinaria.modificarPaciente(nombre3, especie3);
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
            clientes()
    }
}*/
//+++++++++++++++++++++++  OJO!  +++++++++++++++++//
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var sistemaRed = new RedDeVeterinarias_1.RedDeVeterinarias(); // para la red de veterinarias
(0, inicio_1.generarSucursales)(sistemaRed);
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
