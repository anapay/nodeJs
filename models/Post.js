
// fazendo requisicao do arquivo db

const db = require("./db")

// campos da tabela 

const Post = db.sequelize.define("postagens", {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

//acessando models
module.exports = Post

// Post.sync({force: true}) 
// linha de sincronizacao com o banco usar apenas uma vez para nao recriar