/**
 * É um tipo primitivo que representará números inteiros e não têm limite máximo de tamanho, sendo seu limite
 * a memória do sistema
 *
 * Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

/**
 * Saída:
 * number
 */
console.log(typeof 123)

/**
 * Saída:
 * bigint
 */
console.log(typeof 123n)

/**
 * Saída
 * true
 */
console.log(42n == 42)

/**
 * Saída
 * false
 */
console.log(42n === 42)

/**
 * Saída
 * true
 */
console.log(42n === BigInt(42))

/**
 * Saída
 * bigint Zero é falso
 */
if (0n) {
  console.log('bigint Zero é verdadeiro')
} else {
  console.log('bigint Zero é falso')
}

/**
 * Operações aritméticas com Number
 * Saída
 * 2
 */
console.log((1 + 2 - 2) * 2 ** 2 / 2 % 3)

/**
 * Operações aritméticas com BigInt
 * Saída
 * 2n
 */
console.log((1n + 2n - 2n) * 2n ** 2n / 2n % 3n)

/**
 * Divisões que geram decimais
 * Saídas:
 * Number > 2.5
 * BigInt > 2n
 */
console.log(10 / 4)
console.log(10n / 4n)

/**
 * Não pode usar Number e BigInt em mesma operações
 *
 * Saída:
 * TypeError: Cannot mix BigInt and other types, use explicit conversions
 */
console.log(25 + 25n);
