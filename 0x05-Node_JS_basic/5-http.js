const http = require('http')
const csv = 'database.csv'
const countStudents = require('./3-read_file_async')

const app = http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'text/html')
  switch (req.url) {
    case '/':
      res.setHeader('Content-Type', 'text/html')
      res.end('Hello Holberton School!')
      /* falls through */

    case '/students':
      countStudents(csv)
  }
}).listen(1245)

module.exports = app
