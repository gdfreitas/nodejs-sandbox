let disciplinas = [
  ['Cálculo 1', 'Física 1', 'IoT 1', 'Desejo Técnico', 'Álgebra Linear e Geometria Analítica'],
  ['Cálculo 2', 'Física 2', 'Estatística e Probabilidade', 'Programação e Estrutura de Dados'],
  ['Circuitos Eletrônicos', 'Sistemas Digitais', 'Gestão de Pessoas', 'Criatividade e Inovação'],
  ['Visão 360',
    ['TCC 1', 'TCC 2',
      ['Tópicos Especiais']
    ]
  ]
]

/**
 * O flat é utilizado para "achatar" os elementos de um array, permite de forma recursiva
 * que seja informado um nível de profundidade para este processamento, o padrão é 1.
 *
 * Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 */
let deepFlatLevel = 2;
console.log(disciplinas.flat(deepFlatLevel));

/**
 * Ao infinito e além
 */
console.log(disciplinas.flat(Infinity));

/**
 * O flatMap é idêntico a um map seguido de um flat, mapeando cada elemento
 * usando a função de mapeamento e posteriormente "nivelando" em uma nova array (nível de profundidade é 1!)
 *
 * Docs: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap
 */
let notas = [7.8, 9.4, 6.7, 5.9];

let usingFlat = notas
  .map(nota => [nota, Math.ceil(nota)])
  .flat();

console.log(usingFlat);

let usingFlatMap = notas
  .flatMap(nota => [nota, Math.ceil(nota)]);

console.log(usingFlatMap);

