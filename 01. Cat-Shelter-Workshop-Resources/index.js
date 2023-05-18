const http = require('http');
const port = 3000;
const handleRequest = require('./main');

const app = http
  .createServer(handleRequest)
  .listen(port, () => console.log('Server started!'));
