const { expect } = require('chai');
const sinon = require('sinon');

const User = require('../models/User');
const AuthController = require('../controllers/auth');

describe('Auth controller', function () {

    it('should throw an error if accessing the database fails', function (done) {
        sinon.stub(User, 'findOne');
        User.findOne.throws();

        const req = {
            body: {
                email: 'test@test.com',
                password: '12345'
            }
        }

        AuthController.login(req, {}, () => { }).then(response => {
            expect(response).to.be.an('error');
            expect(response).to.have.property('statusCode', 500);
            done();
        });

        User.findOne.restore();
    })

})