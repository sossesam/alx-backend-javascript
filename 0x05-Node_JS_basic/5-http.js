var http = require('http');
let csv = "database.csv"
const countStudents = require('./3-read_file_async');


let app = http.createServer(function(req, res){
    res.setHeader("Content-Type", "text/html")
    switch(req.url){
        case "/":
            res.setHeader("Content-Type", "text/html")
            res.end("Hello Holberton School!")

        case "/students":
            countStudents(csv)



            
            

    }
    
}).listen(1245)

module.exports = app