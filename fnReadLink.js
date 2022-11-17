const fs = require('fs');
const terminal = process.argv;
// Permite leer un archivo, convertirlo en caracteres especifico => texto que se puede leer (utf-8)
const read = (route) => {
  console.log('Read route: ', route);
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf-8', (error, data) => {
      const expression = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
      //const expression = /[^!]\[.+?\]\(.+?\)/g;
      if (!error) {
        // console.log('Reading links: ', data.match(expression));
        resolve(data.match(expression))
      } else {
        console.log(`Error: ${error}`);
      }
    }
    )
  })

}

const readAll = (arr) => {
  return arr.map(element => {
    return read(element)
  });
}

module.exports = { readAll, };