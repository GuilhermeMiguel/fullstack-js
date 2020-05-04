// CLASSES

    //CLASSES 
//Com es6 posso criar classes e com o babel elas são traduzidas em functions para o navegador

console.log('CLASSES');



class ToDoList {
    constructor(){
        this.todos = [];
    }

    addToDo() {
        this.todos.push('Novo Todo');
        console.log(this.todos);
    }
}

const MinhaLista = new ToDoList();

// ------------------------------------------------------------------------

//Posso fazer herança de classes 

class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList2 extends List {

    constructor(){
        super(); //chamando o construtor da classe pai

        this.usuario = 'Diego';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }

} 



// ------------------------------------------------------------------------

//Metodos estaticos -- não precisa instanciar a classe

class Matematica {

    // constructor(){
    //     this.todos = 'Diego';
    // }

    static addToDo(){
        // this.todos.push('Novo todo'); ---> Isso não funciona
    //Pois metodos estaticos não conhecem o restante da classe 
    //Eles só recebem algo e retornam independente do conteudo da classe 
    //Classes com metodos estaticos se tornam estaticas
    //Então nem teremos construtor, pois ela não vai ser instanciada
        console.log(this.usuario);
    }

    //Esse metodo retorna a soma independente de quantos operadores eu passar
    static soma (...operadores) {
        return operadores.reduce((total, proximo) => total + proximo);
    }
} 

console.log(Matematica.soma(1, 2, 3));
console.log(Matematica.soma(1, 2, 3, 4));
console.log(Matematica.soma(1, 2, 3, 5));
console.log(Matematica.soma(1, 2, 3, 6));