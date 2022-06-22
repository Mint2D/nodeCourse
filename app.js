//main modules
const http = require('http');
//custom modules
const routes = require('./routes');

const server = http.createServer(routes.handler);

server.listen(3000)