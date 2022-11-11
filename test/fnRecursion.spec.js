const {readDirectory} = require('../fnRecursion.js');

const route = 'fileTest\fileProof';

describe('readDirectory', () => {

  it('readDirectory deberia ser una función', () => {
    expect(typeof readDirectory(route)). toBe('function');
  });

});