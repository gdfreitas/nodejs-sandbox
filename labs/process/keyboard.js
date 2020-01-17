exports.onReadable = callback => {
    process.stdin.on('readable', () => {
        var chunk = process.stdin.read() // retorna uma estrutura Buffer da entrada executada
        if (chunk) {
            // console.log(JSON.stringify(chunk.toString())) // verificar que para cada comando há um \r\n no final da string
            callback(chunk.toString().replace(/(\n|\r)/g, ''))
        }
    })
}
