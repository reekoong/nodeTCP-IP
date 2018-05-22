#!/usr/bin/env node

'use strict';

// load the Node.js TCP library
const Server = require('./server');

const PORT = 5000;
const ADDRESS = '127.0.0.1';

var server = new Server(PORT, ADDRESS);
server.start(() => {
    console.log(`Server started at: ${ADDRESS}:${PORT}`);
});