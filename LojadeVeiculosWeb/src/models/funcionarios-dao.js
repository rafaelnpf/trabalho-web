class FuncionariosDAO{
    constructor(conexao){
         this._conexao = conexao;
    }

    lista(){

        return new Promise( (resolver, rejeitar) => {

            const sql = 'SELECT * FROM funcionarios';

            this._conexao.query(sql, (msgErro, resultados) => {
              
                if (msgErro){
                    return rejeitar('Não foi possível listar os produtos')
                }else{
                    return resolver(resultados)
                } 
                    
            })
        
        })    }

    adicionar(funcionarios){
        return new Promise ((resolver, rejeitar) => {
            
            const sql = `
                INSERT INTO funcionarios (
                    nome, 
                    sobrenome, 
                    cpf, 
                    idade, 
                    cargo
                ) VALUES (?,?,?,?,?)
                `;

            this._conexao.query(sql, [funcionarios.nome, funcionarios.sobrenome, funcionarios.cpf, funcionarios.idade, funcionarios.cargo], 
                function (msgErro) {
                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível adicionar o funcionário')
                    }else{
                        resolver();
                    }
                }
            )

        })
    }

    remover(id){
        
        console.log(` o ID ${id}`);

        return new Promise ((resolver, rejeitar) => {
            
            const sql = `DELETE FROM funcionarios WHERE id=?`

            this._conexao.query(sql, id, 
                function (msgErro) {
                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível remover o funcionário')
                    }else{
                        resolver();
                    }
                }
            )

        })
    }

    buscaPorId(id){
        return new Promise ((resolver, rejeitar) => {
            const sql = 'SELECT * FROM funcionarios WHERE id=?';
            
            this._conexao.query(sql, id, 

                function (msgErro, resultados) {
                    const produto = resultados[0];

                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível buscar o funcionário')
                    }else{
                        resolver(produto);
                    }
                }
            )
        })
    }

    alterar(funcionarios){
        return new Promise ((resolver, rejeitar) => {

            const id = funcionarios.id;
            
            const sql = `UPDATE funcionarios SET ? WHERE id = ?`;

            this._conexao.query(sql, [funcionarios, id], 
                function (msgErro) {
                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível alterar o funcionário')
                    }else{
                       return resolver();
                    }
                }
            )

        })
    }
}

module.exports = FuncionariosDAO;