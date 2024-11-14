import * as fs from 'fs';

// Definimos un tipo para los posibles tipos de archivos
type TipoArchivo = 'proveedores' | 'pacientes' | 'clientes' | 'sucursales';

// Función para leer un archivo txt y convertirlo a JSON
function leerTXT(ruta: string, tipoArchivo: TipoArchivo): any[] {
  try {
    const archivoTexto = fs.readFileSync(ruta, 'utf8'); // Lee el archivo como texto
    const lineas = archivoTexto.trim().split('\n'); // Divide el texto en líneas
    
    // Dependiendo del tipo de archivo, procesamos de manera distinta
    switch (tipoArchivo) {
      case 'proveedores':
        return lineas.map(linea => {
          const [id, nombre, telefono] = linea.split(',');
          return {
            ID: id.trim(),
            Nombre: nombre.trim(),
            Telefono: telefono.trim()
          };
        });

      case 'pacientes':
        return lineas.map(linea => {
          const [id, nombre, raza, idCliente] = linea.split(',');
          return {
            ID: id.trim(),
            Nombre: nombre.trim(),
            Raza: raza.trim(),
            IDcliente: idCliente.trim()
          };
        });

      case 'clientes':
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

      case 'sucursales':
        return lineas.map(linea => {
          const [id, nombre, direccion] = linea.split(',');
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
  } catch (error) {
    console.error("Error al leer el archivo:", error); // Control de errores
    return [];
  }
}

// Ejemplo de uso
const proveedores = leerTXT('../bbdd/proveedores.txt', 'proveedores');
const pacientes = leerTXT('../bbdd/pacientes.txt', 'pacientes');
const clientes = leerTXT('../bbdd/clientes.txt', 'clientes');
const sucursales = leerTXT('../bbdd/sucursales.txt', 'sucursales');

// Muestra los datos convertidos en JSON
console.log(proveedores);
console.log(pacientes);
console.log(clientes);
console.log(sucursales);
