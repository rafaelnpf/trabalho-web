class ProdutosDAO{
    constructor(conexao){
         this._conexao = conexao;
    }

    lista(){

        return new Promise( (resolver, rejeitar) => {

            const sql = 'SELECT * FROM produtos';

            this._conexao.query(sql, (msgErro, resultados) => {
              
                if (msgErro){
                    return rejeitar('Não foi possível listar os produtos')
                }else{
                    return resolver(resultados)
                } 
                    
            })
        
        })    }

    adicionar(produtos){
        return new Promise ((resolver, rejeitar) => {
            
            const sql = `
                INSERT INTO produtos (
                    nome, 
                    descricao, 
                    marca, 
                    preco, 
                    quantidade
                ) VALUES (?,?,?,?,?)
                `;

            this._conexao.query(sql, [produtos.nome, produtos.descricao, produtos.marca, produtos.preco, produtos.quantidade], 
                function (msgErro) {
                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível adicionar o produto')
                    }else{
                        resolver();
                    }
                }
            )

        })
    }

    remover(id){
        
        return new Promise ((resolver, rejeitar) => {
            
            const sql = `DELETE FROM produtos WHERE id=?`

            this._conexao.query(sql, id, 
                function (msgErro) {
                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível remover o produto')
                    }else{
                        resolver();
                    }
                }
            )

        })
    }

    buscaPorId(id){
        return new Promise ((resolver, rejeitar) => {
            const sql = 'SELECT * FROM produtos WHERE id=?';
            
            this._conexao.query(sql, id, 

                function (msgErro, resultados) {
                    const produto = resultados[0];

                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível buscar o produto')
                    }else{
                        resolver(produto);
                    }
                }
            )
        })
    }

    alterar(produtos){
        return new Promise ((resolver, rejeitar) => {

            const id = produtos.id;
            
            const sql = `UPDATE produtos SET ? WHERE id = ?`;

            this._conexao.query(sql, [produtos, id], 
                function (msgErro) {
                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível alterar o produto')
                    }else{
                       return resolver();
                    }
                }
            )

        })
    }

    incrementar(id){
        return new Promise ((resolver, rejeitar) => {
            
            const sql = `UPDATE produtos SET ? WHERE id = ?`;

            this._conexao.query(sql, [produtos, id], 
                function (msgErro) {
                    if (msgErro) {
                        console.log(msgErro)
                        return rejeitar('Não foi possível alterar o produto')
                    }else{
                       return resolver();
                    }
                }
            )

        })
    }
}

module.exports = ProdutosDAO;