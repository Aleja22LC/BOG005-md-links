const { statsBrokens, stats, } = require("./fnStats.js");
const { mdLinks } = require('./index');
const terminal = process.argv;
const route = process.argv[2];

// se hacen condicionales para saber donde se encuentran las validaciones utilizando el metodo includes 
let validate = (terminal) => {
    if (terminal.length === 3) {
        mdLinks(terminal)
            .then((rest) => console.log("respuesta mdLinks: ", rest))
    } else if (terminal.includes('--validate') && terminal.length === 4) {
        mdLinks(terminal, { validate: true }) 
            .then((rest) => console.log('validate true', rest))
    } else if (terminal.includes('--stats') && terminal.length === 4) {
        mdLinks(terminal)
            .then((rest) => console.log('Stats true', stats(rest)))//Llama a función stats        
    } else if (terminal.length === 5 && terminal.includes('--validate', 'stats')) {
        mdLinks(terminal, { validate: true })
            .then((rest) => console.log('--validate && --stats',statsBrokens(rest)))//Llama a la función del broken        
    } else if (terminal === undefined) {
        throw Error('Debe ingresar una ruta')
    } else {
        console.log(`Comando incorrecto, intente con --validate o --stats`);
    }
};

validate(route, terminal)//no se si va route o terminal (argv) o las dos