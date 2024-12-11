"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generarSucursales = generarSucursales;
exports.cargarProveedores = cargarProveedores;
exports.cargarClientes = cargarClientes;
exports.cargarPacientes = cargarPacientes;
var utils_1 = require("./Clases/utils");
var url_cliente = './bbdd/clientes.txt';
var url_pacientes = './bbdd/pacientes.txt';
var url_proveedores = './bbdd/proveedores.txt';
var url_sucursales = './bbdd/sucursales.txt';
function generarSucursales(redDeVeterinaria) {
    var sucursalesJASON = (0, utils_1.leerTXT)(url_sucursales);
    for (var i = 0; i < sucursalesJASON.length; i++) {
        var nombre = sucursalesJASON[i].Nombre;
        var direccion = sucursalesJASON[i].Direccion;
        redDeVeterinaria.agregarVeterinariaInicio(nombre, direccion);
    }
}
function cargarProveedores(redDeVeterinaria) {
    var proveedoresJASON = (0, utils_1.leerTXT)(url_proveedores);
    for (var i = 0; i < proveedoresJASON.length; i++) {
        var nombre = proveedoresJASON[i].Nombre;
        var telefono = proveedoresJASON[i].Telefono;
        redDeVeterinaria.agregarProveedorInicio(nombre, telefono);
    }
}
function cargarClientes(veterinaria, url) {
    var clientesJASON = (0, utils_1.leerTXT)(url);
    for (var i = 0; i < clientesJASON.length; i++) {
        var id = Number(clientesJASON[i].ID);
        var nombre = clientesJASON[i].Nombre;
        var telefono = clientesJASON[i].Telefono;
        veterinaria.agregarClienteInicio(id, nombre, telefono);
    }
}
function cargarPacientes(veterinaria, url) {
    var pacientesJASON = (0, utils_1.leerTXT)(url);
    for (var i = 0; i < pacientesJASON.length; i++) {
        var nombre = pacientesJASON[i].Nombre;
        var especie = pacientesJASON[i].Raza;
        var id_cliente = Number(pacientesJASON[i].IDcliente);
        veterinaria.agregarPacienteInicio(nombre, especie, id_cliente);
    }
}
