const express = require('express');
const bodyparser = require('body-parser');
const rotas = require('../app/rotas/rotas');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

rotas(app);



module.exports = app;