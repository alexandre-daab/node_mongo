const db = require("../../../mongoDB");

class UsuarioDAO{

    async buscarUsuarios(){

        var usuarios = db.Mongoose.model('usuarios', db.usuariosSchema);
        var listaUsuarios = await usuarios.find().sort({nome:1}).skip(0).limit(2).lean();

        return listaUsuarios;
    }
}
module.exports = UsuarioDAO;




