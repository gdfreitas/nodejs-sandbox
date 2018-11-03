export default function minhaPromise () {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('OK'), 2000)
    })
}
