const express = require("express");
const app = express();
const Sequelize = require('sequelize')
const handlebars = require('express-handlebars')


// conexao com o banco de dados mysql

const sequelize = new Sequelize('app', 'root', 'joao', {
    host: "localhost",
    dialect: 'mysql'
});

// config template engine

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


//rotas 

app.get('/cad', function(req, res){
    res.render('formulario')

})








app.listen(8081, function () {
    console.log("Server initialized url http://localhost:8081")

});