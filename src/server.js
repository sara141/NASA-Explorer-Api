const http = require('http');
const router = require('./router');
const fs = require('fs');
const path = require('path');

const port = 3000;
const server = http.createServer(router);

server.listen(port);
console.log("Server is up runnig on port " + port);
