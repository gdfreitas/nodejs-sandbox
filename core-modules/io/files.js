const fs = require('fs')

// define quantidade de threads no pool de i/o
process.env.UV_THREADPOOL_SIZE = 1

let thread = 1
let count = 1
while (count <= 6) {
    console.time(`file${count}`)
    fs.readFile('./resources/movie.mp4', function (err, data) {
        if (err) console.error(err)
        console.timeEnd(`file${thread}`)
        thread++
    })
    count++
}

// Os callbacks são executados pelo Event Loop com base na ordem em que os mesmos forem finalizados
// Neste exemplo, o arquivo "2.txt" tem alguns bytes a mais, o que nos permite simular essa diferença de tempo
for (let i = 1; i <= 3; i++) {
    fs.readFile(`./resources/${i}.txt`, (err, data) => {
        if (err) console.log(err)
        console.log(data.toString())
    })
}

console.log('Fim')
