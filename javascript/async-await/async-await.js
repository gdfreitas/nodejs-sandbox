const fs = require('fs')
const util = require('util')

// utilitário transforma o método nativo em callback-style em promise-style
const readFile = util.promisify(fs.readFile)

const run = async () => {

    // Promise version - método convencional
    readFile('./resources/scientists1.json')
        .then(scientistsJson => {
            try {
                console.log(JSON.parse(scientistsJson)[0])
            } catch (err) {
                console.error('Não foi possível fazer o parse do arquivo', err)
            }
        })
        .catch(err => console.error('Ocorreu um erro inesperado', err))

    // Async-Await version
    try {
        const scientistsJson = await readFile('./resources/scientists1.json')
        console.log(JSON.parse(scientistsJson)[0])
    } catch (err) {
        // trata erros como o reject de uma Promise
        // também já trata erros do método parse do JSON
        console.error('Ocorreu um erro inesperado', err)
    }
}

run();



