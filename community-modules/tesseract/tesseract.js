var Tesseract = require('tesseract.js')

const imageUrl = './resources/english-text.png'

console.time('benchmark')
Tesseract.recognize(imageUrl)
    .then(result => console.log(result.text))
    .catch(err => console.error(err))
    .finally(e => {
        console.timeEnd('benchmark')
        process.exit();
    });