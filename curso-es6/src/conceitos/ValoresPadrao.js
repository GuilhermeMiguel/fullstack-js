// VALORES PADRAO

console.log('VALORES PADRAO');

const arr = [1, 3, 4, 8, 9];

    //VALORES PADRAO PARA FUNCOES
//Se eu esperar parametros numa funcao que faz operacoes matematicas e eu não passa-los, ele me retorna
//NaN -- numero inexistente
//Então eu posso passar valores que ele pode utilizar como padrao


function soma(a = 3, b = 6){
    return a + b;
}

//Poderia ser:

const subtracao = (a = 3, b = 6) => a - b;

console.log(teste(1)); // Retorna 7
console.log(teste()); // Retorna 9

