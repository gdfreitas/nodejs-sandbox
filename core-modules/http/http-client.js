const http = require('http')

const message = 'Hello, world!';

const options = {
    method: 'GET',
    host: '127.0.0.1',
    port: 9090,
    path: '/',
    headers: {
        'content-type': 'text/plain',
        'content-length': message.length
    }
};

const req = http.request(options, res => {
    let content = ''

    // acumula dados de resposta
    res.on('data', data => {
        content += data;
    })

    // imprime todos os dados acumulados
    res.on('end', () => {
        console.log(content)
    })
})

// envia a request
req.write(message)
req.end();