const { validateHttp } = require('../fnValidate.js');
const { dataExample } = require('./example.js');

describe('validateHttp', () => {
  it('validateHttp comprobando que es una función', () => {
    expect(typeof validateHttp).toBe('function');
  });

  // it('validateHttp retorna status del link', () => {
  //   validateHttp(dataExample.pathFile, { validate: false })
  //     .then((rest) => {
  //       expect(rest).toEqual(dataExample.validateFalse);
  //     })
  // });

});