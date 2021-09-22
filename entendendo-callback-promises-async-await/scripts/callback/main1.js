
/*==============================
    Conceito de callback
================================
*/
const $primeiroBotao = document.getElementById("primeiroBotao");
const $segundoBotao = document.getElementById("segundoBotao");

/* 
        Essa arrow function é uma função de call back, ela esta aguardando para ser executada
    Ela nao vai ser executada no momento dessa declaração, mas sim com o clique do usuário
*/

$primeiroBotao.addEventListener("click", () => {
    console.log("Primeiro Botao foi clicado");
});

// o habitual é utilizar essa função da seguinte forma 

//Estou lidando com o clique, por isso handle
const handleClick = () => {
    console.log("Segundo Botao foi clicado");
};

$segundoBotao.addEventListener("click", handleClick);

/*
    
        Uma requisicao a uma api também é uma função de callback -- é um processo assíncrono 
    a função não é executada imediatamente, mas sim com a resposta (no caso da api)

*/
