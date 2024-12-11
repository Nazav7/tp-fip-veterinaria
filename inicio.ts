import { Veterinaria } from './Veterinaria';
import { leerTXT } from './Clases/utils';
import { RedDeVeterinarias } from './RedDeVeterinarias';

const url_cliente = './bbdd/clientes.txt';
const url_pacientes = './bbdd/pacientes.txt';
const url_proveedores = './bbdd/proveedores.txt';
const url_sucursales = './bbdd/sucursales.txt';


export function generarSucursales(redDeVeterinaria: RedDeVeterinarias) {
    const sucursalesJASON = leerTXT(url_sucursales);
    for (let i = 0; i < sucursalesJASON.length; i++) {
        const nombre = sucursalesJASON[i].Nombre;
        const direccion = sucursalesJASON[i].Direccion;
        redDeVeterinaria.agregarVeterinariaInicio(nombre, direccion);
    }
}


export function cargarProveedores(redDeVeterinaria: RedDeVeterinarias) {
    const proveedoresJASON = leerTXT(url_proveedores);
    for (let i = 0; i < proveedoresJASON.length; i++) {
        const nombre = proveedoresJASON[i].Nombre;
        const telefono = proveedoresJASON[i].Telefono;
        redDeVeterinaria.agregarProveedorInicio(nombre, telefono);
    }
}

export function cargarClientes(veterinaria: Veterinaria) {
    const clientesJASON = leerTXT(url_cliente);
    for (let i = 0; i < clientesJASON.length; i++) {
        const id = Number(clientesJASON[i].ID);
        const nombre = clientesJASON[i].Nombre;
        const telefono = clientesJASON[i].Telefono;
        veterinaria.agregarClienteInicio(id, nombre, telefono);
    }
}

export function cargarPacientes(veterinaria: Veterinaria) {
    const pacientesJASON = leerTXT(url_pacientes);
    for (let i = 0; i < pacientesJASON.length; i++) {
        const nombre = pacientesJASON[i].Nombre;
        const especie = pacientesJASON[i].Raza;
        const id_cliente = Number(pacientesJASON[i].IDcliente);
        veterinaria.agregarPacienteInicio(nombre, especie, id_cliente)
    }
}


// export function cargarProveedores(redDeVeterinaria: RedDeVeterinarias){
//     const proveedoresJASON = leerTXT(url_proveedores);
// for(let i=0; i < proveedoresJASON.length; i++){
//     const id = Number(proveedoresJASON[i].ID);
//     const nombre = proveedoresJASON[i].Nombre;
//     const telefono = proveedoresJASON[i].Telefono;
//     redDeVeterinaria.agregarProveedorInicio(id, nombre, telefono);
// }
// }

// export function cargarClientes(veterinaria){
//     const clientesJASON = leerTXT(url_cliente);
//     for(let i=0; i < clientesJASON.length; i++){
//         const nombre = clientesJASON[i].Nombre;
//         const telefono = clientesJASON[i].Telefono;
//         veterinaria.agregarClienteInicio(nombre, telefono);
//     }

// }
// export function generarSucursales(redDeVeterinaria: RedDeVeterinarias){
//     const sucursalesJASON = leerTXT(url_sucursales);
//     for(let i=0; i < sucursalesJASON.length; i++){
//         const id = Number(sucursalesJASON[i].ID);
//         const nombre = sucursalesJASON[i].Nombre;
//         const direccion = sucursalesJASON[i].Direccion;
//         redDeVeterinaria.agregarVeterinariaInicio(id, nombre, direccion);
//     }
//     }