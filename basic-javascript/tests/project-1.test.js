const assert = require('chai').assert;
const chai = require('chai');
const funcs = require('../src/project-1.js');

const expect = chai.expect;
// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return num when multiplied by 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const multi = multiplyByTen(10);
      expect(multi).to.equal(100);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return num after subtracting by 5', () => {
      const subtractFive = funcs.subtractFive;
      const subtract = subtractFive(10);
      expect(subtract).to.equal(5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if both strings length are the same', () => {
      const sameLength = funcs.areSameLength('fizz', 'buzz');
      expect(sameLength).to.equal(true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true is x and y are equal', () => {
      const areEqual = funcs.areEqual;
      const equal = areEqual(4, 4);
      expect(equal).to.equal(true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if num is less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const smaller = lessThanNinety(70);
      expect(smaller).to.not.equal(90);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if num is greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const greater = greaterThanFifty(60);
      expect(greater).to.not.equal(50);
    });
  });

  const num = {
    x: 2,
    y: 2
  };

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number when x and y are added', () => {
      const add = funcs.add(num.x, num.y);
      expect(add).to.equal(4);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number when x and y are subtracted', () => {
      const subtract = funcs.subtract(num.x, num.y);
      expect(subtract).to.equal(0);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number if x and y are divided', () => {
      const divide = funcs.divide(num.x, num.y);
      expect(divide).to.equal(1);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number if x and y are multiplied', () => {
      const multiply = funcs.multiply(num.x, num.y);
      expect(multiply).to.equal(4);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder when putting dividing x and y', () => {
      const remainder = funcs.getRemainder(num.x, num.y);
      expect(remainder).to.equal(0);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if num is even', () => {
      const even = funcs.isEven(4);
      expect(even).to.equal(true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if num is odd', () => {
      const odd = funcs.isOdd(5);
      expect(odd).to.equal(true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number when num is squared', () => {
      const square = funcs.square(2);
      expect(square).to.equal(4);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number when num is cubed', () => {
      const cubed = funcs.cube(3);
      expect(cubed).to.equal(27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number thats raised to the exponent', () => {
      const power = funcs.raiseToPower(num.x, num.y);
      expect(power).to.equal(4);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round the number then return the number', () => {
      const rounded = funcs.roundNumber(1.5);
      expect(rounded).to.equal(2);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number that is rounded', () => {
      const up = funcs.roundUp(1.9);
      expect(up).to.equal(2);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a concatinated string', () => {
      const exclamation = funcs.addExclamationPoint('hello');
      expect(exclamation).to.equal('hello!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a concatinated string ("Mary" , "Pena" to "Mary Pena")', () => {
      const combine = funcs.combineNames('Mary', 'Pena');
      expect(combine).to.equal('Mary Pena');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a concatinated string "Hello Roland!"', () => {
      const greeting = funcs.getGreeting('Roland');
      expect(greeting).to.equal('Hello Roland!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('get the area of rectangle then return function', () => {
      const area = funcs.getRectangleArea(num.x, num.y);
      expect(area).to.equal(4);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('get the area of triangle then return the function', () => {
      const tArea = funcs.getTriangleArea(num.x, num.y);
      expect(tArea).to.equal(2);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('get the area of a circle then return the function', () => {
      const cArea = funcs.getCircleArea(num.x);
      expect(cArea).to.equal(13);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('get the volume of a rectuangular prism then retunr the function', () => {
      const volume = funcs.getRectangularPrismVolume(num.x, 2, num.y);
      expect(volume).to.equal(8);
    });
  });
});
