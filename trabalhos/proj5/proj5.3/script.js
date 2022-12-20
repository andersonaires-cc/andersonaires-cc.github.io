window.onload = function(){
    const campoInteresse = document.querySelector("#interesse");
    campoInteresse.addEventListener("keyup",e =>{
        if(e.key === "Enter"){
            adicionarinteresse();
        }
    })
    // const botaoAdicionar = document.querySelector("button");
    // botaoAdicionar.addEventListener("click", adicionarinteresse);
}

function adicionarinteresse(){
    const campoInteresse = document.querySelector("#interesse");
    const listaInteresses = document.querySelector("ol");

    const novoLi = document.createElement("li");

    novoLi.textContent = campoInteresse.value;
    listaInteresses.appendChild(novoLi);
    campoInteresse.value = '';
}