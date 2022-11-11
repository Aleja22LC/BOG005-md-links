const path = require('path');
const fs = require('fs');
const terminal = process.argv;

const read = (route) => {
    console.log('Read route: ', route);
    // Valida si es directorio
    fs.stat(route, (err, stats) => {
      if (err) throw err;
      
      if (stats.isDirectory()) {
        console.log("This is a directory");
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
  let arrayLinks = read()

  read(terminal[2]);
console.log(route);

module.exports = { read, };