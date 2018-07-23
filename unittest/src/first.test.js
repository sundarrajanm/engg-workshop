const expect = require('chai').expect;

/*
Create a simple String calculator with a method int Add(string numbers)
  The method can take 0, 1 or 2 numbers, and will return
  their sum (for an empty string it will return 0) for example
  “” or “1” or “1,2”
*/

const shouldReturnZero = inStr => !inStr || isNaN(parseInt(inStr))
const toInt = inStr => isNaN(parseInt(inStr)) ? 0 : parseInt(inStr)
const addition = (prev, current) => prev + toInt(current);

const Calc = () => ({
    add: inStr => shouldReturnZero(inStr) ? 0 : inStr
    .split(",")
    .reduce(addition, 0)
});

describe('Calculator', () => {

    const calc = Calc();
    const add = calc.add;
    
    it('can instantiate and object', () => {
        const calc = Calc();
        expect(calc).to.not.be.undefined;
    });

    it('has add method', () => {
        const calc = Calc();
        expect(calc.add).to.not.be.undefined;
    });

    it('return zero with no arguments or empty string or some non-integers', () => {
        expect(add("")).to.equal(0);
        expect(add(" ")).to.equal(0);
    });

    it('return the number as is for single digit number', () => {
        expect(add("6")).to.equal(6);
    });

    it('return the sum of two numbers', () => {
        expect(add("6,8")).to.equal(14);
        expect(add("1 ,2")).to.equal(3);
        expect(add("5, 5")).to.equal(10);
        expect(add("1 , 1")).to.equal(2);
        expect(add("1 ,, 1")).to.equal(2);
    });
});