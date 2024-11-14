"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var proveedores = leerTXT('./bbdd/proveedores.txt');
function leerTXT(ruta) {
    try {
        var archivoTexto = fs.readFileSync(ruta, 'utf8');
        var lineas = archivoTexto.trim().split('\n');
        var proveedoresJSON = lineas.map(function (linea) {
            var _a = linea.split(','), id = _a[0], nombre = _a[1], telefono = _a[2];
            return {
                ID: id.trim(),
                Nombre: nombre.trim(),
                Telefono: telefono.trim()
            };
        });
        return proveedoresJSON;
    }
    catch (error) {
        console.error("Error al leer el archivo:", error);
        return [];
    }
}
console.log(proveedores);
console.log(proveedores[1].Nombre);
