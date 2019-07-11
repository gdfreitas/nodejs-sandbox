const { sum } = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {

  // o "expect" "toBe" é chamado de matcher
  // Documentação com os demais matchers disponíveis: https://jestjs.io/docs/en/using-matchers
  expect(sum(1, 2)).toBe(3);

});