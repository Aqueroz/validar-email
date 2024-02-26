document.getElementById("validacao__formulario").addEventListener("click", function(){

    // vaalidar o email
    // se olhar bem, da pra entender o que significa cada parte
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // evitar o recarregamento e nvio de formulario
    event.preventDefault()
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value
    var mensagem = document.getElementById("mensagem")

    // chegar o value
    if ( email.trim() === "" || senha.trim() === ""){
        mensagem.textContent="invalido"
        mensagem.className="mensagem__invalida"
    }
    // regex é menos dificil do que parece
    else if (!regex.test(email)){
        mensagem.textContent="insira um email válido"
    }
    else {
        mensagem.textContent="valido"
        mensagem.className="mensagem__valida"
    }
    
})

// confesso que a parte do trim não entendi muito bem como funciona, tentei usar sem mas todas as solucoes que encontrei usavam isso. a documentacao explicava de uma forma que nao entendi como funciona aqui