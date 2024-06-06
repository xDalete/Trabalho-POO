let novo = document.getElementById("novos");
let existe = document.getElementById("exis");
let excluidos = document.getElementById("exc");

function entrar(event) {
    event.target.style.backgroundColor = "darkblue";
    event.target.style.color = "white";
}

function sair(event) {
    event.target.style.backgroundColor = "#5196e9";
    event.target.style.color = "black";
}

function clicar() {
    window.location.href = "novoOrcamento.html";
}

novo.addEventListener('mouseenter', entrar);
novo.addEventListener('mouseleave', sair);
novo.addEventListener('click', clicar);

existe.addEventListener('mouseenter', entrar);
existe.addEventListener('mouseleave', sair);
existe.addEventListener('click', clicar);

excluidos.addEventListener('mouseenter', entrar);
excluidos.addEventListener('mouseleave', sair);
excluidos.addEventListener('click', clicar);