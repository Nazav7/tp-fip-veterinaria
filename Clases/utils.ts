import * as fs from 'fs';

///URLS///
const url_cliente = '../bbdd/clientes.txt';
const url_pacientes = '../bbdd/pacientes.txt';
const url_proveedores = '../bbdd/proveedores.txt';
const url_sucursales = '../bbdd/sucursales.txt';


//////////////////LEER ARCHIVO TXT COMO BASE DE DATOS Y CONVERTIRLO EN JASON////////////////////////
export function leerTXT(ruta:string):any []{
try{
    const archivoTexto = fs.readFileSync(ruta, 'utf8');
    const lineas = archivoTexto.trim().split('\n');
    if(ruta.includes("clientes")){
        return lineas.map(linea => {
            const [id, nombre, telefono, visitas, vip] = linea.split(',');
            return {
              ID: id.trim(),
              Nombre: nombre.trim(),
              Telefono: telefono.trim(),
              Visitas: parseInt(visitas.trim(), 10),
              VIP: vip.trim().toLowerCase() === 'true'
            };
          });
    }
    else if(ruta.includes("pacientes")){
        return lineas.map(linea => {
            const [id, nombre, raza, idCliente] = linea.split(',');
            return {
              ID: id.trim(),
              Nombre: nombre.trim(),
              Raza: raza.trim(),
              IDcliente: idCliente.trim()
            };
          });  
    }
    else if(ruta.includes("proveedores")){
        return lineas.map(linea => {
            const [id, nombre, telefono] = linea.split(',');
            return {
              ID: id.trim(),
              Nombre: nombre.trim(),
              Telefono: telefono.trim()
            };
          });
    }
    else if(ruta.includes("sucursales")){
        return lineas.map(linea => {
            const [id, nombre, direccion] = linea.split(',');
            return {
              ID: id.trim(),
              Nombre: nombre.trim(),
              Direccion: direccion.trim()
            };
          });
    }
    else{
        console.log("No se encuentra la base de datos");
        return [];
    }
}catch(error){
    console.log(error + "Error");
    return [];
}
    return [];
}

//TEST DE CODIGO//

/* 

let clientes = leerTXT(url_cliente);
console.log(clientes);
let pacientes = leerTXT(url_pacientes);
console.log(pacientes);
let proveedores = leerTXT(url_proveedores);
console.log(proveedores);
let sucursales = leerTXT(url_sucursales);
console.log(sucursales);

*/


///////////////////GENERAR ID AUTOMATICO////////////////////////////




/*
export function generarID(url){
  let max_id = 0;
  const arreglo = leerTXT(url);
        for(const elemento of arreglo){
          const id = parseInt(elemento.ID);
          if(id > max_id){
            max_id = id;
          }
          else{
            max_id = 1;
          }
        }
        return max_id + 1;
  }

//TEST DE CODIGO//


let id = generarID(url_cliente);
console.log(id);

*/