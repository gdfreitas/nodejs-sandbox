/**
 * Houve uma mudança no algoritmo de ordenação para evitar casos em que ocorre o
 * "unstable sorting", o acaba por ordenar de formas diferentes itens que possuem
 * o mesmo valor pro algoritmo de ordenação
 *
 * Ex: lista de alunos, ordenando por nota, e há mais de um aluno com a mesma nota 5, a ordem
 * dos mesmos poderiam ser invertidas conforme a execução, trazendo assim, a mesma lista em
 * ordens diferentes em cada execução.
 */

const people = [
  { name: 'Gabriel', age: 23 },
  { name: 'Ana', age: 21 },
  { name: 'Pedro', age: 27 },
  { name: 'João', age: 21 },
]

let ordenados = people.sort((a, b) => a.age - b.age)
console.log(ordenados);
