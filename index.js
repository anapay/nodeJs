const express = require("express");

const app = express();

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/html/index.html");

});

app.get("/on", function (req, res) {

    res.sendFile(__dirname + "/")

});

app.get("/blog", function (rq, res) {
    res.sendFile(__dirname + "/h")

});

app.get("/Hi/:name/:office/:mother", function (req, res) {
    res.send("<h1>Hi! " + req.params.name + "</h1>" + "<h2>your profession " + req.params.office + "</h2>" + "<h3>mother " + req.params.mother + "</h3>");
    //adicionando parametros
});




















app.listen(8081, function () {
    console.log("Server initialized url http://localhost:8081")

});