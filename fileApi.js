// importo la libreria de file system
const fs = require('fs');
const path = require('path');

// metodo determina si la ruta es absolute o relative
let isAbsolutePath = path.isAbsolute('test/md-links.spec.js');
console.log(isAbsolutePath);

//metodo que convierte ruta relativa a absoluta
const nowPathAbsolute = path.resolve('test/md-links.spec.js');
console.log(nowPathAbsolute);

// Condicional si la ruta no es absoluta
if (isAbsolutePath == false){
    nowPathAbsolute
    console.log(nowPathAbsolute);
};

// metodo de fs que lista los archivos y carpetasd de un directorio
fs.readdir ('', (error, archivos) => {
    archivos.forEach((archivo) => {
        if (!error){
            console.log(archivo);
        } else {
            console.log(`No funciona: ${error}`);
        }
    })
});

// metodo que nos devuelve la extensión de un archivo
const extension = path.extname('README.md');
console.log(extension);

// Permite leer un archivo, convertirlo en caracteres especifico => texto que se puede leer (utf-8)
// fs.readFile('data1.txt', 'utf-8', (error, data) => {
//     if (!error) {
//         console.log(data);
//     } else {
//         console.log(`Error: ${error}`);
//     }
// });

