import Dados from "./banco_dados.js"

const modal_vejaMais = document.getElementById("aluno_vejaMais")
const div_foto = document.querySelector("div.foto-aluno")
const p_infoAluno = [...document.querySelectorAll("div.informacoes-aluno>div.col-md-8>div.row>p")]
const td_first_table = [...document.querySelectorAll("#modal_vejaMais_firstTable>tbody>tr>td")]
const td_second_table = [...document.querySelectorAll("#modal_vejaMais_secondTable>tbody>tr>td")]

// console.log("Div Foto:")
// console.log(div_foto)
// console.log("Paragrafos:")
// console.log(p_infoAluno)
// console.log("TD First:")
// console.log(td_first_table)
// console.log("TD Second")
// console.log(td_second_table)

if(modal_vejaMais) {
    modal_vejaMais.addEventListener("show.bs.modal", evento => {
        // Botão que ativou o modal
        const botao = evento.relatedTarget
        //console.log("Botão Clicado:")
        //console.log(botao)

        // Pegando o atributo que irá diferenciar os conteudos do modal
        const identificacao = botao.getAttribute("data-bs-whatever")
        //console.log("Identificação: " + identificacao)

        // Conteudo Dinamico do Modal
        let obj_aluno = Dados.alunos.find(aluno => {
            return aluno.matricula == identificacao
        })
        //console.log(obj_aluno)

        div_foto.style.backgroundImage = `url(${obj_aluno.foto})`

        p_infoAluno[0].innerHTML = `Nome: <span style="font-weight: normal;">${obj_aluno.nome}</span>`
        p_infoAluno[1].innerHTML = `Nascimento: <span style="font-weight: normal;">${obj_aluno.nascimento}</span>`
        p_infoAluno[2].innerHTML = `CPF: <span style="font-weight: normal;">${obj_aluno.cpf}</span>`
        p_infoAluno[3].innerHTML = `Endereço: <span style="font-weight: normal;">${obj_aluno.endereco}</span>`
        p_infoAluno[4].innerHTML = `Número da Matrícula: <span style="font-weight: normal;">${obj_aluno.matricula}</span>`

        td_first_table[0].innerHTML = obj_aluno.presenca[0]
        td_first_table[1].innerHTML = Dados.aulas - obj_aluno.presenca[0]
        td_first_table[2].innerHTML = obj_aluno.presenca[1] + "%"
        td_first_table[3].innerHTML = obj_aluno.atividades[0]
        td_first_table[4].innerHTML = Dados.atividades - obj_aluno.atividades[0]
        td_first_table[5].innerHTML = obj_aluno.atividades[1] + "%"

        td_second_table[0].innerHTML = obj_aluno.notas[0]
        td_second_table[1].innerHTML = obj_aluno.notas[1]
        td_second_table[2].innerHTML = obj_aluno.notas[2]
        td_second_table[3].innerHTML = obj_aluno.notas[3]
        td_second_table[4].innerHTML = obj_aluno.MostrarMedia()
        td_second_table[5].innerHTML = obj_aluno.situacao
        
    })
}