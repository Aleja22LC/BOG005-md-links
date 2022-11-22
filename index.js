const { readAll } = require('./fnReadLink.js');
const { isMdFile } = require('./fnRecursion.js');
const { pathAbsoluteExists } = require('./fnRoute.js');
const { validateHttp } = require('./fnValidate.js');
const terminal = process.argv[2]

const mdLinks = (path, options = { validate: false }) => {
  return new Promise((resolve, reject) => {
    const absolutePath = pathAbsoluteExists(path);
    const mdFiles = isMdFile(absolutePath);
    if (options.validate === true) {
      Promise.all(readAll(mdFiles))
        .then((response) => validateHttp(response.flat()))
        .then(respValidate => resolve(respValidate)) // Encadenamiento de promesas
    } else {
      Promise.all(readAll(mdFiles))
        .then((response) => resolve(response.flat()));
    }
  })
};

// mdLinks(terminal, {validate: true}) // se lleva al CLI
//   .then((rest) => console.log("answer to mdLinks: ", rest))
//   .catch((err) => err.message)

module.exports = {mdLinks,}
