const router = require('./router')

const { SERVER_PORT } = require('../utils/constants');
const templateBuilder = require('../utils/template-builder')

const app = router(SERVER_PORT)

app.interceptor((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next();
})

app.get('/tech', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write(templateBuilder.build(`<h1>Conteúdos sobre tecnologia</h1>`), 'utf-8');
})

app.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write(templateBuilder.build(`<h1>Conteúdos sobre saúde</h1>`), 'utf-8');
})

app.post('/health', (req, res)=> {
    res.setHeader('Content-Type', 'application/json;chartset=UTF-8')
    console.log(req.body);
    res.end();
})

app.get('/', (req, res) => {

    const page = templateBuilder.build(`
        <h1>Home</h1>
        <ul>
            <li><a href="/tech">Tecnologias</a></li>
            <li><a href="/health">Saúde</a></li>
        </ul>
    `);

    res.write(page, 'utf-8');
})

app.options('/', (req, res) => {
    res.end();
})