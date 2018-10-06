const foo = { name: 'Thomas', age: 30, nervous: false };
const bar = { name: 'Paul', age: 40, nervous: false };
const baz = { name: 'Ana', age: 50, nervous: true };

const CONSOLE_COLORS_REF = {
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",

    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",

    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m",
};

// ES6
console.log({ foo, bar, baz })

// CONSOLES (Node.js)
console.log(`${CONSOLE_COLORS_REF.BgCyan}Hello, world!${CONSOLE_COLORS_REF.Reset}`)

// BROWSERS 
console.log('%cHello, world', 'color: orange; font-weight: bold;' )

console.time('whileBenchmark')

let i = 0;
while (i < 1000000) { i ++ }

console.timeEnd('whileBenchmark')

console.trace('Hello, Im logging from here 😭')