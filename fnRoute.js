const path = require('path');
const fs = require('fs');
const terminal = process.argv

const pathAbsoluteExists = (route) => {
  let absolutePath = '';
  if (fs.existsSync(route) == false) {
      console.log('Please check, This route does not exist');
  } else {
      console.log('The path is correct. Let´s check if it is absolute:');
        if (path.isAbsolute(route) === false) {
        absolutePath = path.resolve(route);
        console.log('Path was made absolute: ', absolutePath);
        } else {
        absolutePath = route;
        console.log('The route was already absolute: ', absolutePath);
        }
      return absolutePath;
     
    } 
};
pathAbsoluteExists(terminal[2]);

module.exports = { pathAbsoluteExists, };
