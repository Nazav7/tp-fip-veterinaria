import * as fs from 'fs'

const proveedoresBBDD = fs.readdirSync('./bbdd/proveedores.txt', "utf8");

/*export default class GestorDeArchivos {

    private arregloString: string[];

    constructor(txtFileLocation: string) {
        
        let archivoTxt: string = fs.readFileSync(txtFileLocation, 'utf-8'); 
        this.arregloString = archivoTxt.split(';');  
    
    }

    public mostrarArreglo(): void {
        console.log(this.arregloString);
    }

    public getArregloString(): string[] {
        return this.arregloString;
    }

}
 */




/*
import * as fs from 'fs';

const bbdd= fs.readFileSync('./bbdd.txt', "utf8");

console.log(bbdd)

const datosProductos: string= fs.readFileSync('./bbdd.txt', 'utf-8');
const productosSinEspacios: string = datosProductos.trim();
const productosArray: string[] = productosSinEspacios.split("|"); 
console.log(productosArray);

const productosJSON: any[] =[];

for (let i:number=0; i < productosArray.length; i++){
    const productosPorLinea: string[] = productosArray[i].split(",");
    const nombre = productosPorLinea[0];
    const precio = productosPorLinea[1];
    const stock = productosPorLinea[2];
    const categoria = productosPorLinea[3]

    const producto={
        nombre: nombre,
        precio: precio,
        stock: stock,
        categoria: categoria
    }

    productosJSON.push(producto);

    }
const pepito=JSON.stringify(productosJSON, null, 2);

console.log(pepito); */