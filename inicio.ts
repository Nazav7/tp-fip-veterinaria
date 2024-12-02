import { Veterinaria } from './Veterinaria';
import { leerTXT } from './Clases/utils';
import { RedDeVeterinarias } from './RedDeVeterinarias';

const url_cliente = './bbdd/clientes.txt';
const url_pacientes = './bbdd/pacientes.txt';
const url_proveedores = './bbdd/proveedores.txt';
const url_sucursales = './bbdd/sucursales.txt';


export function generarSucursales(redDeVeterinaria){
const sucursalesJASON = leerTXT(url_sucursales);
for(let i=0; i < sucursalesJASON.length; i++){
    const nombre = sucursalesJASON[i].Nombre;
    const direccion = sucursalesJASON[i].Direccion;
    redDeVeterinaria.agregarVeterinaria(nombre, direccion);
}
}


export function cargarProveedores(redDeVeterinaria){
    console.log("Cargando proveedores");
    const proveedoresJASON = leerTXT(url_proveedores);
    console.log('proveedores: '
        +proveedoresJASON
    );
for(let i=0; i < proveedoresJASON.length; i++){
    const nombre = proveedoresJASON[i].Nombre;
    const telefono = proveedoresJASON[i].Telefono;
    redDeVeterinaria.agregarProveedor(nombre, telefono);
}
}

export function cargarClientes(veterinaria){
    const clientesJASON = leerTXT(url_cliente);
    for(let i=0; i < clientesJASON.length; i++){
        const nombre = clientesJASON[i].Nombre;
        const telefono = clientesJASON[i].Telefono;
        veterinaria.agregarCliente(nombre, telefono);
    }

}

export function cargarPacientes(veterinaria){
    const pacientesJASON = leerTXT(url_pacientes);
    for(let i=0; i < pacientesJASON.length; i++){
        const nombre = pacientesJASON[i].Nombre;
        const especie = pacientesJASON[i].Raza;
        const id_cliente = pacientesJASON[i].IDcliente;
        veterinaria.agregarPaciente(nombre, especie, id_cliente)
    }
}
