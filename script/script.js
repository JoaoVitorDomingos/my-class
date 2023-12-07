var tbody = document.getElementsByTagName("tbody")[0]
var maxtr = tbody.childElementCount

function media_notas() {
    console.log('maximo de linhas = ' + maxtr)

    for(linha = 0; linha < maxtr; linha++) {
        var tr = tbody.children[linha]

        var nota1 = Number.parseFloat(tr.children[1].innerText)
        var nota2 = Number.parseFloat(tr.children[2].innerText)
        var nota3 = Number.parseFloat(tr.children[3].innerText)
        var nota4 = Number.parseFloat(tr.children[4].innerText)

        var media = (nota1 + nota2 + nota3 + nota4) / 4
        var tdmedia = tr.children[5]
        tdmedia.innerHTML = media.toFixed(1)

        aprovado(linha, media)
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
    var notanova = prompt("Coloque a nota.")
    //console.log('nota nova = ' + notanova)

    var notaselecionada = event.target
    //console.log("nota selecionada")
    //console.log(notaselecionada)

    notaselecionada.innerText = Number.parseFloat(notanova)

    media_notas()
}

function aprovado(linha, media) {
    var tdaprovado = tbody.children[linha].children[6]
    //console.log("tdaprovado")
    //console.log(tdaprovado)

    if(media >= 6.0) {
        tdaprovado.innerText = "Aprovado"
        //console.log("Entrou no if, média = " + media + ". Aprovado")
    } else {
        tdaprovado.innerText = "Reprovado"
        //console.log("Entrou no if, média = " + media + ". Reprovado")
    }
}

function adicionarAluno() {
    var nome_aluno = document.getElementById("nome-aluno")
    var nascimento = document.getElementById("nasc-aluno")
    
    if(nome_aluno.value == 0 || nascimento.value == 0) {
        alert("Preencha os campos obrigatórios: Nome do Aluno, Data de Nascimento do aluno e Sexo do Aluno")

    } else {
        alert('adicionado')
        //console.log("Nome = " + nome_aluno.value)
        //console.log("Nascimento = " + nascimento.value)

        var linha_nova = document.createElement("tr")
        tbody.appendChild(linha_nova)

        var tdnome = document.createElement("td")
        tdnome.innerText = nome_aluno.value
        linha_nova.appendChild(tdnome)

        for(var i = 1; i <=4; i++) {
            var tdnota = document.createElement("td")
            tdnota.setAttribute("onclick", "mudar_nota()")
            linha_nova.appendChild(tdnota)
        }

        for(var j = 1; j <= 2; j++) {
            var tdmedia_resultado = document.createElement("td")
            linha_nova.appendChild(tdmedia_resultado)
        }
    }

    maxtr = tbody.childElementCount
}