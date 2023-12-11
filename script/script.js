var tbody = document.getElementsByTagName("tbody")[0]
var maxtr = tbody.childElementCount

var escondido = false
var div_adicionar = document.getElementsByClassName("adicionar")
var botao_adicionar = document.getElementsByClassName("botao-adicionar")

function media_notas() {
    //console.log('maximo de linhas = ' + maxtr)

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

    if(notanova >= 0 && notanova <= 10) {
        var notaselecionada = event.target
        //console.log("nota selecionada")
        //console.log(notaselecionada)

        notaselecionada.innerText = Number.parseFloat(notanova)

        media_notas()

    } else {
        alert("A nota vai de 0 a 10!")
        mudar_nota()
    }
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
        //alert('adicionado')
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

    escondido = false
    aparecer(escondido)
}

function adicionarAula() {
    var div_aulas = document.getElementsByClassName("aulas")[0]

    var titulo = document.getElementById("aula-titulo")
    var link = document.getElementById("link-aula")
    var comentario = document.getElementById("aula-comen")

    //console.log("Titulo: " + titulo.value)
    //console.log("Link: " + link.value)
    //console.log("Comentário: " + comentario.value)

    if(titulo.value == 0 || link.value == 0) {
        alert("Preecha os campos obrigatórios: Título da aula e Link da aula!")

    } else {
        //alert("adicionado")

        var aula = document.createElement('div')
        aula.setAttribute("class", "aula")

        var titulo_aula = document.createElement("h3")
        titulo_aula.innerText = titulo.value
        aula.appendChild(titulo_aula)

        if(comentario.value !== 0) {
            var comen_aula = document.createElement('p')
            comen_aula.innerText = comentario.value
            aula.appendChild(comen_aula)
        }

        var link_aula = document.createElement("p")
        link_aula.innerText = link.value
        aula.appendChild(link_aula)

        div_aulas.appendChild(aula)
    }

    escondido = false
    aparecer(escondido)
}

function aparecer(boolean) {
    if(!boolean) {
        for(i = 0; i < div_adicionar.length; i++) {
            div_adicionar[i].classList.add("esconder")
            escondido = true
        }
    }

    var botao_apertado = event.target

    if(botao_apertado == botao_adicionar[0]) {
        //console.log("O botão apertado é igual ao botão da tabela.")
        var contem_classe = div_adicionar[0].classList.contains("esconder")
        //console.log("Variavel contem_classe: " + contem_classe)

        if(contem_classe) {
            //console.log("entrou no if como verdadeiro")
            div_adicionar[0].classList.remove("esconder")
        } else {
            //console.log("entrou no if como falso")
            div_adicionar[0].classList.add("esconder")
        }

    } else if(botao_apertado == botao_adicionar[1]) {
        //console.log("o botão apertado é igual ao botão das aulas")
        var contem_classe = div_adicionar[1].classList.contains("esconder")
        //console.log("Variavel contem_classe: " + contem_classe)

        if(contem_classe) {
            //console.log("entrou no if como verdadeiro")
            div_adicionar[1].classList.remove("esconder")
        } else {
            //console.log("entrou no if como falso")
            div_adicionar[1].classList.add("esconder")
        }
    }
}