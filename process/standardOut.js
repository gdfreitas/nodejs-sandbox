var logger = {
    log: msg => {
        process.stdout.write(`${msg}\n`);
    },
    error: msg => {
        process.stderr.write(`${msg}\n`);
    }
}

logger.log('Hello, world!')
logger.error('Errou!')

// Permite direcionar saídas de streams padrões
// `node standardOut.js 1>out.log 2>error.log`

// notar que quando executado para saída em arquivos *.log o TTY é false, logo que não é terminal
logger.log('Hello, world!' + !!process.stdout.isTTY) 
logger.error('Errou!' + !!process.stderr.isTTY)