const { readAll } = require('./fnReadLink.js');
const { isMdFile } = require('./fnRecursion.js');
const { pathAbsoluteExists } = require('./fnRoute.js');
const terminal = process.argv[2]

const mdLinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    //aqui funciones pequenas
    const absolutePath = pathAbsoluteExists(path);
    const mdFiles = isMdFile(absolutePath);
    // resolve(readAll(mdFiles)) 
    // .then(response => resolve(response))
    Promise.all(readAll(mdFiles))
    .then(response => resolve(response))
  });
};
mdLinks(terminal)
  .then((rest) => console.log('respuesta mdLinks: ', rest))
  .catch((err) => console.log(err));
// module.exports = {

// };

// va la función mdlinks
