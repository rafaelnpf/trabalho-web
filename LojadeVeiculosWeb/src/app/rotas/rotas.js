const conexao = require('../../infra/conexao.js');
const ProdutosDAO = require('../../models/produtos-dao.js');
const FuncionariosDAO = require('../../models/funcionarios-dao.js');

module.exports = (app) => {

    app.get('/', function (requisicao, resposta) {
        resposta.marko(require('../views/index.marko'));
    });

    app.get('/produtos', function (requisicao, resposta) {

        const produtosDAO = new ProdutosDAO(conexao);

        produtosDAO.lista().then(resultados => {
            resposta.marko(
                require('../views/produtos/lista/lista.marko'),
                { produtos: resultados }
            );

        }).catch(msgErro => console.log(msgErro));

    });

    app.get('/produtos/form', function (requisicao, resposta) {

        resposta.marko(
            require('../views/produtos/form/form.marko'),  {produto: {}}
        );

    });

    app.get('/produtos/form/:id', function (requisicao, resposta) {

        const id = requisicao.params.id;
        const produtosDAO = new ProdutosDAO(conexao);
        produtosDAO.buscaPorId(id)
        .then(produto => 
            resposta.marko(require('../views/produtos/form/form.marko'),
            {produto: produto})
            ).catch(msgErro => console.log(msgErro))

    });

    app.post('/produtos',function(requisicao, resposta) {

        const produtosDAO = new ProdutosDAO(conexao);

        produtosDAO.adicionar(requisicao.body)
            .then(resposta.redirect('/produtos'))
            .catch(erro => console.log(erro));

    });

    app.put('/produtos',function(requisicao, resposta) {

        const produtosDAO = new ProdutosDAO(conexao);

        produtosDAO.alterar(requisicao.body)
            .then(resposta.redirect('/produtos'))
            .catch(erro => console.log(erro));

    });

    app.delete('/produtos/:id', (requisicao, resposta) => {
        const id = requisicao.params.id;
        const produtosDAO = new ProdutosDAO(conexao);
        
        produtosDAO.remover(id)
        .then( () => resposta.status(200).end())
        .catch( msgErro => console.log(msgErro))


    });

    app.get('/produtos/incrementar/:id', function (requisicao, resposta) {

        const id = requisicao.params.id;
        const produtosDAO = new ProdutosDAO(conexao);
        produtosDAO.incrementar(id)
        .then(produto => 
            resposta.marko(require('../views/produtos/form/form.marko'),
            {produto: produto})
            ).catch(msgErro => console.log(msgErro))

    });


    app.get('/funcionarios', function (requisicao, resposta) {

        const funcionariosDAO = new FuncionariosDAO(conexao);

        funcionariosDAO.lista().then(resultados => {
            resposta.marko(
                require('../views/funcionarios/lista/lista.marko'),
                { funcionarios: resultados }
            );

        }).catch(msgErro => console.log(msgErro));

    });

    app.get('/funcionarios/form', function (requisicao, resposta) {

        resposta.marko(
            require('../views/funcionarios/form/form.marko'),  {funcionario: {}}
        );

    });

    app.get('/funcionarios/form/:id', function (requisicao, resposta) {

        const id = requisicao.params.id;
        const funcionariosDAO = new FuncionariosDAO(conexao);

        funcionariosDAO.buscaPorId(id)
        .then(funcionario => 
            resposta.marko(require('../views/funcionarios/form/form.marko'),
            {funcionario: funcionario})
            ).catch(msgErro => console.log(msgErro))

    });

    app.post('/funcionarios',function(requisicao, resposta) {

        const funcionariosDAO = new FuncionariosDAO(conexao);

        funcionariosDAO.adicionar(requisicao.body)
            .then(resposta.redirect('/funcionarios'))
            .catch(erro => console.log(erro));

    });

    app.put('/funcionarios',function(requisicao, resposta) {

        const funcionariosDAO = new FuncionariosDAO(conexao);

        funcionariosDAO.alterar(requisicao.body)
            .then(resposta.redirect('/funcionarios'))
            .catch(erro => console.log(erro));

    });

    app.delete('/funcionarios/:id', (requisicao, resposta) => {
        const id = requisicao.params.id;
        const funcionariosDAO = new FuncionariosDAO(conexao);
        
        funcionariosDAO.remover(id)
        .then( () => resposta.status(200).end())
        .catch( msgErro => console.log(msgErro))


    });
}