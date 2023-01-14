var botao = window.document.getElementById('enviarNomeELogo')
botao.addEventListener('click', clicar)
   
    function clicar() {
        const nomeLoja = document.querySelector('#nomeLoja').value
        const urlLogo = document.querySelector('#urlLogo').value
        if(urlLogo != "" && nomeLoja != ""){
            localStorage.setItem("nomeLoja", nomeLoja);
            localStorage.setItem("UrlLogo", urlLogo);
            botao.style.background = 'rgb(201, 201, 201)';
            document.getElementById('enviarNomeELogo').value = "Enviado";
            botao.style.color = 'gray'
            botao.style.borderColor = 'gray'
            window.open("./Cadastro.html", "_self");
        } else {
            alert("Insira as informações solicitadas!!")
        }
    }