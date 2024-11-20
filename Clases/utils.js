"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.leerTXT = leerTXT;
exports.generarID = generarID;
const fs = __importStar(require("fs"));
const url_cliente = '../bbdd/clientes.txt';
const url_pacientes = '../bbdd/pacientes.txt';
const url_proveedores = '../bbdd/proveedores.txt';
const url_sucursales = '../bbdd/sucursales.txt';
function leerTXT(ruta) {
    try {
        const archivoTexto = fs.readFileSync(ruta, 'utf8');
        const lineas = archivoTexto.trim().split('\n');
        if (ruta.includes("clientes")) {
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
        else if (ruta.includes("pacientes")) {
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
        else if (ruta.includes("proveedores")) {
            return lineas.map(linea => {
                const [id, nombre, telefono] = linea.split(',');
                return {
                    ID: id.trim(),
                    Nombre: nombre.trim(),
                    Telefono: telefono.trim()
                };
            });
        }
        else if (ruta.includes("sucursales")) {
            return lineas.map(linea => {
                const [id, nombre, direccion] = linea.split(',');
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
function generarID(url) {
    let max_id = 0;
    const arreglo = leerTXT(url);
    for (const elemento of arreglo) {
        const id = parseInt(elemento.ID);
        if (id > max_id) {
            max_id = id;
        }
    }
    return max_id + 1;
}
