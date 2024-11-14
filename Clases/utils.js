"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// Función para leer un archivo txt y convertirlo a JSON
function leerTXT(ruta, tipoArchivo) {
    try {
        var archivoTexto = fs.readFileSync(ruta, 'utf8'); // Lee el archivo como texto
        var lineas = archivoTexto.trim().split('\n'); // Divide el texto en líneas
        // Dependiendo del tipo de archivo, procesamos de manera distinta
        switch (tipoArchivo) {
            case 'proveedores':
                return lineas.map(function (linea) {
                    var _a = linea.split(','), id = _a[0], nombre = _a[1], telefono = _a[2];
                    return {
                        ID: id.trim(),
                        Nombre: nombre.trim(),
                        Telefono: telefono.trim()
                    };
                });
            case 'pacientes':
                return lineas.map(function (linea) {
                    var _a = linea.split(','), id = _a[0], nombre = _a[1], raza = _a[2], idCliente = _a[3];
                    return {
                        ID: id.trim(),
                        Nombre: nombre.trim(),
                        Raza: raza.trim(),
                        IDcliente: idCliente.trim()
                    };
                });
            case 'clientes':
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
            case 'sucursales':
                return lineas.map(function (linea) {
                    var _a = linea.split(','), id = _a[0], nombre = _a[1], direccion = _a[2];
                    return {
                        ID: id.trim(),
                        Nombre: nombre.trim(),
                        Direccion: direccion.trim()
                    };
                });
            default:
                console.error("Tipo de archivo desconocido");
                return [];
        }
    }
    catch (error) {
        console.error("Error al leer el archivo:", error); // Control de errores
        return [];
    }
}
// Ejemplo de uso
var proveedores = leerTXT('../bbdd/proveedores.txt', 'proveedores');
var pacientes = leerTXT('../bbdd/pacientes.txt', 'pacientes');
var clientes = leerTXT('../bbdd/clientes.txt', 'clientes');
var sucursales = leerTXT('../bbdd/sucursales.txt', 'sucursales');
// Muestra los datos convertidos en JSON
console.log(proveedores);
console.log(pacientes);
console.log(clientes);
console.log(sucursales);
