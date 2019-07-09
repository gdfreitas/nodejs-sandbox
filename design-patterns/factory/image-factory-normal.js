class Image { }

function createImage(type) {
  return new Image(type);
}

module.exports = { createImage };