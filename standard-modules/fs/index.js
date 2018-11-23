const fs = require('fs')

let readOptions = {
    encoding: 'utf-8',
    flag: 'r'
}

// async read
fs.readFile('file.txt', readOptions, (err, data)=> console.log('Asynchronous', data))

// sync read
let fileData = fs.readFileSync('file.txt', readOptions)
console.log('Synchronous', fileData);

let writeOptions = {
    encoding: 'utf-8',
    flag: 'w', //cria caso não exista
    mode: 0o666 // leitura e escrita permitida para todos
}

// async write
fs.writeFile('anotherFile.txt', 'Hello world from Node.js', writeOptions, err => {
    if (err) console.log(err)
})

// sync write
let writeFileSyncError = fs.writeFileSync('anotherFile.txt', 'Hello world from Node.js', writeOptions)
if (writeFileSyncError) console.log('writeFileSyncError', writeFileSyncError)

// delete async
fs.unlink('anotherFile.txt', err => {
    if (err) console.log(err)
})

// delete sync
let deleteFileSyncError = fs.unlinkSync('anotherFile.txt')
if (deleteFileSyncError) console.log('deleteFileSyncError', deleteFileSyncError)