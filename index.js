const express = require("express");

const app = express();

app.get("/", function (req, res) {
    
    res.send("welcome to my app!")
//atravez da função send dentro do objeto res estou enviando uma mensagem
});

app.get("/on", function (req, res) {

    res.send("About this page")
    
});

app.get("/blog", function (rq, res) {
    res.send("Welcome to my blog!")
    
});

app.get("/Hi/:name/:office/:mother", function (req, res) {
    res.send("<h1>Hi! " +req.params.name+"</h1>"+"<h2>your profession " +req.params.office+ "</h2>"+"<h3>mother " + req.params.mother +"</h3>");
    
});




















app.listen(8081, function () {
    console.log("Server initialized url http://localhost:8081")

});