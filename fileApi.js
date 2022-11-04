// importo la libreria de file system
const fs = require('fs');
const path = require('path');
//const marked = require ('marked');

let route = './fileTest'; //route relative
//let route = 'C:/LAB/BOG005-md-links/fileTest'; //route absolute
//let route = 'data1.txt';
//let route = 'C:\\LAB\\BOG005-md-links\\fileTest\\proofBroken.md'; //route absolute
// let route = 'fileTest\\proof.md';

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
    if (isAbsolutePath === true) {
        console.log('The route is absolute: ', route);
    } else {
        //metodo que convierte ruta relativa a absoluta
        let nowPathAbsolute = path.resolve(route);
        route = nowPathAbsolute;
        // console.log('new route: ',nowPathAbsolute);
        console.log('Here new route', route);
    }
};

// metodo de fs que enlista los archivos y carpetas de un directorio => readdirsync (recursividad)
// let files = fs.readdirSync(route); 
// console.log('files list: ',files);

// metodo que nos devuelve la extensión de un archivo
const extension = path.extname('README.md');
console.log('The extension is: ', extension);

// Permite leer un archivo, convertirlo en caracteres especifico => texto que se puede leer (utf-8)
const read = (route) => {
    console.log('aqui 48: ', route);
    // Valide si es directorio
    fs.stat(route, (err, stats) => {
        if (err) throw err;
        // console.log(`stats: ${JSON.stringify(stats)}`);
        if (stats.isDirectory()) {
            console.log("Prueba con ruta de archivo");
        } else {
            fs.readFile(route, 'utf-8', (error, data) => {
                if (!error) {
                    // console.log(data.match(/[^!]\[.+?\]\(.+?\)/g));
                    return data.match(/[^!]\[.+?\]\(.+?\)/g)
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
// let text = fs.readFileSync('fileTest/proof.md').toString();
// console.log('Read file:', );
