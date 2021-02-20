const baseRotas = require('./baseRotas');
const usuarioRotas = require('./usuarioRotas');

module.exports = (app) => {
    baseRotas(app);
    usuarioRotas(app);

}