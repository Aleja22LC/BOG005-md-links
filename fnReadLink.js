const fs = require('fs');
//const terminal = process.argv[2];
const read = (route) => {
  console.log('Read route: ', route);
  return new Promise((resolve, reject) => {
    fs.readFile(route, 'utf-8', (error, data) => {
      const expression = /(?<!!)\[(.*?)\]\((.*?)\)/g;
      const hrefExp = /https?:\/{2}.*?(?=\))/g;
      const textExp = /(?!\[).*(?=\])/g;
      let arrLink = [];
      if (!error) {
        console.log('Reading links: ', data.match(expression));
        const dataVar = data.match(expression)
        dataVar.forEach((link) => {
          arrLink.push({
            href: link.match(hrefExp).toString(),
            text: link.match(textExp).toString(),
            file: route
          })
        });
      } else {
        arrLink.push({
          href: 'sorry, no links found',
          text: 'sorry, no links found',
          file: route
        })
        // return arrLink;
      }
      resolve(arrLink)
    })
  })
}

const readAll = (arr) => {
  return arr.map(element => {
    return read(element)
  });
}
// Promise.all(readAll(['C:\\LAB\\BOG005-md-links\\fileTest\\proof.md']))
//   .then(response => console.log(response))

module.exports = { readAll };