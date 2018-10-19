const key = 'something';

// modo convencional só permite após declaração do objeto
const object1 = {
}
object1[key] = 'not is cool'

console.log(object1.something); // not is cool

// computed object keys: permite atribuir dinânicamente na criação de um objeto o valor do atributo/key
const object2 = {
    [key]: 'is cool'
}

console.log(object2.something); // is cool