function print() {
  let world = `World!`
  console.log(`Hello ${world}`);
}

/**
 * Saída:
 * [Function: print]
 */
console.log(print);

/**
 * Saída:
 * function print() {
 *   let world = `World!`
 *   console.log(`Hello ${world}`);
 * }
 */
console.log(print.toString());

/**
 * Em que cenário isso seria útil?
 * Isso permite por exemplo, alterar o código de uma função em tempo de execução
 */
eval(print.toString().replace('Hello', 'Olá'))

/**
 * Saída:
 * Olá World!
 */
print();
