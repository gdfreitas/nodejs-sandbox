const path = require('path')

const multer = require('multer')
const uuidv4 = require('uuid/v4')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'images'))
  },
  filename: function (req, file, cb) {
    cb(null, `${uuidv4()}-${file.originalname}`)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    return cb(null, true)
  }

  cb(null, false)
}

module.exports = {
  storage,
  fileFilter
}
