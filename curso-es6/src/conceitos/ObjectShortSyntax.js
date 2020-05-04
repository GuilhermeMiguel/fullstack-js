// OBJECT SHORT SYNTAX - SINTAXE CURTA DE OBJETO

console.log('OBJECT SHORT SYNTAX');

    //OBJECT SHORT SYNTAX
//Repassar valores para dentro de um objeto

const nome = 'Diego';
const idade = 23;

const usuario = {
    nome, //aqui ele ja entende que corresponde a varivel nome e o seu valor 'nome : nome'
    idade,
    empresa : 'Rocketseat'
};

console.log(usuario);