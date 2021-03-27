/* IIFE: Immediately Invoked Function Expression */

// definição de função convencional
// também conhecida como: 'function definition', 'function declaration' ou 'function statement'
function hello() {
  console.log('Hello')
}

// invocação da função declarada anteriormente
hello();

// function expressions - funções escritas em forma de expressões
// 1. anonymous function expression (muito utilizado em callbacks)
const helloWorld = function (suffix) {
  console.log(`Hello ${suffix}`)
}
helloWorld('world');

// 2. named function expression (geralmente é utilizado com recursão)
const fibo = function fibonacci(value) {
  if (value <= 1) {
    return 1;
  }
  return fibonacci(value - 1) + fibonacci(value - 2);
}
// fibonacci(10) => ReferenceError: fibonacci is not defined
// a function-expression "fibonnaci" só pode ser chamada dentro do seu bloco
console.log(fibo(10))


// IIFE - Immediately-invoked Function Expression
// Executa assim que é invocada, e não poderá mais ser chamada

// possui algumas diferentes formas de escrita
// 1. esta necessita de algum operador unário (ex: !,~,+,-,*) para indicar para o interpretador que tudo que vir posteriormente
//    será uma expressão, evitando erro de sintáxe que obriga um nome para declaracão de funções ex: `function nome() {}`
~function () {
  console.log('Hello from IIFE (~)');
}();

// 2.
void function () {
  console.log('Hello from IIFE (void)');
}();

// 3.1
(function () {
  console.log('Hello from IIFE (parenthesis 1)');
}());

// 3.2
(function () {
  console.log('Hello from IIFE (parenthesis 2)');
})();

// 4
(function init() {
  console.log('Hello from IIFE (init)');
})();

// 5. SyntaxError, sem os parênteses ao redor, isso se torna uma definição de função e logo não pode ter `();`
// function init() {
//     ...
// }();

// 6. SyntaxError, sem os parênteses ao redor, isso se torna uma definição de função e logo não pode ser anônima, precisa de nome
// function () {
//     ...
// }();

// 7. escopo de variável utilizando 'var'
(function init() {
  var valor = 10.0;
  console.log('valor', valor); // valor 10
}());
// ReferenceError: valor is not defined
// console.log('valor', valor);

// 8. com retorno
let result = (function () {
  return 'value from IIFE'
}());
console.log(result);

// 9. parâmetros
(function modulo(jQuery, lodash) {
  jQuery.select()
  lodash.find()
}({ select: () => console.log('select') }, { find: () => console.log('find') }));

// 10. Counter com variáveis privadas
var Paginator = (function paginator() {
  var page = 0;
  return {
    getCurrentPage: () => page,
    getNextPage: () => ++page
  }
}());
console.log(Paginator.getCurrentPage())
console.log(Paginator.getNextPage())
console.log(Paginator.getCurrentPage())
console.log(Paginator.getNextPage())
console.log(Paginator.getCurrentPage())

// 11. Os parênteses são necessários somente quando o interpretador não consegue identificar se é uma function expression um statement
var expressao = function () {
  console.log('value from IIFE')
}();
