const express = require('express')
const app = express()
const PORT = 9000

const redis = require('redis')
const redisClient = redis.createClient()

const utils = require('./utils')(redisClient)

const findBy = (id) => {
    const fakeTimeout = parseInt(Math.random() * 2000);
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(id), fakeTimeout)
    })
}

app.get('/', (req, res) => res.send('caching things'))

app.get('/:id', async (req, res) => {
    const id = req.params.id
    const cached = await utils.getCache(id)

    if (cached) {
        res.send(`ID = ${JSON.stringify(cached)} (cached redis)`)
    } else {
        let notCached = await findBy(id)
        await utils.setCache(id, notCached);
        res.send(`ID = ${JSON.stringify(notCached)} (database)`)
    }
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))