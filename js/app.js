let icone = document.getElementById("id");

//let icone2 = document.querySelector("#icone");

icone.addEventListener(`click`, mensagem());

function mensagem(){
    alert("Boa tarde!!!");
}

function alterarCor(){
    let info = document.querySelector(".info");

    info.style.color = "#00FF00"
    info.style.fontSize = "50px"
}