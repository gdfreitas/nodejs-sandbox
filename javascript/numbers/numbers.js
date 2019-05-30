var n1 = 1959.3

var fixed = n1.toFixed(2)
console.log(fixed) // 1,959.30
console.log(typeof fixed) // string

var brl = n1.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})
console.log(brl) // R$ 1,959.30
console.log(typeof brl) // string

var usd = n1.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'USD'
})
console.log(usd) // US$ 1,959.30

var eur = n1.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'EUR'
})
console.log(eur) // € 1,959.30

