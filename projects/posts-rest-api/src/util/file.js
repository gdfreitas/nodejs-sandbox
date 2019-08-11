const path = require('path');
const fs = require('fs');

const clearImage = imageName => {
  let imagePath = path.join(__dirname, '..', '..', 'images', imageName);
  fs.unlink(imagePath, err => console.log(err));
};

exports.clearImage = clearImage;