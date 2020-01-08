'use strict';

const express = require('express');

/**
 * Get port from environment and store in Express.
 */
// const port = normalizePort(config.get('server:port'));
const PORT = 8080;
// app.set('port', port);
const HOST = '0.0.0.0';

// App
const app = express();

app.listen(PORT, HOST);
console.log('Running on http://${HOST}:${PORT}');
