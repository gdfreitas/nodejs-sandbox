const knex = require('knex')
const connection = require('./connection.js')
const client = knex({
    client: 'pg',
    connection
})

client
    .select(['*', client.ref('item.name').as('item_name'), client.ref('item.type').as('item_type')])
    .from('ingredient')
    .leftJoin('item', 'item.id', 'ingredient.item_id')
    .where('dish_id', '=', 1)
    .debug()
    .then(rows => {
        console.log('Ingredients:')
        for (let row of rows) {
            console.log(`${row.item_name}: ${row.quantity} ${row.unit}`)
        }

        client.destroy()
    })
