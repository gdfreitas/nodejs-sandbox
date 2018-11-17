const numeral = require('numeral')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const memoryLeak = new Array(100000)
    res.send(`array size ${memoryLeak.length}`)
})

app.listen(80, () => console.log(`server running`))

setInterval(() => {
    global.gc()
    const { rss, heapTotal } = process.memoryUsage()
    console.log('rss', numeral(rss).format('0.0 ib'), 'heapTotal', numeral(heapTotal).format('0.0 ib'))
}, 2000)

// node -trace-gc --expose-gc index.js
