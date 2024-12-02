"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerTXT = void 0;
var fs = require("fs");
///URLS///
var url_cliente = './bbdd/clientes.txt';
var url_pacientes = './bbdd/pacientes.txt';
var url_proveedores = './bbdd/proveedores.txt';
var url_sucursales = './bbdd/sucursales.txt';
//////////////////LEER ARCHIVO TXT COMO BASE DE DATOS Y CONVERTIRLO EN JASON////////////////////////
function leerTXT(ruta) {
    try {
        var archivoTexto = fs.readFileSync(ruta, 'utf8');
        var lineas = archivoTexto.trim().split('\n');
        if (ruta.includes("clientes")) {
            return lineas.map(function (linea) {
                var _a = linea.split(','), id = _a[0], nombre = _a[1], telefono = _a[2], visitas = _a[3], vip = _a[4];
                return {
                    ID: id.trim(),
                    Nombre: nombre.trim(),
                    Telefono: telefono.trim(),
                    Visitas: parseInt(visitas.trim(), 10),
                    VIP: vip.trim().toLowerCase() === 'true'
                };
            });
        }
        else if (ruta.includes("pacientes")) {
            return lineas.map(function (linea) {
                var _a = linea.split(','), id = _a[0], nombre = _a[1], raza = _a[2], idCliente = _a[3];
                return {
                    ID: id.trim(),
                    Nombre: nombre.trim(),
                    Raza: raza.trim(),
                    IDcliente: idCliente.trim()
                };
            });
        }
        else if (ruta.includes("proveedores")) {
            return lineas.map(function (linea) {
                var _a = linea.split(','), id = _a[0], nombre = _a[1], telefono = _a[2];
                return {
                    ID: id.trim(),
                    Nombre: nombre.trim(),
                    Telefono: telefono.trim()
                };
            });
        }
        else if (ruta.includes("sucursales")) {
            return lineas.map(function (linea) {
                var _a = linea.split(','), id = _a[0], nombre = _a[1], direccion = _a[2];
                return {
                    ID: id.trim(),
                    Nombre: nombre.trim(),
                    Direccion: direccion.trim()
                };
            });
        }
        else {
            console.log("No se encuentra la base de datos");
            return [];
        }
    }
    catch (error) {
        console.log(error + "Error");
        return [];
    }
    return [];
}
exports.leerTXT = leerTXT;
//TEST DE CODIGO//
var pacientes = leerTXT(url_pacientes);
console.table(pacientes);
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
