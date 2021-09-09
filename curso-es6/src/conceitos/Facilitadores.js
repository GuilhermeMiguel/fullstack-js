// FACILITADORES


console.log('FACILITADORES');

    //Includes 
//Para verificar se dentro de um array eu encontro determinado valor
let nomes = ['Guilherme', 'Miguel', 'Silva'];

console.log(nomes.includes('Silva')); //retorna true

    //endsWith 
//verifica se uma string tereminar com o que estou passando 
let nome = 'Guilherme';

console.log(nome.endsWith('e')); //retorna true

console.log(nome.endsWith('herme')); //retorna true -- não verifica a ultima letra, mas sim todas

    //startWith 
//verifica se uma string começa com o que estou passando 
console.log(nome.endsWith('G')); //retorna true

console.log(nome.endsWith('Gui')); //retorna true


//PORÉM ESSES MÉTODOS SÃO CASE SENSITIVE -- MAIUSCULAS E MINUSCULAS FAZEM DIFERENÇA



    //Some 
//Verifica se tem pelo menos um valor num array igual ao que eu passei

console.log(nomes.some(nome => nome === "Guilherme")); //Retorna true -- percorre o array e verifica se existe aquele nome 


    //Every
//Verifica se todos sao iguais ao que eu passei 

let nomes2 = [
    {nome: 'Matheus', idade: 18},
    {nome: 'Maria', idade: 25},
    {nome: 'Henrique', idade: 15},
];

console.log(nomes2.every(nomes => nome.idade >= 18)); //retorna false -- pois existe um registro com idade igual a 15, ou seja, menor que 18