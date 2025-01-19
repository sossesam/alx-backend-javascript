const http = require('http');

const app = http.createServer((req, res) => {
  res.writeHead(200);  
  res.write('Hello ALX!');
  res.end(); // end the response
}).listen(1245);

module.exports = app;
