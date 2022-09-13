const chai = window.chai;
const expect = chai.expect;

describe('sum', () => {
    it('should return the sum of 2 numbers', () => {
        expect(sum(1,2)).to.deep.equal(3)
        expect(sum(3,10)).to.deep.equal(13)
        expect(sum(-3,4)).to.deep.equal(1)
        expect(sum(-5,10)).to.deep.equal(5)
    });
});

describe('celciusToFahrenheit', function() {
    it('should convert celcius to fahrenheit', function() {
        expect(celciusToFahrenheit(0)).to.deep.equal(32)
        expect(celciusToFahrenheit(10)).to.deep.equal(50)
        expect(celciusToFahrenheit(100)).to.deep.equal(212)
    });
});

describe('makeItBig', function() {
    it('should convert all positive numbers to word big in an array', function() {
        expect(makeItBig([-1,3,5,-5])).to.deep.equal([-1,"big","big",-5])
    });
});

describe('double', function() {
    it('will double each value in the array', function() {
        expect(double([1,2,3])).to.deep.equal([2,4,6])
    });
});

describe('returnArrayCountGreaterThanY', function() {
    it('should count and return the number of array values greater than Y.', function() {
        expect(returnArrayCountGreaterThanY([2,3,5], 4)).to.deep.equal(1)
    })
});

describe('sigma', function() {
    it('returns the sum of all positive integers up to number (inclusive)', function() {
        expect(sigma(3)).to.deep.equal(6)
    });
});

describe('factorial', function() {
    it('returns the product (multiplication) of all positive integers from 1 up to number (inclusive)', function() {
        expect(factorial(3)).to.deep.equal(6)
    });
});

describe('swapTowardCenter', function() {
    it('returns a swapped array', function() {
        expect(swapTowardCenter([true,42,"Ada",2,"pizza"])).to.deep.equal(["pizza",2,"Ada",42,true])
    });
});

describe('threesFives', function() {
    it('Return the final sum.', function() {
        expect(threesFives(10)).to.deep.equal(22)
    })
});

describe('fibonacci', function() {
    it('returns a fibonacci', function() {
        expect(fibonacci(0)).to.deep.equal(0)
    });
})