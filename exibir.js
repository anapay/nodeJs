const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Post = require("./models/Post")




// config template engine

app.engine("handlebars", handlebars({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// config body-parser

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//rotas 

app.get("/", function (req, res) {
    Post.findAll({ raw: true }).then(function (posts) {
        console.log(posts)
        res.render("home", { posts: posts })

    })

})

app.get("/cad", function (req, res) {
    res.render("formulario")

})
// rota que recebe os dados do formulario

app.post("/enviar", function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo

    }).then(function () {
        res.redirect("/")
    }).catch(function () {
        res.send("Erro ao criar post!" + erro)
    })
})
app.get("/deletar/:id", function (req, res) {
    Post.destroy({ where: { "id": req.params.id } }).then(function () {
        res.send("Postagem deletada com sucesso!")
    }).catch(function (erro) {
        res.send("Esse post não existe")

    })
})

app.listen(8891, function () {
    console.log("Server initialized url http://localhost:8891")

});