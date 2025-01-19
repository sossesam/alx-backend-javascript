const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });  // write a response to the client
  res.write('Hello ALX!');
  res.end(); // end the response
}).listen(1245);

module.exports = app;
