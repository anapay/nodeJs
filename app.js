var http = require('http');

http.createServer(function(req, res){
    res.end("Hello world! Welcome to my website.")


}).listen(8085);
console.log("Servidor ativo!")