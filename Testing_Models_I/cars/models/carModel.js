"use strict";

const mysql = require('../config');

class CarModel {

    get_all_cars() {
        return (new Promise(function(resolve, reject) {
            mysql.execute('SELECT * FROM cars')
            .then(([rows]) => {
                resolve(rows)
            });
        }))
        
    }

    count_all_cars() {
        return (new Promise(function(resolve, reject) {
            mysql.execute('SELECT COUNT(*) as car_count FROM cars')
            .then(([rows]) => {
                resolve(rows)
            })
        }));
    }
    
}

module.exports = CarModel;