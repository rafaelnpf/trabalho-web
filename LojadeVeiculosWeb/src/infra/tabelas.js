
class Tabelas{
    
    inicializa(conexao){
        this.conexao = conexao;
        this.criarTabelaProdutos();
        this.criarTabelaFuncionarios();
    }

    criarTabelaProdutos(){
        const sql = `
            CREATE TABLE IF NOT EXISTS produtos (
            id INT NOT NULL AUTO_INCREMENT,
            nome VARCHAR(250) NULL,
            descricao text NULL,
            marca VARCHAR(250) NULL,
            preco VARCHAR(20) NULL,
            quantidade BIGINT(20) NULL,
            
            PRIMARY KEY (id)
            )`
        
        this.conexao.query(sql, msg => {
           
            if(msg){
                console.log(msg);
            }else{
                console.log("Tabela Produtos criada com sucesso ou já existe")
            }
       
        });
    }

    criarTabelaFuncionarios(){
        const sql = `
        CREATE TABLE IF NOT EXISTS funcionarios (
            id INT NOT NULL AUTO_INCREMENT,
            nome VARCHAR(150),
            sobrenome VARCHAR(250),
            cpf VARCHAR(14),
            idade INT(3),
            cargo VARCHAR(50),
            
            PRIMARY KEY (id)
        )`
        
        this.conexao.query(sql, msg => {
           
            if(msg){
                console.log(msg);
            }else{
                console.log("Tabela Funcionários criada com sucesso ou já existe")
            }
       
        });
    }
}

module.exports = new Tabelas;