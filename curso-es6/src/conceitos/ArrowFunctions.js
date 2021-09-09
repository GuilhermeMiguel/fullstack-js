// ARROW FUNCTIONS

console.log('ARROW FUNCTIONS');

const arr = [1, 3, 4, 8, 9];

    //FUNÇÕES ANONIMAS
//Funcoes que não tem nome, no java 8, c#, es6, usa-se a seta para indicar essas funções

const newArr = arr.map(item => item * 2);

console.log('map'  + newArr);


//Posso fazer functions com constantes
const teste = () => ({ nome:'Diego' });

console.log(teste());
