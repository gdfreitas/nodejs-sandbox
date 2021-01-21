const gm = require('gm');

const inputImagePath = './assets/example.jpg';
const outputImagePath = './assets/example-processed.png';

const RESIZED_WIDTH = 800;
const RESIZED_CROP_WIDTH_RATIO = 0.85;
const RESIZED_CROP_HEIGHT_RATIO = 0.4;

gm(inputImagePath)
  .contrast(6)
  .sepia()
  .resize(RESIZED_WIDTH)
  .autoOrient()
  .gravity('Center')
  .crop(RESIZED_CROP_WIDTH_RATIO * RESIZED_WIDTH, RESIZED_CROP_HEIGHT_RATIO * RESIZED_WIDTH)
  .write(outputImagePath, function (err) {
    if (err) {
      console.log(err);
    }
  });

gm(inputImagePath)
  .identify(function (error, properties) {
    if (error) {
      console.log(error);
      return;
    }

    console.log('properties', properties)
  });

gm(imagePath)
  .size(function (error, dimensions) {
    if (error) {
      return reject(error);
    }

    console.log('dimensions', dimensions)
  });
