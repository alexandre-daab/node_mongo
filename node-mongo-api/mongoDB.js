const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/alura', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("we're connected!");});

var usuariosSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String
});
module.exports = { Mongoose: mongoose, usuariosSchema: usuariosSchema };