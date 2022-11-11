const {pathAbsoluteExists} = require('../fnRoute.js');


describe('pathAbsoluteExists', () => {

  it('pathAbsolute deberia ser una función', () => {
    expect(typeof pathAbsoluteExists). toBe('function');
  });

});