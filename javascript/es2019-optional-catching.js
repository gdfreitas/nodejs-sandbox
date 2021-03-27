/** Optional Catch Binding ES2019 */

try {
  throw 'An error'
} catch (error) {
  console.error('An error ocurred', error);
}

/** Useful when error variable binding is not used */
try {
  throw 'An error'
} catch {
  console.error('Ocorreu um erro')
}
