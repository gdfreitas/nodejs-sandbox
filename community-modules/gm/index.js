const gm = require('gm');

const inputImagePath = './inputs/aws1.jpg';
const outputImagePath = 'processed.png';

(async function () {
    let dimensions = await getImageDimensions(inputImagePath);
    console.log('dimensions', dimensions);

    // let properties = await getImageProperties(inputImagePath);
    // console.log('properties', properties);

    const RESIZED_WIDTH = 800;
    const RESIZED_CROP_WIDTH_RATIO = 0.85;
    const RESIZED_CROP_HEIGHT_RATIO = 0.4;

    gm(inputImagePath)
        // .contrast(6)
        // .sepia()
        .resize(RESIZED_WIDTH)
        .autoOrient()
        .gravity('Center')
        .crop(RESIZED_CROP_WIDTH_RATIO * RESIZED_WIDTH, RESIZED_CROP_HEIGHT_RATIO * RESIZED_WIDTH)
        .write(outputImagePath, function (err) {
            if (err) {
                console.log(err);
            }
        });

})();

async function getImageProperties(imagePath) {
    return new Promise((resolve, reject) => {
        gm(inputImagePath)
            .identify(function (err, properties) {
                if (err) {
                    return reject(err);
                }

                return resolve(properties);
            });
    })
}

async function getImageDimensions(imagePath) {
    return new Promise((resolve, reject) => {
        gm(imagePath)
            .size(function (err, dimensions) {
                if (err) {
                    return reject(err);
                }

                return resolve({
                    width: dimensions.width,
                    height: dimensions.height
                })
            });
    })
}