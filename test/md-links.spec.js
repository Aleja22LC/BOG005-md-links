const { mdLinks } = require('../index');
const { dataExample } = require('./example.js');

describe('mdLinks', () => {
  it('mdLinks comprobando que es una función', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('mdLinks retorna validate true', (done) => {
   
      mdLinks(dataExample.pathFile, { validate: true })
      .then((ans) => {
        expect(ans).toBe(dataExample.validateTrue);
        done()
      })   
 
  });
  
});