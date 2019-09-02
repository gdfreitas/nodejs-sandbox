const fetch = require('node-fetch');
const co = require('co');

const POSTS_API_URL = 'http://jsonplaceholder.typicode.com/posts/1';
const TODOS_API_URL = 'https://jsonplaceholder.typicode.com/todos/1';

/**
 * Normal fetch e resolução de promises
 */
fetch(POSTS_API_URL)
  .then(response => response.json())
  .then(console.log);

/**
 * Cria um generator que faz requisição para uma API,
 * faz o parse para json e imprime o title do objeto
 */
function* getFetchApiGenerator() {
  const postsResponse = yield fetch(POSTS_API_URL);
  const post = yield postsResponse.json();
  const postTitle = post.title;

  const todosResponse = yield fetch(TODOS_API_URL);
  const todo = yield todosResponse.json();
  const todoTitle = todo.title;

  console.log('Post.title', postTitle);
  console.log('Todo.title', todoTitle);
}

/**
 * "co" é uma lib que permite controle de fluxo baseado em generator
 * A cada "yield" a lib fica responsável por resolver a promise e continuar o fluxo
 * de execução
 */
co(getFetchApiGenerator())

/**
 * Implementação de iterador de fluxo semelhante ao da lib "co"
 */
function run(generator) {
  const iterator = generator();

  function iterate(iterator, previousData) {
    const iteration = iterator.next(previousData);

    if (iteration.done) {
      console.log('[iterator] iteration is done!')
      return iteration.value;
    }

    const promise = iteration.value;

    return promise.then(data => iterate(iterator, data))
  }

  iterate(iterator);
}

run(getFetchApiGenerator);
