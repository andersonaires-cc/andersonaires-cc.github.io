function adicionaProduto(){

    const campoProduto = document.getElementById("produto"); //pegando o valor do campo 
    const listaProdutos = document.getElementById("listaDeProdutos"); //pegando a lista de produtos
    
    if(campoProduto.value == ''){ //verificando se o campo está vazio
        alert("Digite um produto!");
    } else {
        const novoElementoDaLista = document.createElement("li"); //criando um novo elemento da lista
        novoElementoDaLista.textContent = campoProduto.value; //pegando o valor do campo e colocando no novo elemento da lista
        listaProdutos.appendChild(novoElementoDaLista); //adicionando o novo elemento da lista na lista de produtos
        campoProduto.value = ''; //limpando o campo
    }
}

function removerProduto(){
    const listaProdutos = document.getElementById("listaDeProdutos"); //pegando a lista de produtos
    listaProdutos.removeChild(listaProdutos.lastChild); //removendo o último elemento da lista
}