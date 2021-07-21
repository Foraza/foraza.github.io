function validar(){
    var visitante={
        nome:"",
        email:"",
        telefone:"",
        mensagem:""
    };
    visitante.nome = document.getElementById("nome").value;
    visitante.email = document.getElementById("email").value;
    visitante.telefone = document.getElementById("tel").value;
    visitante.mensagem = document.getElementById("opiniao").value;
    if(visitante.nome=="" || visitante.email=="" || visitante.telefone=="" || visitante.mensagem==""){
        window.alert("Preencha todos os campos!");
    }
    else{
        window.alert("Obrigado pela mensagem, "+visitante.nome+"!");
    }
}

function validarEmail() {
    var email = document.getElementById("email").value;
    var re = /\S+@\S+\.\S+/;
    if(re.test(email)){
    }
    else{
        alert("E-mail inválido!")
    }
  }