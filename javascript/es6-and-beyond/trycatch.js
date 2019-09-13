/**
 * Catch opcional a partir do ES2019
 */

/**
 * Antes: mesmo não utilizando o parâmetro do catch, sua declaração era obrigatória
 */
try {
  throw 'Erro proposital ao executar instrução'
} catch (error) {
  console.error('Ocorreu um erro')
}

/**
 * Depois
 */
try {
  throw 'Erro proposital ao executar instrução'
} catch {
  console.error('Ocorreu um erro')
}
