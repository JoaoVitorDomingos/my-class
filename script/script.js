function esqueci() {
    alert("Escreva qualquer senha!")
}

function carregar() {
    var nome = prompt("Qual seu nome?")
    var titulo = document.getElementById("bemvindo")

    titulo.innerHTML += nome
}