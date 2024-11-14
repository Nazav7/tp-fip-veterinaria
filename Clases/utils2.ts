import * as fs from 'fs';

function leerTXT(ruta:string):any []{
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

let clientes = leerTXT('../bbdd/clientes.txt');
console.log(clientes);
let pacientes = leerTXT('../bbdd/pacientes.txt');
console.log(clientes);
let proveedores = leerTXT('../bbdd/proveedores.txt');
console.log(clientes);
let sucursales = leerTXT('../bbdd/sucursales.txt');
console.log(clientes);
