const { expect } = require('chai')
const sinon = require('sinon')

const jwt = require('jsonwebtoken')

const authMiddleware = require('../middlewares/is-auth')

describe('Auth middleware', function () {
  it('should throw an error if no authorization header is present', function () {
    const req = {
      get: function () {
        return null
      }
    }

    // passar uma referência de função para que o framework Mocha execute a função
    expect(authMiddleware.bind(this, req, {}, () => { }))
      .to.throw('Not authenticated.')
  })

  it('should throw an error if the authorization header is only one string', function () {
    const req = {
      get: function () {
        return 'XYZ'
      }
    }

    expect(authMiddleware.bind(this, req, {}, () => { }))
      .to.throw()
  })

  it('should throw an error if the token cannot be verified', function () {
    const req = {
      get: function () {
        return 'Bearer XYZ'
      }
    }

    expect(authMiddleware.bind(this, req, {}, () => { }))
      .to.throw()
  })

  it('should yield a userId after decoding token', function () {
    const req = {
      get: function () {
        return 'Bearer XYZ'
      }
    }

    // RUIM: sobrescreve método globalmente (em outros testes também)
    // jwt.verify = function () {
    //     return {
    //         userId: 'gabriel.freitas'
    //     }
    // }

    // stubs método original
    sinon.stub(jwt, 'verify')
    jwt.verify.returns({ userId: 'gabriel.freitas' })

    authMiddleware(req, {}, () => { })
    expect(req).to.have.property('userId')
    expect(req).to.have.property('userId', 'gabriel.freitas')
    expect(jwt.verify.called).to.be.true

    // restaura método original
    jwt.verify.restore()
  })
})
