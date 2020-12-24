const { deepStrictEqual, throws } = require('assert')
const crypto = require('crypto')
const { promisify } = require('util')

// crypto.randomInt disponível no Node acima da v14.10.0
const randomInt = promisify(crypto.randomInt)

/**
 * Exemplos de utilização de Symbol retirados de bibliotecas do código fonte do Node.js
 * Exemplos legais explicados pelo Erick Wendel: https://www.youtube.com/watch?v=xMyL5HokeyM
 */
const kItems = Symbol('items')
const kFormatName = Symbol('formatName')
const kIdKeySize = Symbol('idKeySize')

class Cart {
  constructor() {
    // O membro se torna privado devido a referência ao Symbol que descreve a propriedade não ser acessível externamente ao módulo
    this[kItems] = []
    this[kIdKeySize] = 10
  }

  // Método da classe declarado normalmente
  add(description) {
    this[kItems].push({ description })
  }

  // Método declarado utilizando Symbol se torna privado pelo mesmo citado acima
  [kFormatName](description) {
    return `> ${description}`
  }

  toString() {
    const r = this[kItems]
      .map(item => this[kFormatName](item.description))
      .join('\n')

    return '\n'.concat(r)
  }

  // Possibilita interceptar métodos executados pela linguagem por meio do Symbol (meta programming)
  // Exemplo: String(item) ou item + ''
  [Symbol.toPrimitive](coercionType) {
    if (coercionType !== 'string') throw TypeError('invalid convertion!')
    return this.toString()
  }

  // Possibilita interceptar métodos executados pela linguagem por meio do Symbol (meta programming)
  // Exemplo for (item of []) ou Array.from()
  *[Symbol.iterator]() {
    for (const item of this[kItems]) {
      yield item
    }
  }

  // Possibilita interceptar métodos executados pela linguagem por meio do Symbol (meta programming)
  // Exemplo for await (item of [])
  async *[Symbol.asyncIterator]() {
    for (const item of this[kItems]) {
      const id = await randomInt(this[kIdKeySize])

      yield { id, ...item, }
    }
  }

}

// Testes
(async () => {
  const cart = new Cart()
  cart.add("Lorem")
  cart.add("Ipsum")

  // console.log('cart', cart)
  // console.log('cart.toString()', cart.toString())
  // console.log('cart * 1', cart * 1)
  // console.log('[...cart]', [...cart])

  // Valida uso do toString()
  deepStrictEqual(cart.toString(), '\n> Lorem\n> Ipsum')
  deepStrictEqual(String(cart), '\n> Lorem\n> Ipsum')

  // Valida que não possibilita coerção por multiplicação
  throws(() => cart * 1, { name: "TypeError", message: "invalid convertion!" })

  const expectedItems = [
    { description: "Lorem" },
    { description: "Ipsum" },
  ]

  // Testa a implementação do .iterator para operações com Arrays na instância da classe
  deepStrictEqual([...cart], expectedItems)
  deepStrictEqual(Array.from(cart), expectedItems)

  // Testa uso do for of na instância da classe (Usa o método .iterator)
  {
    const items = []
    for (const item of cart) {
      items.push(item)
    }
    deepStrictEqual(items, expectedItems)
  }

  // Testa uso do for await na instância da classe (Usa o método .asyncIterator)
  {
    const items = []
    for await (const item of cart) {
      items.push(item)
    }

    deepStrictEqual(items.filter(({ id }) => id >= 0).length, 2)

    const expectedKeys = ['id', 'description'];
    deepStrictEqual(Object.keys(items[0]), expectedKeys);
  }

})()
