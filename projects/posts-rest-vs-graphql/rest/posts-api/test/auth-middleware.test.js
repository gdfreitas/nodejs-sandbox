const { expect } = require('chai');

const authMiddleware = require('../middlewares/is-auth');

describe('Auth middleware', function () {
    it('should throw an error if no authorization header is present', function () {
        const req = {
            get: function () {
                return null;
            }
        }

        // passar uma referência de função para que o framework Mocha execute a função
        expect(authMiddleware.bind(this, req, {}, () => { }))
            .to.throw('Not authenticated.');
    });

    it('should throw an error if the authorization header is only one string', function () {
        const req = {
            get: function () {
                return 'XYZ';
            }
        }

        expect(authMiddleware.bind(this, req, {}, () => { }))
            .to.throw();
    })
})

