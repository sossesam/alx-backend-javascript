const http = require('http');

const app = http.createServer((req, res) => {
  res.write('Hello ALX!'); // write a response to the client
  res.end(); // end the response
}).listen(1245);

module.exports = app;
