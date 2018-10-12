const MAX = 10000;

const generate = () => {
    return Math.floor(Math.random() * MAX);
}

module.exports = {
    generate: generate
}