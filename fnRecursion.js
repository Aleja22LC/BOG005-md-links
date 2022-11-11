const path = require('path');
const fs = require('fs');
const terminal = process.argv;

// **********Función recursiva que recorre las carpetas extrayendo los archivos .md**********
let arrayMarkFile = [];

const readDirectory = (absolutePath) => {
    if (path.extname(absolutePath) === "") {
        let directory = [];
        directory = fs.readdirSync(absolutePath);
        directory.forEach((filesList) => {
            filesList = path.join(absolutePath, filesList);
            if (path.extname(filesList) === "") {
                readDirectory(filesList);
            } else if (path.extname(filesList) === ".md") {
                arrayMarkFile.push(filesList);
            }
        });
    } else if (path.extname(absolutePath) == ".md") {
        arrayMarkFile.push(absolutePath);
    }
    return arrayMarkFile;
};

readDirectory(terminal[2]);
console.log(arrayMarkFile);

module.exports = { readDirectory, };
