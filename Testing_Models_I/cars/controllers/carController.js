"use strict";

var CarModel = require('../models/carModel');
var car = new CarModel;

class CarController {
    // IndexView(request, response) {
    //     car.get_all_cars(function(err, result) {
    //         if(err) {
    //             response.send(err)
    //         }
    //         console.log(result)
    //         response.render('index', {cars:result});
    //     });
        
    // }

    async IndexView(request, response, next) {
        let data = await car.get_all_cars();
        let count = await car.count_all_cars()

        console.log(data)
        
        if(request.session.visitor) {
            request.session.visitor++;
        } else {
            request.session.visitor = 1;
        }

        response.render('index', {cars:data, car_count:count, visits: request.session.visitor})
    }
}

module.exports = CarController;