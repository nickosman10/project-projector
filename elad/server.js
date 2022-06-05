// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', function(request) {
    const connection = request.accept(null, request.origin);

    // setInterval(() => {
    //     connection.sendUTF('replace video!');
    // }, 35000);

    const RPiGPIOButtons = require('rpi-gpio-buttons');
    let buttons = new RPiGPIOButtons({ pins: [17] });
    buttons.on('clicked', pin => {
        connection.sendUTF('replace video!');
    });

    buttons
        .init()
        .catch(error => {
        console.log('ERROR', error.stack);
        process.exit(1);
    });

    connection.on('message', function(message) {
      console.log('Received Message:', message.utf8Data);
    //   connection.sendUTF('Hi this is WebSocket server!');
    });
    connection.on('close', function(reasonCode, description) {
        console.log('Client has disconnected.');
    });
});