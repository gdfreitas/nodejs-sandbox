const express = require('express');
const fb = require('fibonacci');

const runFibonacci = require('./workers/fibonacci-worker');
const runFibonacciPool = require('./workers/fibonacci-worker-pool');
const runFibonacciShared = require('./workers/fibonacci-worker-shared');

const SERVER_PORT = process.env.SERVER_PORT || 3000;

const app = express();

app.get('/fibonacci', (req, res) => {
  console.log('> fibonacci')
  const number = fb.iterate(10000);
  res.send(number);
});

app.get('/fibonacci-threaded', async (req, res) => {
  console.log('> fibonacci-threaded')

  runFibonacci({ iterations: 10000 })
    .then(result => console.info(result));

  res.send('processing');
});

app.get('/fibonacci-threaded-pool', async (req, res) => {
  console.log('> fibonacci-threaded-pool')

  runFibonacciPool({ iterations: 10000 })
    .then(result => console.info(result));

  res.send('processing');
});

app.get('/fibonacci-threaded-shared', async (req, res) => {
  console.log('> fibonacci-threaded-shared')

  /**
   * Utiliza "SharedArrayBuffer" para compartilhar dados entre workers
   */
  const sharedUint8Array = new Uint8Array(new SharedArrayBuffer(4));
  for (let i = 0; i < 4; i++) {
    runFibonacciShared({ iterations: 1000, position: i, arr: sharedUint8Array })
      .then(result => console.log(result));
  }

  res.send('processing');
});

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));