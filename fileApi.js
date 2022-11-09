// importo la libreria de file system, la de path
const fs = require('fs');
const path = require('path');

// ***************ROUTES OF EXAMPLE **********************
let route = './fileTest'; //route relative
//let route = 'C:/LAB/BOG005-md-links/fileTest'; //route absolute
//let route = 'data1.txt';
//let route = 'C:\\LAB\\BOG005-md-links\\fileTest\\proofBroken.md'; //route absolute
//let route = 'fileTest\\proof.md';
//************************************************* */

// verificar si la ruta existe con metodo de fs. existsSync 
// const existsPath = ('./fileTest') => 
// const exists = fs.existsSync(route);
// console.log(exists);

// if (exists === false) {
//     console.log('It does not exist');
// } else {
//     // metodo determina si la ruta es absolute o relative
//     let isAbsolutePath = path.isAbsolute(route);
//     //console.log('tipe of route: ', isAbsolutePath);
//     if (isAbsolutePath === true) {
//         console.log('The route is absolute: ', route);
//     } else {
//         //metodo que convierte ruta relativa a absoluta
//         let nowPathAbsolute = path.resolve(route);
//         route = nowPathAbsolute;
//         // console.log('new route: ',nowPathAbsolute);
//         console.log('Here new route', route);
//     }
// };

let arrayMarkFile = []; // Declaro variable que va a contener los archivos md
// Función recursiva que recorre las carpetas extrayendo los archivos .md
const readDirectory = (absolutePath) => {
	if (path.extname(absolutePath) === "") { // base case
	  // Si es un directorio...
	  let directory = []; // Declaro variable que va a contener los directorios
      console.log('Directorios: ', directory);
	  directory = fs.readdirSync(absolutePath); // Método que lista el contenido del directorio, guarda los objetos como array en la variable creada
	  directory.forEach((filesList) => {
		// forEach recorre el array recibido por directory, parámetro un string de la lista de archivos?
		filesList = path.join(absolutePath, filesList); // Método que crea un listado de string de los archivos.
		if (path.extname(filesList) === "") {
		  // Si la extensión es vacía, es un directorio y vuelve a correr la función readDirectory, comenzando de nuevo.
		  readDirectory(filesList);
		} else if (path.extname(filesList) === ".md") {
		  // si la extensión es .md guarda el elemento en la variable creada al inicio
		  arrayMarkFile.push(filesList);
		}
	  });
	} else if (path.extname(absolutePath) == ".md") {
	  arrayMarkFile.push(absolutePath);
	}
	return arrayMarkFile;
  };
  readDirectory(route);
//   console.log('Recursion:', readDirectory);
  console.log('Archivos md: ', arrayMarkFile);

// ***Metodo de fs que lee el contenido de un archivo de texto
fs.readFile(route, "utf-8", (error, data) => {
  if (!error) {
    console.log('leyendo texto:', data);
  } else {
    console.log(`Algo no funciona: ${error}`);
  }
});

// metodo que nos devuelve la extensión de un archivo
const extension = path.extname(route);
console.log('The extension is: ', extension);

// Permite leer un archivo, convertirlo en caracteres especifico => texto que se puede leer (utf-8)
const read = (route) => {
    console.log('Funtion read: ', route);
    // Valida si es directorio
    fs.stat(route, (err, stats) => {
        if (err) throw err;
        // console.log(`stats: ${JSON.stringify(stats)}`);
        if (stats.isDirectory()) {
            console.log("Prueba con ruta es un directorio");
        } else {
            fs.readFile(route, 'utf-8', (error, data) => {
                const expression = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
                //const expression = /[^!]\[.+?\]\(.+?\)/g;
                if (!error) {
                    console.log('Reading links: ', data.match(expression));
                    return data.match(expression)                    
                } else {
                    console.log(`Error: ${error}`);
                }
            }
            )
        }
    })
};
let arrayLinks = read(route)
// recorrar arraylinks
// Formar objeto
