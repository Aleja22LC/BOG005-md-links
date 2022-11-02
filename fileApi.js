// to do:
// verificar si la ruta existe => fs.existsSync
// Verificar si la ruta es absoluta => path.isAbsolute
// y si no convertirla a absoluta => path.resolve

// importo la libreria de file system
const fs = require('fs');
const path = require('path');

//let route = './fileTest';
let route = 'C:/LAB/BOG005-md-links/fileTest';

// verificar si la ruta existe con metodo de fs. existsSync 
// const existsPath = ('./fileTest') => 
const exists = fs.existsSync(route);
console.log(exists);

if (exists === false) {
    console.log('It does not exist');
} else {
    // metodo determina si la ruta es absolute o relative
    let isAbsolutePath = path.isAbsolute(route);
    //console.log('tipe of route: ', isAbsolutePath);
    if ( isAbsolutePath === true) {
        console.log('is absolute: ', route);
    } else {
        //metodo que convierte ruta relativa a absoluta
        let nowPathAbsolute = path.resolve(route);
        route = nowPathAbsolute;
       // console.log('new route: ',nowPathAbsolute);
        console.log('aqui ruta',route);
    }
    
};

/*****************EJEMPLO DE FUNCIÓN****************************/
// function pathAbsolute(route){
//     let isAbsolutePath = path.isAbsolute(route)
//     if(isAbsolutePath == false){
//         const nowPathAbsolute = path.resolve(route); 
//          console.log(nowPathAbsolute);
//      }
// }
// pathAbsolute(route)

// metodo de fs que lista los archivos y carpetas de un directorio => readdirsync? ***************
// fs.readdir ('', (error, archivos) => {
//     archivos.forEach((archivo) => {
//         if (!error){
//             console.log(archivo);
//         } else {
//             console.log(`No funciona: ${error}`);
//         }
//     })
// });

// metodo que nos devuelve la extensión de un archivo
const extension = path.extname('README.md');
console.log('aqui ext: ', extension);

// Permite leer un archivo, convertirlo en caracteres especifico => texto que se puede leer (utf-8)
// fs.readFile('data1.txt', 'utf-8', (error, data) => {
//     if (!error) {
//         console.log(data);
//     } else {
//         console.log(`Error: ${error}`);
//     }
// });

