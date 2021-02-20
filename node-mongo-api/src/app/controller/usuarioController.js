const UsuarioDAO = require("../model/UsuarioDAO")
const appSets = require("../../../appSettings.json");
const Utils = require("../../assets/Utils");

class UsuarioController{

    static rotas(){
        return {
            lista:"/api/usuarios"
        };
    }

    lista(){
        return async (req, res, next) => {
            const db = new UsuarioDAO;

            const usuarios = await db.buscarUsuarios();
            res.send(usuarios);
        };    
    }
}
module.exports = UsuarioController;