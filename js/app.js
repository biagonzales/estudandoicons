let icone = document.getElementById("icone");
let config = document.querySelector("#configuracao");

//let icone2 = document.querySelector("#icone");

icone.addEventListener(`click`, mensagem);

function mensagem(){
    alert("Boa tarde!!!");
}

function alterarCor(){
    let infos = document.querySelectorAll(".info");

    for (let i = 0; i < infos.lenght; i++) {
        const elementos = infos[i]
        elementos.style.color = "#00FF00"
        elementos.style.fontSize = "40px"
    }
}

    config.addEventListener(`click`,() =>
 {
    let infos = document.querySelectorAll(".info");

    for (let i = 0; i < infos.lenght; i++) {
        const elementos = infos[i]
        elementos.style.color = "#00FF00"
        elementos.style.fontSize = "40px"
    }
 }
);