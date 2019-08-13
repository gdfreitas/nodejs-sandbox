const express = require('express')
const { body } = require('express-validator/check')

const feedController = require('../controllers/feed')
const isAuth = require('../middlewares/is-auth')

const router = express.Router()

const postValidationHandlers = [
  body('title').trim().isLength({ min: 5 }),
  body('content').trim().isLength({ min: 5 })
]

router.get('/posts', isAuth, feedController.getPosts)
router.post('/post', isAuth, postValidationHandlers, feedController.createPost)
router.get('/post/:postId', isAuth, feedController.getPost)
router.put('/post/:postId', isAuth, postValidationHandlers, feedController.updatePost)
router.delete('/post/:postId', isAuth, feedController.deletePost)

module.exports = router
