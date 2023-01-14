function changeLogo(){
    logo = document.querySelector("#inputChangeLogo").value;
    localStorage.setItem("UrlLogo", logo);
    location.reload();
}

function changeName(){
    nome = document.querySelector("#inputChangeName").value;
    localStorage.setItem("nomeLoja", nome);
    location.reload();
}

function changeBackground(){
    urlImageBackground = document.querySelector("#inputChangeBackground").value;
    localStorage.setItem("backgroundImage", urlImageBackground);
    location.reload();
}

var logo = document.querySelector("#flex-item-logo");
var urlLogo = localStorage.getItem("UrlLogo", "https://i.pinimg.com/originals/3a/cd/bb/3acdbb1f38c429fa37304bcc825a158a.jpg");
logo.innerHTML = "<img src=" + urlLogo + ">";
var nome = document.querySelector("#flex-item-nomeLoja");
var nomeInserido = localStorage.getItem("nomeLoja", "Coloque o nome do seu mercado AQUI");
nome.innerHTML = "<p>" + nomeInserido + "</p>";
var urlImageBackground = localStorage.getItem("backgroundImage");
document.body.style.backgroundImage = "url('" + urlImageBackground + "')";