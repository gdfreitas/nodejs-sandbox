const http = require('http')

const server = http.createServer((req, res) => {
    let content = '';

    // acumula os chunks na variável
    req.on('data', data => {
        content += data
    })

    // envia o conteúdo acumulado de volta
    req.on('end', () => {
        res.write(content);
        res.end();
    })
})

server.listen(9090, '0.0.0.0')