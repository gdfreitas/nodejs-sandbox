const fs = require('fs')

const readFilePromise = filePath =>
    new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })

// método convencional de trabalhar com promises
readFilePromise('./resources/scientists.json')
    .then(scientistsJson => {
        try {
            console.log(JSON.parse(scientistsJson))
        } catch (err) {
            console.error('Não foi possível fazer o parse do arquivo', err)
        }
    })
    .catch(err => console.error('Ocorreu um erro inesperado', err))

// método utilizando async-await
async function getScientists (filePath) {
    try {
        const scientistsJson = await readFilePromise(filePath)
        return JSON.parse(scientistsJson)
    } catch (err) {
        // trata erros como o reject de uma Promise
        // também já trata erros do método parse do JSON
        console.error('Ocorreu um erro inesperado', err)
    }
}

const scientists = getScientists('./resources/scientists.json')
console.log(scientists.length)
