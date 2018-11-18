const { Client } = require('pg')
const connection = require('./connection.js')
const client = new Client(connection)

client.connect()

const query = `SELECT
  ingredient.*, item.name AS item_name, item.type AS item_type
FROM
  ingredient
LEFT JOIN
  item ON item.id = ingredient.item_id
WHERE
  ingredient.dish_id = $1`

client.query(query, [1]).then(res => {
    console.log('Ingredients:')
    for (let row of res.rows) {
        console.log(`${row.item_name}: ${row.quantity} ${row.unit}`)
    }

    client.end()
})
