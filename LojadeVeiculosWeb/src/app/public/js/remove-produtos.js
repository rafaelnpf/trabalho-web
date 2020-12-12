let tabelaProdutos = document.querySelector("#list-produtos");

tabelaProdutos.addEventListener('click', (evento) =>{
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remover') {
        let produtoId = elementoClicado.dataset.ref;
        
        fetch(`http://localhost:3000/produtos/${produtoId}`, {method: 'DELETE'})
            .then(resposta => {
    
                let tr = elementoClicado.closest(`#produto_${produtoId}`) 
                tr.remove();    
            
            }).catch( msgError => {
                console.log(msgError)
            })
  
        }
})