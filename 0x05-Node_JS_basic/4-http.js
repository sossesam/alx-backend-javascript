var http = require('http');
const countStudents = require('./3-read_file_async');

let app = http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);

module.exports = app