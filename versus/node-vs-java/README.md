# Node.js versus Java

## Testes

Objetivo calcular tempo necessário para identificar números primos até 1.000.000

### Javascript

```javascript
var isPrime = function (number) {
    if (number < 2) return false
    for (var i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) return false
    }
    return true
}

console.time('primes')
var number = 0
var numberOfPrimes = 0
while (true) {
    if (isPrime(++number)) numberOfPrimes++
    if (numberOfPrimes === 1000000) break
}
console.log(number)
console.timeEnd('primes')

```

### Java

```java
import java.util.Date;

public class Primes {

    public static void main(String args[]) {
        new Primes().calculatePrimes();
    }

    public void calculatePrimes() {
        long start = new Date().getTime();
        int number = 0;
        int numberOfPrimes = 0;
        while(true) {
            if(isPrime(++number)) numberOfPrimes++;
            if(numberOfPrimes == 1000000) break;
        }
        long end = new Date().getTime();
        System.out.println(number);
        System.out.println("primes: " + (end - start) + "ms");
    }

    public boolean isPrime (int number) {
        if(number < 2) return false;
        for (int i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
            if (number % i == 0) return false;
        }
        return true;
    };
}
```

### Resultados

#### JVM

```shell
$ java Primes
15485863
primes: 9860ms
```

#### Node.js

```shell
$ node primes
15485863
primes: 11661.499ms
```