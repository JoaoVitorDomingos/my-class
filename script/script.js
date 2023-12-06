var tbody = document.getElementsByTagName("tbody")[0]
var maxtr = tbody.childElementCount

function media_notas() {
    for(linha = 0; linha < maxtr; linha++) {
        var tr = tbody.children[linha]
        var nota1 = Number.parseFloat(tr.children[1].innerText)
        var nota2 = Number.parseFloat(tr.children[2].innerText)
        var nota3 = Number.parseFloat(tr.children[3].innerText)
        var nota4 = Number.parseFloat(tr.children[4].innerText)
        var media = (nota1 + nota2 + nota3 + nota4) / 4
        var tdmedia = tr.children[5]
        tdmedia.innerHTML = media.toFixed(1)
    }
}

function adicionar_click_td() {
    for(linha = 0; linha < maxtr; linha++) {
        var tr = tbody.children[linha]
        for(td = 1; td > 0 && td < 5; td++) {
            var nota = tr.children[td]
            nota.setAttribute("onclick", "mudar_nota()")
        }
    }
}

function mudar_nota() {
    alert("funcionou")
}