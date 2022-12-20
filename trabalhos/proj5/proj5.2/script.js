function MudarImagem(){
    imagem = document.getElementById("ig").src="images/icons8-account-100.png";
}
function desaparecer(id){
    const perfil = document.getElementById("perfil").nextElementSibling;
    const competencia = document.getElementById("competencia").nextElementSibling;
    const formacao = document.getElementById("formacao").nextElementSibling;
    const experiencia = document.getElementById("experiencia").nextElementSibling;
    const contato= document.getElementById("contato").nextElementSibling;

    if( id == 'perfil'){
        perfil.style.display='none';
    }
    if( id == 'competencia'){
        competencia.style.display='none';
    }
    if( id == 'formacao'){
        formacao.style.display='none';
    }
    if( id == 'experiencia'){
        experiencia.style.display='none';
    }
    if( id == 'contato'){
        contato.style.display='none';
    }
}

function aparecer(){
    const perfil = document.getElementById("perfil").nextElementSibling;
    const competencia = document.getElementById("competencia").nextElementSibling;
    const formacao = document.getElementById("formacao").nextElementSibling;
    const experiencia = document.getElementById("experiencia").nextElementSibling;
    const contato= document.getElementById("contato").nextElementSibling;

    if( perfil.style.display=='none'){
        perfil.style.display='block';
    }
    if( competencia.style.display=='none'){
        competencia.style.display='block';
    }
    if( formacao.style.display=='none'){
        formacao.style.display='block';
    }
    if( experiencia.style.display=='none'){
        experiencia.style.display='block';
    }
    if( contato.style.display=='none'){
        contato.style.display='block';
    }

}