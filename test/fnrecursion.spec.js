const {isMdFile} = require('../fnRecursion.js');

const route = 'C:\\LAB\\BOG005-md-links\\fileTest';

describe('isMdFile', () => {

  it('isMdFile deberia ser una función', () => {
    expect(typeof isMdFile). toBe('function');
  });

});