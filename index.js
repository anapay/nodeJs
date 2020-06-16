const express = require("express");

const app = express();

app.get("/", function (req, res) {
    
    res.send("welcome to my app!")
});

app.get("/on", function (req, res) {

    res.send("about this page")
    
});

app.get("/blog", function (rq, res) {
    res.send("Welcome to my blog!")
    
});




















app.listen(8081, function () {
    console.log("Server initialized url http://localhost:8081")

});