/**
 * Simula um processamento durante determinado período de tempo
 * @param {Number} duration in milliseconds
 */
function simulate(duration) {
  const start = Date.now();

  while (Date.now() - start < duration) { }
}

module.exports = {
  simulate
}