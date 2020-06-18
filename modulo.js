
const Sequelize = require('sequelize')
const sequelize = new Sequelize('app', 'root', 'joao', {
    host: "localhost",
    dialect: 'mysql'
});
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: "Doces ou travessuras?",
    conteudo: "rick-or-treat é uma brincadeira tradicional do Halloween"

});

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING

    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});
Usuario.create({
    nome: "Pedro",
    sobrenome: "Segundo",
    idade: 24,
    email: "aercde@nmhh"
})

// Postagem.sync({ force: true })
// Usuario.sync({force: true})

