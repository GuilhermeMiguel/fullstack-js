// CONSTANTES E VARIAVEIS DE ESCOPO

    //CONST o valor não pode ser mudado - variavel só para leitura
//Porém eu posso mutar um objeto, da seguinte forma:

console.log('Const and Let');

const usuario = { nome : 'Diego'};

usuario.nome = 'Cleiton';

console.log(usuario);
//Mesmo a variavel sendo CONST eu posso mudar o valor do objeto dentro dela ou do vetor
//
    //LET são variaveis de escopo 
//Escopos são blocos de codigo como metodos, ifs, laços

function teste(x) {
    let y = 2;

    if(x > 5) {
        //Com let eu posso criar um novo escopo dentro do if
        let y = 4;
        console.log('Posso imprimir os dois tipos de variaveis: ' + x, y);
    }
}

teste(10);

// ------------------------------------------------------------------------
