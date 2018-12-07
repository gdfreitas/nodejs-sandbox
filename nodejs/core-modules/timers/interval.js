// função setInterval customizada utilizando setTimeout
const interval = (callback, time) => {
    setTimeout(() => {
        callback()
        interval(callback, time)
    }, time)
}

interval(() => {
    console.log('>', new Date())
}, 2000)
