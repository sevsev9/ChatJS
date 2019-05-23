const WebSocket = require('ws');
const wss = new WebSocket.Server(
    {port: 8080}
);

rcv_msg = {};

function startServer() {
    wss.on('connection', ws => {
        ws.on('message', message => {
            console.log(message)
        });
        ws.send('ho!')
    })
}