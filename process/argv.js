// exibi argumentos de linha de comando ao executar modulo
process.argv.forEach(arg => console.log(arg));

var options = process.argv.slice(2)
if (!options.length) return;

options.forEach(option => {
    switch (option) {
        case 'a':
            console.log('pid:', process.pid)
            break;
        case 'b':
            console.log('title:', process.title)
            break;
        case 'c':
            console.log('arch:', process.arch)
            break;
        case 'd':
            console.log('platform:', process.platform)
            break;
    }
})