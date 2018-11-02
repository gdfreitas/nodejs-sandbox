const pg = require('pg')
const databaseConfig = require('./db.config')

const pool = new pg.Pool(databaseConfig)

pool.query(`INSERT INTO users(id, firstName, lastName) VALUES(1, ‘Shahriar’, ‘Shovon’)`, (err, res) => {
    console.log(err, res)
    pool.end()
})
