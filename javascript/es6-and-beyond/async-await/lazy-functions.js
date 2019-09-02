async function foo() {
  return 42;
}

function bar() {
  return Promise.resolve(96)
}

const f = foo();
console.log(f) // -> Promise
f.then(console.log) // imprime 42 quando chamado (lazy)

const b = bar();
console.log(b)  // -> Promise
b.then(console.log) // imprime 96 quando chamado (lazy)

