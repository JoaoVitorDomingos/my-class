// Controle da classe "link-active" ao apertar em um link de navegação no header
const links_navegacao = document.querySelectorAll("li>button")

//console.log(links_navegacao)

links_navegacao.forEach(el => el.addEventListener("click", evt => {
    links_navegacao.forEach(link => {
        link.classList.remove("link-active")
    })
    evt.target.classList.add("link-active")
}))

// Troca do tipo de layout na página atividade
const grid_view = document.querySelector("#grid-view")
const line_view = document.querySelector("#line-view")
const container_sessoes = document.querySelectorAll("div.container-atividades")
let icones_layout = [grid_view, line_view]

let atividades = document.querySelectorAll(".atividade")
let line_view_ativada = false

console.log(atividades)
//console.log(container_sessoes)

icones_layout.forEach(el => {el.addEventListener("click", evt => {
    icones_layout.forEach(icone => {
        icone.classList.remove("view-active")
    })
    evt.target.classList.add("view-active")

    if(evt.target.id == "grid-view") {
        container_sessoes.forEach(container => {
            atividades.forEach(el => el.classList.remove("closed"))
            atividades.forEach(el => el.classList.remove("opened"))
            container.classList.remove("line-view")
            container.classList.add("grid-view")

        })
    } else {
        container_sessoes.forEach(container => {
            container.classList.remove("grid-view")
            container.classList.add("line-view")
            atividades.forEach(el => el.classList.add("closed"))
            line_view_ativada = true
        })
    }
})})

console.log("CLASS NOME:")
console.log(grid_view.className)

// Expande a atividade do layout line view
let icones_editar_atividades = document.querySelectorAll("div.atividade>div>span")
let atividade_p = document.querySelectorAll("div.atividade>p")
let elementos_stop = [...icones_editar_atividades, ...atividade_p]
//console.log(elementos_stop)

let nome_classe = /[atividade]/

elementos_stop.forEach(icone => icone.addEventListener("click", evt => evt.stopPropagation()))

atividades.forEach(el => el.addEventListener("click", evt => {
    if(line_view_ativada) {
        //console.log("Fui clicado enquanto line view ativado")
        //console.log("Alvo:")
        //console.log(evt.target)
        //console.log(evt.target.className)
        if(evt.target.nodeName == "DIV" && nome_classe.test(evt.target.className)) {
            //console.log("É o elemento certo")
        } else {
            //console.log("NÃO é o elemento certo")
            //console.log("Pai:")
            //console.log(evt.target.parentNode)
            //console.log(evt.target.parentNode.className)

            let terminar = false
            let pai = evt.target.parentNode
            while(!terminar) {
                if(pai.parentNode.nodeName == "DIV" & nome_classe.test(pai.className)) {
                    //console.log("É o elemento certo")
                    //console.log(pai)
                    //console.log(pai.className)
                    terminar = true

                    pai.classList.toggle("closed")
                    pai.classList.toggle("opened")
                } else {
                    //console.log("NÃO é o elemento certo")
                    //console.log(pai)
                    //console.log("Pai:")
                    //console.log(pai.parentNode)
                    //console.log(pai.parentNode.className)
                    pai = pai.parentNode
                }
            }
        }
    }
}))
