var Tesseract = require('tesseract.js')

const imageUrl = './assets/example.png'

console.time('benchmark')
Tesseract.recognize(imageUrl)
  .then(result => console.log(result.data.text))
  .catch(err => console.error(err))
  .finally(e => {
    console.timeEnd('benchmark')
    process.exit();
  });
