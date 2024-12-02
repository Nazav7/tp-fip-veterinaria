"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargarPacientes = exports.cargarClientes = exports.cargarProveedores = exports.generarSucursales = void 0;
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
        redDeVeterinaria.agregarVeterinaria(nombre, direccion);
    }
}
exports.generarSucursales = generarSucursales;
function cargarProveedores(redDeVeterinaria) {
    console.log("Cargando proveedores");
    var proveedoresJASON = (0, utils_1.leerTXT)(url_proveedores);
    console.log('proveedores: '
        + proveedoresJASON);
    for (var i = 0; i < proveedoresJASON.length; i++) {
        var nombre = proveedoresJASON[i].Nombre;
        var telefono = proveedoresJASON[i].Telefono;
        redDeVeterinaria.agregarProveedor(nombre, telefono);
    }
}
exports.cargarProveedores = cargarProveedores;
function cargarClientes(veterinaria) {
    var clientesJASON = (0, utils_1.leerTXT)(url_cliente);
    for (var i = 0; i < clientesJASON.length; i++) {
        var nombre = clientesJASON[i].Nombre;
        var telefono = clientesJASON[i].Telefono;
        veterinaria.agregarCliente(nombre, telefono);
    }
}
exports.cargarClientes = cargarClientes;
function cargarPacientes(veterinaria) {
    var pacientesJASON = (0, utils_1.leerTXT)(url_pacientes);
    for (var i = 0; i < pacientesJASON.length; i++) {
        var nombre = pacientesJASON[i].Nombre;
        var especie = pacientesJASON[i].Raza;
        var id_cliente = pacientesJASON[i].IDcliente;
        veterinaria.agregarPaciente(nombre, especie, id_cliente);
    }
}
exports.cargarPacientes = cargarPacientes;
