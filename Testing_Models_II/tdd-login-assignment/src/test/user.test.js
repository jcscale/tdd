const chai                  = require('chai');
const expect                = chai.expect;
const UserModel             = require('../models/user.model');

describe('Login feature', function(){

    describe('User Model', function(){

        it('Given email and password as input, it should return user info (including password) when the email is found in the database', async function() {
            let userModel = new UserModel();
            let result = await userModel.getUsers("testuser@test.com", "password123");
            console.log(result[0])
        });

        it("Given email and password as input, it should return false when email doesn't exist in database.", async function() {
            let userModel = new UserModel();
            let result = await userModel.getUsers("testusers@test.com", "password123");
            expect(result).to.equal(false)
        });

        it("Given email and password as input, it should return true when email and password is correct", async function() {
            let userModel = new UserModel();
            let result = await userModel.getUsers("testuser@test.com", "password123");
            expect(result).to.equal(true)
        });

        it('Given email and password as input, it should return the expected redirect_url (/success page) on success', async function() {
            let userModel = new UserModel();
            let result = await userModel.getURL("testuser@test.com", "password123");
            expect(result).to.equal('/success page') 
        });

        it('Given password as input, it should return an error message saying: Email is required, when email is missing', async function() {
            let userModel = new UserModel();
            let result = await userModel.missingEmail("", "password123");
            expect(result).to.equal('Email is required') 
        });

        it('Given email as input, it should return an error message saying: Password is required, when password is missing', async function() {
            let userModel = new UserModel();
            let result = await userModel.missingPassword("testuser@test.com", "");
            expect(result).to.equal('Password is required') 
        });

        it('Given empty input, it should return an error message saying: Email and password is required, when all fields are missing', async function() {
            let userModel = new UserModel();
            let result = await userModel.missingEmailPassword("", "");
            expect(result).to.equal('Email and password is required') 
        });
        
    });
});

