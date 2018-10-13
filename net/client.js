const net = require('net')

const client = net.connect(3000);

client.on('connect', () => {
    client.write('Hello, I am the Client!')
})

client.on('data', message => {
    console.log(message.toString())
})

client.on('end', () => {
   console.log('disconnected from server');
   process.exit(1);
});

process.stdin.on('readable', () => {
    let message = process.stdin.read();
    if (!message) return;
    message = message.toString().replace(/(\n|\r)/g, '')
    // console.log(`Enviando: ${message}`);
    client.write(message)
})