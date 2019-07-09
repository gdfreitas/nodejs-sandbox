const express = require('express');
const { Worker } = require('webworker-threads')

const app = express();

app.get('/', (req, res) => {

    const worker = new Worker(function () {
        this.onmessage = function (event) {
            console.log('worker got a message!')

            // REQUIRES NÃO FUNCIONAM!
            // const HeavyWorkerSimulator = require('./heavy-worker-simulator')
            // HeavyWorkerSimulator(event.data);

            const start = Date.now();

            while (Date.now() - start < event.data) { }

            postMessage({
                processed: true,
                message: 'Worker processed succesfully'
            });
        }
    })

    worker.onmessage = function (message) {
        console.log('server got a message from worker', message.data)
        res.send(JSON.stringify(message.data))
    }

    worker.postMessage(3000);
})

app.listen(3000);

// require('http').createServer(function (req, res) {
//     var fibo = new Worker(function () {
//         function fibo(n) {
//             return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
//         }
//         this.onmessage = function (event) {
//             postMessage(fibo(event.data));
//         }
//     });
//     fibo.onmessage = function (event) {
//         res.end('fib(40) = ' + event.data);
//     };
//     fibo.postMessage(40);
// }).listen(3000);