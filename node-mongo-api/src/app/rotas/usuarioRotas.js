const UsuarioController = require('../controller/usuarioController');
const usuarioController = new UsuarioController();
const rotaUsuarios = UsuarioController.rotas(); 

module.exports = (app) => {
    app.route(rotaUsuarios.lista)
        .get(usuarioController.lista())
        //.post(usuarioController.login());
}