let userAges = {
  gabriel: 23,
  ana: 19,
  pedro: 21,
  maria: 22
}

/**
 * Constrói uma matriz contendo todos os pares [key, value] das propriedades do objeto
 */
let matriz = Object.entries(userAges);
console.log(matriz)

/**
 * Constrói um objeto a partir de uma matriz de pares [key, value] (reverso ao Object.entries)
 */
let objeto = Object.fromEntries(matriz);
console.log(objeto)

/**
 * Exemplo de uso: transformar em uma matriz para utilizar os métodos de Array para aplicar um filtro
 */
let maioresDeVinte = matriz.filter(([nome, idade]) => idade >= 20)
console.log(Object.fromEntries(maioresDeVinte))
