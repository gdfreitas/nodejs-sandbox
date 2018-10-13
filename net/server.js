const net = require('net')

let connections = [];

net.createServer(connection => {

    connection.setTimeout(0)

    connections.push(connection);

    connection.write('Hello, I am the server!');

    connection.on('data', message => {
        var command = message.toString()

        if (command.indexOf('/quit') === 0) {
            connection.destroy();
            return;
        }

        if (command.indexOf('/nickname') === 0) {
            const nickname = command.replace('/nickname ', '');
            broadcast(`${connection.nickname || '<sem_nickname>'} é agora ${nickname}`)
            connection.nickname = nickname;
            return;
        }

        broadcast(`${connection.nickname || '<sem_nickname>'} > ${message}`, connection);
    })

    connection.on('error', (err) => console.log('Caught flash policy server socket error: ', err.stack))

    connection.on('end', () => {
        broadcast(`${connection.nickname || '<sem_nickname>'} saiu.`, connection);
        connections.splice(connections.indexOf(connection), 1);
    })

}).listen(3000)

const broadcast = (message, origin) => {
    connections.forEach(connection => {
        if (connection === origin) return;
        connection.write(message)
    })
}