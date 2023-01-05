const semana = document.getElementById("semana");
let diaSemana = [...document.getElementsByClassName("dia")];
let containerDiaSemana = [...document.getElementsByClassName("container-dia-semana")]
let ulListaItens = document.getElementsByClassName("lista-itens");
let liItens = document.getElementsByClassName("li-tarefas");
let btnCheck = document.getElementsByClassName("btn-check");
const modal = document.getElementById("modal-input");
const btnAddItem = document.getElementById("btn-add-form");
let novaTarefa = document.getElementById("input-novo-item");
let selectDiaSemana = document.querySelector("select");
let btnsAdd = [...document.getElementsByClassName("btn-add")];

//@ FAZER O MODAL APARECER EM TODOS OS DIAS PARA ADICIONAR ITENS
btnsAdd.forEach((btn)=>{
    btn.addEventListener("click", (evento)=>{
        evento.preventDefault();
        let dia = evento.target.parentElement.firstElementChild;
        let indexDia = diaSemana.indexOf(dia);
        mostraModal(indexDia);
    })
})

// FUNÇÃO PARA EXIBIR O MODAL
function mostraModal(indexDia){
    modal.style.display = "block";
    selectDiaSemana.selectedIndex = indexDia;
}

//@ CAPTURAR INPUT DO MODAL E ADICIONAR NO DIA DA SEMANA
btnAddItem.addEventListener("click", (e)=>{
    e.preventDefault();
    let nomeNovaTarefa = novaTarefa.value;
    let diaNovaTarefa = selectDiaSemana.value;
    criarTarefa(nomeNovaTarefa, diaNovaTarefa);

    //removendo o modal =
    modal.style.display = "none";  

    //limpando o texto do input =
    novaTarefa.value = "";
})

// FUNÇÃO PARA CRIAR TAREFA =
function criarTarefa(nomeNovaTarefa, diaNovaTarefa){
    let diaSemanaAdd = document.getElementById(`${diaNovaTarefa}`);

    //criando a li =
    const li = document.createElement("li");
    li.className = "li-tarefas";

    //criando o botão de check =
    const checkButton = document.createElement("button");
    checkButton.className = "btn-check";
    checkButton.innerHTML = `<i class="fas fa-check"></i>`;
        //<i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>`
    li.appendChild(checkButton);

    //criando o texto da li =
    const p = document.createElement("p");
    p.className = "nome-tarefa";
    p.textContent = nomeNovaTarefa;
    li.appendChild(p);

    //criando o botão de editar =
    const editButton = document.createElement("i");
    editButton.className = "fas fa-edit";
    li.appendChild(editButton);

    //criando o botão de excluir =
    const deleteButton = document.createElement("i");
    deleteButton.className = "fas fa-trash-alt";
    li.appendChild(deleteButton);

    //adicionando a li na ul correspondente =
    let adicionar = diaSemanaAdd.parentElement.nextElementSibling;
    adicionar.appendChild(li);
}

//@ FAZER O BOTÃO DE CLOSE DO MODAL FUNCIONAR
const btnCloseModal = document.querySelector("span")

btnCloseModal.addEventListener("click", (evento)=>{
    evento.preventDefault();
    modal.style.display = "none";
})

//@ LIMITAR ATÉ NO MÁX. 30 CARACTERES ANTES DE QUEBRAR A LINHA NA LI

//@ FAZER OS BOTÔES DAS LI'S FUNCIONAREM

//@ LOCALSTORAGE
