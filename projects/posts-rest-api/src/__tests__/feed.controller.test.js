const { expect } = require('chai')
const sinon = require('sinon')

const mongoose = require('mongoose')

const User = require('../models/User')
const Post = require('../models/Post')
const FeedController = require('../controllers/feed')

const { MONGODB_TESTS_URI } = require('../.env')

describe('Feed controller', function () {
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
        })

        return user.save()
      })
      .then(() => done())
  })

  beforeEach(() => {
    // hook for before each test case
  })

  afterEach(() => {
    // hook for after each test case
  })

  it('should add a created post to the posts of the creator', function (done) {
    const req = {
      body: {
        title: 'Test Post',
        content: 'A Test post'
      },
      file: {
        path: 'abc'
      },
      userId: 'test'
    }

    FeedController.login(req, {}, () => { }).then(response => {
      expect(response).to.be.an('error')
      expect(response).to.have.property('statusCode', 500)
      done()
    })
  })

  after((done) => {
    User.deleteMany({})
      .then(() => mongoose.disconnect())
      .then(() => done())
  })
})
