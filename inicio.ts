import { Veterinaria } from './Veterinaria';
import { leerTXT } from './Clases/utils';
import { RedDeVeterinarias } from './RedDeVeterinarias';

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

export function cargarClientes(veterinaria: Veterinaria, url: string) {
    const clientesJASON = leerTXT(url);
    for (let i = 0; i < clientesJASON.length; i++) {
        const id = Number(clientesJASON[i].ID);
        const nombre = clientesJASON[i].Nombre;
        const telefono = clientesJASON[i].Telefono;
        veterinaria.agregarClienteInicio(id, nombre, telefono);
    }
}

export function cargarPacientes(veterinaria: Veterinaria, url: string) {
    const pacientesJASON = leerTXT(url);
    for (let i = 0; i < pacientesJASON.length; i++) {
        const nombre = pacientesJASON[i].Nombre;
        const especie = pacientesJASON[i].Raza;
        const id_cliente = Number(pacientesJASON[i].IDcliente);
        veterinaria.agregarPacienteInicio(nombre, especie, id_cliente)
    }
}