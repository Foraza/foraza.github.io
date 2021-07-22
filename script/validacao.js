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
        alert("Preencha todos os campos!");
    }
    else{
        var resp = prompt("Confirme suas informações:\n\nNome: "+visitante.nome+"\nEmail: "+visitante.email+"\nTelefone: "+visitante.telefone+"\n\nDigite 'OK' para confirmar e 'NAO' para alterar");
        if(resp.toUpperCase() == "OK"){
            alert("Obrigado pela mensagem, "+visitante.nome+"!\nEntrarei em contato assim que possível!");
        }
        else{
            alert("Sem problemas! Insira as informações novamente.");
        }
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