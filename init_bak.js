#!/usr/bin/env node

'use strict';

// load the Node.js TCP library
const net = require('net');

const PORT = 5000;
const ADDRESS = '127.0.0.1';

let server = net.createServer(onClientConnected);
server.listen(PORT, ADDRESS);

function onClientConnected(socket) {
    let clientName = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`${clientName} connected.`);

    socket.on('data', (data) => {
        let m = data.toString().replace(/[\n\r]*$/, '');
        console.log(`${clientName} said: ${m}`);
        socket.write(`We got your message (${m}). Thanks!\n`); // Return msg to client.
    });

    // Triggered when this client disconnects
    socket.on('end', () => {
        console.log(`${clientName} disconnected.`);
    });

}

console.log(`Server started at: ${ADDRESS}:${PORT}`);