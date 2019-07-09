class Image { }

class PNGImage extends Image { }

class JPGImage extends Image { }

class GIFImage extends Image { }

function createImage(type) {
  const supportedImageTypes = {
    jpg: JPGImage,
    png: PNGImage,
    gif: GIFImage,
  };

  // https://ponyfoo.com/articles/es6-object-literal-features-in-depth
  return new (supportedImageTypes[type] || Image)();
}

module.exports = { createImage };