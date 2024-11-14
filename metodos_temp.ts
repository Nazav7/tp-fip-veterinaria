import * as fs from 'fs';

const proveedores = leerTXT('./bbdd/proveedores.txt');

//FUNCION PARA LEER CUALQUIER TXT Y CONVERTIRLOS A JSON//
function leerTXT(ruta: string): any[] {
  try {
    const archivoTexto = fs.readFileSync(ruta, 'utf8');    
    const lineas = archivoTexto.trim().split('\n');
    
    const proveedoresJSON = lineas.map(linea => {
      const [id, nombre, telefono] = linea.split(',');
      return {
        ID: id.trim(),
        Nombre: nombre.trim(),
        Telefono: telefono.trim()
      };
    });
    
    return proveedoresJSON; 
  } catch (error) {
    console.error("Error al leer el archivo:", error); //Control de errores.
    return [];
  }
}

console.log(proveedores); //Impresion de consola para pruebas
console.log(proveedores[1].Nombre);  //Verificacion - Debug
