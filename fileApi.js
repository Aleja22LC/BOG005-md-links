// to do:
// verificación de ruta => fs.existsSync
// Verificar ruta absoluta => path.isAbsolute
// y si no convertirla a absoluta => path.resolve



// importo la libreria de file system
const fs = require('fs');
const path = require('path');

// Metodo fs para verificar si la ruta existe
if(fs.existsSync("./archivo")){
    console.log("El archivo EXISTE!");
    }else{
    console.log("El archivo NO EXISTE!");
    }

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

/*****************EJEMPLO DE FUNCIÓN****************************/
// function pathAbsolute(route){
//     let isAbsolutePath = path.isAbsolute(route)
//     if(isAbsolutePath == false){
//         const nowPathAbsolute = path.resolve(route); 
//          console.log(nowPathAbsolute);
//      }
// }
// pathAbsolute('test/md-links.spec.js')

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

