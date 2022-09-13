const Mysql         = require('mysql2');
const connection      = Mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "magicolor2728",
    "database": "car_db",
    "port": 3306
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    console.log("###################################");
});

// module.exports = {
//     connect() {
//         return new Promise(function (res, rej) {
//             connection.connect()
//                 .then(function (conn) {
//                     res(conn);
//                 })
//                 .catch(function (error) {
//                     rej(error);
//                 });
//         });
//     }
// };

module.exports = connection.promise()