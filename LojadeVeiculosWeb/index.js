const app = require('./src/config/custom-express.js');
const conexao = require('./src/infra/conexao.js');
const tabelas = require('./src/infra/tabelas.js');
const tabela = require('./src/infra/tabelas.js');


conexao.connect(msg => {
    if(msg){
        console.log(msg);
    }else{
        console.log("Conectado com sucesso");
        tabelas.inicializa(conexao);

        app.listen(3000,        
            function()
            {
                console.log("Servidor rodando na porta 3000!");
            }
        );
    }
});
