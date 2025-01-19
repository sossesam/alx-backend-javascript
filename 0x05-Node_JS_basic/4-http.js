const http = require('http');

const app = http.createServer((req, res) => {
  res.write('Hello ALX!');
  res.writeHead(200, { 'Content-Type': 'text/plain' });  
  res.end(); // end the response
}).listen(1245);

module.exports = app;
