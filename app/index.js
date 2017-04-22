'use strict';

const config = require('./config');

// Social Authentication Logic
require('./auth')();

// Create an IO Server instance
let ioServer = app => {
    const server = require('http').Server(app);

    return server;
}

module.exports = {
    router: require('./routes')(),
    session: require('./session'),
    ioServer,
    logger: require('./logger')
}