/**
 * 1. Registra um callback de timeout de 0ms
 */
setTimeout(() => console.log('Timeout callback executed'), 0)

/**
 * 2. Registra um callback de "nextTick"
 */
process.nextTick(() => console.log('process.nextTick callback executed'))

/**
 * 3. Executa uma Promise
 */
new Promise((resolve, reject) => console.log('Promise callback executed'))

/**
 * 4. Executa um console log
 */
console.log('Sync. logging executed')

/**
 * SAÍDAS
 * Promise callback executed
 * Sync. logging executed
 * process.nextTick callback executed
 * Timeout callback executed
 */