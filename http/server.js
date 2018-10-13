const http = require('http')

const { SERVER_PORT } = require('../utils/constants');
const templateBuilder = require('../utils/template-builder')

const server = http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write(getTemplate(req.url), 'utf-8');
    res.end();
});

const getTemplate = (url) => {
    switch (url) {
        case '/tech':
            return templateBuilder.build(`<h1>Conteúdos sobre tecnologia</h1>`);
        case '/health':
            return templateBuilder.build(`<h1>Conteúdos sobre saúde</h1>`);
        default:
            return templateBuilder.build(`
            <h1>Home</h1>
            <ul>
                <li><a href="/tech">Tecnologias</a></li>
                <li><a href="/health">Saúde</a></li>
            </ul>
            `);
    }
}

server.listen(SERVER_PORT)