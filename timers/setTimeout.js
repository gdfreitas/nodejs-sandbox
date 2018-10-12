console.log('A', new Date())

var timeoutB = setTimeout(() => {
    console.log('B', new Date())
}, 3000)

// cancela o timeout da referência, também existe para clearInterval
clearTimeout(timeoutB)