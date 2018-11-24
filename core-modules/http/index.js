const http = require('http')
const fs = require('fs')

const SERVER_PORT = 3000;

const server = http.createServer((request, response) => {

    // Informações básicas de uma request
    console.log('request.url', request.url)
    console.log('request.method', request.method)
    // console.log('request.headers', request.headers)

    // Fornecer conteúdo no formato documento text/html
    if (request.url === '/html') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write(`
            <html>
                <head>
                    <title>Node.js Server!</title>
                </head>
                <body>
                    <h2>Hello from my Node.js Server!</h2>
                    <h3>Olá do servidor em Node.js!</h3>
                </body>
            </html>
        `, 'utf-8')
        response.end();
    }


    if (request.url === '/json') {
        // Fornecer conteúdo no formato JSON
        if (request.method === 'GET') {
            response.setHeader('Content-Type', 'application/json; charset=utf-8')
            const data = { message: 'Hello, world!', portugues: 'Olá mundo!' };
            response.write(JSON.stringify(data))
            response.end();
        }

        /**
         * curl --header "Content-Type: application/json" 
         *      --request POST 
         *      --data '{"message": "Hello, world!"}' http://localhost:3000/json
         */
        if (request.method === 'POST') {
            const chunks = [];

            request.on('data', (chunk) => {
                console.log('chunk', chunk)
                chunks.push(chunk);
            })

            request.on('end', () => {
                const parsedChunks = Buffer.concat(chunks).toString();
                console.log('parsedChunks', parsedChunks)
                fs.writeFile('message.json', parsedChunks, err => {
                    response.statusCode = 302;
                    response.setHeader('Location', '/')
                    response.end();
                })
            })
        }
    }

    // Fornecendo conteúdo através de um stream de dados
    if (request.url === '/') {
        response.setHeader('Content-Type', 'text/html; charset=utf-8')

        response.write('<p>First chunk of data</p>')
        setTimeout(() => response.write('<p>Third chunk of data</p>'), 1000)
        setTimeout(() => response.write('<p>Fourthy chunk of data</p>'), 2000)
        setTimeout(() => {
            response.write('<p>Fourthy chunk of data</p>')
            response.end() // Fecha a conexão somente aqui
        }, 3000)
        response.write('<p>Second chunk of data</p>')
    }

})

server.listen(SERVER_PORT, () => console.log(`Server is listening on http://localhost:${SERVER_PORT}`))