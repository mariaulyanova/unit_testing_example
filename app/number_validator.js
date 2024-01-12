/* eslint linebreak-style: ["error", "windows"]*/
/**
 * A simple class containing methods for validating numbers
 * @class NumberValidator
 */
export class NumberValidator {
/**
 * Creates an instance of NumberValidator.
 * @memberof NumberValidator
 */
  constructor() {
  };
  /**
 * @param {Number} number number to check
 * @return {Boolean} true if element is even
 * @memberof NumberValidator
 */
  isNumberEven(number) {
    const typeOfVariable = typeof(number);
    if (typeOfVariable !== 'number') {
    // eslint-disable-next-line max-len
      throw new Error(`[${number}] is not of type "Number" it is of type "${typeOfVariable}"`);
    } else {
      return number % 2 === 0;
    }
  };

  /**
 * @param {Array<Number>} arrayOfNumbers array of numbers to go through
 * @return {Array<Number>} array of even numbers
 * @memberof NumberValidator
 */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
    arrayOfNumbers.every((item) => typeof item === 'number')) {
      const arrayOfEvenNumbers = arrayOfNumbers.filter(this.isNumberEven);
      return arrayOfEvenNumbers;
    } else {
      throw new Error(`[${arrayOfNumbers}] is not an array og "Numbers"`);
    }
  };
}
