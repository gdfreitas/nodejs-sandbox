const orange = Symbol('Laranja')

/**
 * Saída:
 * Symbol(Laranja)
 */
console.log(orange);

/**
 * Saída:
 * Symbol(Laranja)
 */
console.log(String(orange));

/**
 * Saída:
 * Symbol(Laranja)
 */
console.log(orange.toString());

/**
 * Como pegar a descrição do symbol?
 * Saída:
 * Laranja
 */
console.log(orange.description);
