const fs = require('fs')
const util = require('util')

// utilitário transforma o método nativo em callback-style em promise-style
const readFile = util.promisify(fs.readFile)

const run = async () => {

  // Promise version - método convencional
  Promise.all([
    readFile('./resources/scientists1.json'),
    readFile('./resources/scientists2.json'),
    readFile('./resources/scientists3.json')
  ])
    .then(files => {
      const [scientists1, scientists2, scientists3] = files;
      try {
        console.log(`Promise.then: ${JSON.parse(scientists1)[0]}`)
        console.log(`Promise.then: ${JSON.parse(scientists2)[0]}`)
        console.log(`Promise.then: ${JSON.parse(scientists3)[0]}`)
      } catch (err) {
        console.error('Não foi possível fazer o parse do arquivo', err)
      }
    })
    .catch(err => console.error('Ocorreu um erro inesperado', err))

  // Async-Await version
  try {
    const [scientists1, scientists2, scientists3] = await Promise.all([
      readFile('./resources/scientists1.json'),
      readFile('./resources/scientists2.json'),
      readFile('./resources/scientists3.json')
    ]);
    console.log(`async/await: ${JSON.parse(scientists1)[0]}`)
    console.log(`async/await: ${JSON.parse(scientists2)[0]}`)
    console.log(`async/await: ${JSON.parse(scientists3)[0]}`)
  } catch (err) {
    // trata erros como o reject de uma Promise
    // também já trata erros do método parse do JSON
    console.error('Ocorreu um erro inesperado', err)
  }
}

run();



