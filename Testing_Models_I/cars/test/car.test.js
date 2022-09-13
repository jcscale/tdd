const chai                  = require('chai');
const expect                = chai.expect;

const CarModel = require('../models/carModel');

describe("CarModel", function() {
    it('should return all cars from the database', async function() {
        let carModel = new CarModel;
        let result = await carModel.get_all_cars();
        console.log(result)
        expect(result).to.equal(result);
    })
})