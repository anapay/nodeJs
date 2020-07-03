
//conectando-se ao bancco
const mongoose = require("mongoose")

//configurando monggose
monggose.Promisse = global.Promise;
mongoose.connect("mongodb://localhost/teste",{
    useMongoClient: true

}).then(() => {
    console.log("Mongodb conectado!");
    

}).catch((err) =>{
    console.log("Erro ao se conectar com o banco:"+err);
    

})