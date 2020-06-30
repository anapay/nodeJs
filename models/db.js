

// conexao com o banco de dados mysql
const Sequelize = require("sequelize")

const sequelize = new Sequelize("postapp", "ana", "joao", {
    host: "localhost",
    dialect: "mysql"
});


// exportando variaveis
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}