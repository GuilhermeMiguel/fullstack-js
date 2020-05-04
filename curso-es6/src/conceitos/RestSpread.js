// REST

console.log('REST');

    //REST serve para pegar o resto das propriedades
//Rest operator são as reticencias ...

const usuario = {
    nome: 'Diego',
    idade : 23,
    empresa : 'Rocketseat'
};

const { nome, ...resto } = usuario;
    //Esse objeto tem tres propriedades, em nome eu salvei a propriedade nome
//em ... resto (utiliza-se só resto como variavel) eu pego as propriedades restantes num array

console.log(nome);
console.log(resto); //imprime as propriedades restantes em um array

// ----------------------------------------------
//Posso utilizar rest operators com arrays também
//também posso utilizar a desestruturação em arrays

const arr = [1, 2, 3, 4];

const [ a, b, ...c];

console.log(a); //imprime 1
console.log(b); //imprime 2
console.log(c); //imprime 3 e 4


// ----------------------------------------------
//Posso utilizar rest operators com functions também -- parecido com c#
//também posso utilizar a desestruturação em arrays

//function soma(a, b, ...resto) -> pode ser assim também
function soma(...parametros) {
    return parametros.reduce((total, next) => total + next);
}

console.log(soma(1, 2, 3, 4)); //Posso passar infinitos parametros que ele salva
//em um array e com o reduce eu percorro esse array e faço a soma



// ----------------------------------------------


// SPREAD

console.log('SPREAD');

    //SPREAD repassa as informações de um objeto ou array para outra estrutura de dados
//SPREAD operator são as reticencias ...

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [ ...array1, ...array2];
//Faz a junção das informacoes do array

console.log(array3);



//Outra utilização, quando quero fazer outro objeto com quase todas as propriedades de um objeto
const usuario1 = {
    nome : 'Diego',
    idade : 23,
    empresa : 'Rocketseat', 
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2); //todas as informações ficam iguais, menos o nome que foi substituido 

