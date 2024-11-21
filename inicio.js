"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarSucursales = generarSucursales;
var utils_1 = require("./Clases/utils");
var url_cliente = '../bbdd/clientes.txt';
var url_pacientes = '../bbdd/pacientes.txt';
var url_proveedores = '../bbdd/proveedores.txt';
var url_sucursales = './bbdd/sucursales.txt';
function generarSucursales(redDeVeterinaria) {
    var sucursalesJASON = (0, utils_1.leerTXT)(url_sucursales);
    for (var i = 0; i < sucursalesJASON.length; i++) {
        var nombre = sucursalesJASON[i].Nombre;
        var direccion = sucursalesJASON[i].Direccion;
        redDeVeterinaria.agregarVeterinaria(nombre, direccion);
    }
}
