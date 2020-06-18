
const Sequelize = require('sequelize');
const sequelize = new Sequelize('app', 'root', 'joao', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(function () {
    console.log("Conectado com sucesso!")

}).catch(function (erro) {
    console.log("Falha ao conectar com o banco: " +erro)
});