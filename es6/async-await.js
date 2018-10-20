const fs = require('fs')

const readFilePromise = filename => new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
    })
})

// modo convencional de trabalhar com promises
readFilePromise('./scientists.json')
    .then(data => console.log(data.toString()))
    .catch(err => console.error(err))

// async-await approach :D
async function read() {
    try {
        const scientists = await readFilePromise('./scientists.json')
        console.log(scientists.toString());
    } catch (err) {
        console.error('Erro ao recuperar arquivo', err)
    }
}
read();