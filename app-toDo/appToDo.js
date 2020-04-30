var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

//JSON.parse pega uma string e tranforma num json
var todos = JSON.parse(localStorage.getItem('list_todos')) || []; //se o store estiver vazio dara erro no for, entao coloca-se um 
// || (ou) para um array vazio

function renderTodos() {
    listElement.innerHTML = '';

    for(todo of todos){ //for each
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo); //Passando o array

        var linkElement = document.createElement("a");
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick',  'deleteTodo( ' + pos +' )'); //atribuindo a funcao no parametro onclick

        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo() {
    var todoText = inputElement.value == '' ? 'Vazio' : inputElement.value;
    
    todos.push(todoText); //Insere elemento no vetor
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
    todos.splice(pos, 1); //pode se passar a posição e quantos elementos do vetor vão ser retirados
    renderTodos();
    saveToStorage();
}

function saveToStorage() { //Salva uma string na memoria do navegador, muito legal
    localStorage.setItem('list_todos', JSON.stringify(todos));
}