const fb = require('fibonacci');

const Pool = require('worker-threads-pool');
const CPUs = require('os').cpus().length;
const pool = new Pool({ max: CPUs });

const { isMainThread, parentPort, workerData } = require('worker_threads');

const runFibonacci = workerData => {
  return new Promise((resolve, reject) => {
    pool.acquire(__filename, { workerData }, (err, worker) => {
      if (err) {
        reject(err);
      }

      console.log(`started worker ${worker.threadId} (pool size: ${pool.size})`);

      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', code => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  });
};

/**
 * Se não for main thread é um dos workers threads
 */
if (!isMainThread) {
  const result = fb.iterate(workerData.iterations);
  /**
   * Envia uma cópia do objeto de resultado para a main thread
   */
  parentPort.postMessage(result);
}

module.exports = runFibonacci;