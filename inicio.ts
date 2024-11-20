import { Veterinaria } from './Veterinaria';
import { leerTXT } from './Clases/utils';
import { RedDeVeterinarias } from './RedDeVeterinarias';

const url_cliente = '../bbdd/clientes.txt';
const url_pacientes = '../bbdd/pacientes.txt';
const url_proveedores = '../bbdd/proveedores.txt';
const url_sucursales = './bbdd/sucursales.txt';


export function generarSucursales(redDeVeterinaria){
const sucursalesJASON = leerTXT(url_sucursales);


for(let i=0; i < sucursalesJASON.length; i++){
    const nombre = sucursalesJASON[i].Nombre;
    const direccion = sucursalesJASON[i].Direccion;
    redDeVeterinaria. agregarVeterinaria(nombre, direccion);
}

}
