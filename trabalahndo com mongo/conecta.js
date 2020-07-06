
//conectando-se ao bancco
const mongoose = require("mongoose")

//configurando monggose
mongoose.Promisse = global.Promise;
mongoose.connect("mongodb://localhost/teste", {
    useMongoClient: true

}).then(() => {
    console.log("Mongodb conectado!");


}).catch((err) => {
    console.log("Erro ao se conectar com o banco:" + err);


})
//definindo model usuarios
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String,
        require: false
    }
})
//colletction 
mongoose.model("usuarios", UsuarioSchema)
//criando novo usuario 
const novoUsuario = mongoose.model("usuarios")

new novoUsuario({
    nome: "Joao",
    sobrenome: "vitor",
    email: "Joao@vitor.com",
    idade: 18,
    pais: "Brasil"
}).save().then(() => {
    console.log("Usuario criado com sucesso")

}).catch((err) => {
    console.log("Erro ao cadastrrar usuario: " +erro)

})