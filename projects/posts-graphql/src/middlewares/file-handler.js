const multer = require('multer')

const { storage, fileFilter } = require('../config/multer')
const REQUEST_FILE_PROPERTY = 'image'

module.exports = multer({ storage, fileFilter }).single(REQUEST_FILE_PROPERTY)
