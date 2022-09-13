const Mysql                 = require('mysql');
const executeQuery  		= require('../config/database.js');

class UserModel {

    async getUsers(email, password) {
        try {
            let get_user = Mysql.format('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
            let get_user_result = await executeQuery(get_user);

            if(get_user_result.length>0) {
                // return get_user_result
                return true
            } else {
                return false
            }

            
        } catch(err) {
            console.log(err)
        }
    }

    async getURL(email, password) {
        try {
            let get_user = Mysql.format('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
            let get_user_result = await executeQuery(get_user);

            if(get_user_result.length>0) {
                // return get_user_result
                return '/success page'
            } else {
                return false
            }

            
        } catch(err) {
            console.log(err)
        }
    }

    async missingEmail(email, password) {
        try {
            if(email == "") {
                return "Email is required"
            }

            let get_user = Mysql.format('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
            let get_user_result = await executeQuery(get_user);

            if(get_user_result.length>0) {
                // return get_user_result
                return '/success page'
            } else {
                return false
            }

            
        } catch(err) {
            console.log(err)
        }
    }

    async missingPassword(email, password) {
        try {
            if(password == "") {
                return "Password is required"
            }
            
            let get_user = Mysql.format('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
            let get_user_result = await executeQuery(get_user);

            if(get_user_result.length>0) {
                // return get_user_result
                return '/success page'
            } else {
                return false
            }

            
        } catch(err) {
            console.log(err)
        }
    }

    async missingEmailPassword(email, password) {
        try {
            if(email == "" && password == "") {
                return "Email and password is required"
            }
            
            let get_user = Mysql.format('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
            let get_user_result = await executeQuery(get_user);

            if(get_user_result.length>0) {
                // return get_user_result
                return '/success page'
            } else {
                return false
            }

            
        } catch(err) {
            console.log(err)
        }
    }

}

module.exports = UserModel;