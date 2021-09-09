// DESESTRUTURACAO

console.log('DESESTRUTURACAO');

const usuario = { 
    nome : 'Diego',
    idade : 23,
    endereco : {
        cidade : 'Rio do Sul',
        estado : 'SC',
    }

};

//Pra eu nao ter que ficar percorrendo o objeto o tempo todo pra pegar determinas informacoes
const { nome, idade, endereco : { cidade } } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

//Desestruturacao em parametros de funcoes
function mostraNome( {nome, idade }) {
    console.log('Desestruturacao em parametros de funcoes' + nome, idade);
}

mostraNome(usuario);

// ------------------------------------------------------------------------
