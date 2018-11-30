const util = require('util')
const fs = require('fs')

// envolvendo método manualmente com Promise
new Promise((resolve, reject) => {
    fs.readFile('./resources/data1.txt', (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    });
})
.then(data => console.log(data.toString()))
.catch(err => console.log(err))

// utilitário nativo para "promissificar" métodos
const readFile = util.promisify(fs.readFile);

readFile('./resources/data1.txt')
    .then(data => console.log(data.toString()))
    .catch(err => console.log(err))
