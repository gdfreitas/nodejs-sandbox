const async = require('async')
const _ = require('lodash')

const WORKERS_COUNT = 2 // quantidade de workers à serem executados em paralelo para consumir a fila

let queue = async.queue((task, callback) => {
    console.log(`Consumindo <${task.name}> <-> Queue: <${queue.length()}>`)

    setTimeout(() => {
        if (task.name === 'task5') {
            callback('Ocorreu um erro no processamento')
        } else {
            callback(null, { status: 200 })
        }
    }, _.random(1000, 3000))
}, WORKERS_COUNT)

// callback quando a fila não possuir mais nenhum
queue.drain = () => {
    console.log('A fila está vazia')
}

_generateRandomTasks(10)

function _generateRandomTasks (times) {
    var generatedTasks = _.times(times, _.uniqueId.bind(null, 'task'))

    _.each(generatedTasks, task => {
        queue.push({ name: task }, error => {
            if (error) {
                console.log(error)
            }
        })
    })
}
