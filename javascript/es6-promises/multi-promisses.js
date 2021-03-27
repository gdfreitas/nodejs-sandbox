const util = require('util')
const fs = require('fs')

// old
fs.readFile('./resources/data1.txt', (err, data1) => {
  fs.readFile('./resources/data2.txt', (err, data2) => {
    fs.readFile('./resources/data3.txt', (err, data3) => {
      console.log(data1.toString())
      console.log(data2.toString())
      console.log(data3.toString())
    })
  })
})

// new
const readFile = util.promisify(fs.readFile);

Promise.all([
  readFile('./resources/data1.txt'),
  readFile('./resources/data2.txt'),
  readFile('./resources/data3.txt')
])
  .then(datas => {
    const [data1, data2, data3] = datas; // destructuring de arrays (resultados resolvidos)
    console.log(data1.toString())
    console.log(data2.toString())
    console.log(data3.toString())
  })
