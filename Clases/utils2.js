"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
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
var clientes = leerTXT('../bbdd/clientes.txt');
console.log(clientes);
var pacientes = leerTXT('../bbdd/pacientes.txt');
console.log(clientes);
var proveedores = leerTXT('../bbdd/proveedores.txt');
console.log(clientes);
var sucursales = leerTXT('../bbdd/sucursales.txt');
console.log(clientes);
