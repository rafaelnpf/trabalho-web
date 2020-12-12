const express = require('express');
const bodyParser = require('body-parser');
require('marko/node-require').install();
require('marko/express');

const app = express();
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(methodOverride(function (requisicao, resposta) {
    if (requisicao.body && typeof requisicao.body === 'object' && '_method' in requisicao.body) {
        var method = requisicao.body._method;
        delete requisicao.body._method;
        return method;    
    }
}))

app.use('/estatico', express.static('src/app/public'));

const rotas = require('../app/rotas/rotas.js');

rotas(app);

module.exports = app;