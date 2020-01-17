function memo(func) {
  var cache = {};
  return function cacher() {
    var key = JSON.stringify(arguments);

    if (cache[key]) {
      // console.log(cache)
      return cache[key];
    }

    var val = func.apply(null, arguments);
    cache[key] = val;
    return val;
  }
}

var fibonacciMemoized = memo((number) => {
  if (number < 2) {
    return 1;
  } else {
    // console.log("loading...");
    return fibonacciMemoized(number - 2) + fibonacciMemoized(number - 1);
  }
})

var fibonacciNotMemoized = (number) => {
  if (number < 2) {
    return 1;
  } else {
    // console.log("loading...");
    return fibonacciNotMemoized(number - 2) + fibonacciNotMemoized(number - 1);
  }
}

// Com entradas de valor baixo, se mostra até mais lento que os cálculos diretamente, pelo fato de ter as verificações do cache
// Com entradas acima de 27 a função com memorização se torna mais performática para o algorítimo de fibonacci

const NUMBER = 27;
console.time('fibonacciMemoized')
console.log(fibonacciMemoized(NUMBER))
console.timeEnd('fibonacciMemoized')

console.time('fibonacciNotMemoized')
console.log(fibonacciNotMemoized(NUMBER))
console.timeEnd('fibonacciNotMemoized')
