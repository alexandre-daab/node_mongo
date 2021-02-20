const app = require('./src/config/custom-express');

const port = 5050;

app.listen(port, function(){
    console.log('Servidor Iniciado em: ' + Date() + " na porta " + port);
});


