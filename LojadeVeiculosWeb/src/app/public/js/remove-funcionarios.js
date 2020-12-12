let tabelafuncionarios = document.querySelector("#list-funcionarios");

tabelafuncionarios.addEventListener('click', (evento) =>{
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remover') {
        let funcionarioId = elementoClicado.dataset.ref;
        
        fetch(`http://localhost:3000/funcionarios/${funcionarioId}`, {method: 'DELETE'})
            .then(resposta => {
    
                let tr = elementoClicado.closest(`#funcionario_${funcionarioId}`) 
                tr.remove();    
            
            }).catch( msgError => {
                console.log(msgError)
            })
  
        }
})