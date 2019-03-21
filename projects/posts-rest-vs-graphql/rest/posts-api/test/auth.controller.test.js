const { expect } = require('chai');
const sinon = require('sinon');

const mongoose = require('mongoose')

const User = require('../models/User');
const AuthController = require('../controllers/auth');

const { MONGODB_TESTS_URI } = require('../.env')

describe('Auth controller', function () {

    before(function (done) {
        mongoose
            .connect(MONGODB_TESTS_URI, { useNewUrlParser: true })
            .then(result => {
                const user = new User({
                    email: 'test@test.com',
                    password: '12345',
                    name: 'Test',
                    posts: [],
                    _id: '5c0f66b979af55031b34728a' // FIXME: mocked id
                });

                return user.save();
            })
            .then(() => done())
    })

    beforeEach(() => {
        // hook for before each test case
    });

    afterEach(() => {
        // hook for after each test case
    });

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

    it('should send a response with a valid user status for an existing user', function (done) {

        const req = { userId: '5c0f66b979af55031b34728a' }
        const res = {
            statusCode: 500,
            userStatus: null,
            status: function (code) {
                this.statusCode = code;
                return this;
            },
            json: function (data) {
                this.userStatus = data.status;
            }
        };

        AuthController.getUserStatus(req, res, () => { })
            .then(() => {
                expect(res.statusCode).to.be.equal(200);
                expect(res.userStatus).to.be.equal('I am new!');
                done();
            })
            .catch(err => console.log(err));
    })

    after((done) => {
        User.deleteMany({})
            .then(() => mongoose.disconnect())
            .then(() => done())
    })

})