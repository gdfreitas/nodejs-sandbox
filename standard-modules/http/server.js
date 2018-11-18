const router = require('./router')

const SERVER_PORT = 80;
const app = router(SERVER_PORT)

app.interceptor((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

app.get('/tech', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write(`<h1>Conteúdos sobre tecnologia</h1>`, 'utf-8')
})

app.get('/health', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.write(`<h1>Conteúdos sobre saúde</h1>`, 'utf-8')
})

app.post('/health', (req, res) => {
    res.setHeader('Content-Type', 'application/json;chartset=UTF-8')
    console.log(req.body)
    res.end()
})

app.get('/', (req, res) => {
    const page = `
        <h1>Home</h1>
        <ul>
            <li><a href="/tech">Tecnologias</a></li>
            <li><a href="/health">Saúde</a></li>
        </ul>
    `
    res.write(page, 'utf-8')
})

app.options('/', (req, res) => {
    res.end()
})
