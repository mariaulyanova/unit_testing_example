/* eslint linebreak-style: ["error", "windows"]*/
import {NumberValidator} from '../../app/number_validator.js';
import {expect} from 'chai';

describe('isNumberEven positive tests', () => {
  let validator;
  beforeEach(() => {
    validator = new NumberValidator();
  });

  afterEach(() => {
    validator = null;
  });

  it('should return true when provided an even number', () => {
    const validatorResults = validator.isNumberEven(4);
    expect(validatorResults).to.be.equal(true);
  });

  it('should return false when provided an even number', () => {
    const validatorResults = validator.isNumberEven(5);
    expect(validatorResults).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw(`[4] is not of type "Number" it is of type "string"`);
  });

  it('should throw an error when provided a boolean', () => {
    expect(() => {
      validator.isNumberEven(true);
    }).to.throw(`[true] is not of type "Number" it is of type "boolean"`);
  });
});
