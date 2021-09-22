/*
    Função comum fazendo sem promises
*/

function somarDoisNumeros() {
    
    let result = 1 + 1;

    if(result == 2)
        sucessCallback();
    else 
        errorCallback();
}

function sucessCallback(){
    console.log("Isso aí! A soma é 2 -- Função comum");
}

function errorCallback(){
    console.log("Ops! Algo deu errado -- Função comum");
}

somarDoisNumeros();


/*
        Trabalhando com promises 
    
    Promises são objetos, pode-se ver que esta se fazendo um new

    E ela recebe uma função anônima, uma arrow function, com dois parametros

    Esses parâmetros são o resolve e o reject que são callbacks



*/

let exemploDePromise = new Promise((resolve, reject) => {
    let result = 1 + 1;
    
    if(result == 2)
        resolve('Sucesso -- resultado esperado está correto');
    else
        reject('Erro -- resultado esperado não está correto');
});


exemploDePromise.then((mensagem) => {
    console.log(`Retorno correto dentro do then: ${mensagem} -- mensagem da promise`)
}).catch((erro) => {
    console.log(`Erro capturado dentro do catch: ${erro} -- mensagem da promise`)
});




/*
    
    Um exemplo um pouco mais complexo

*/


//Callback 

const melhorDesenvolvedor = 'Maria';

function quemEhMelhorDesenvolvedorCallback(callback, errorCallback) {
    if(melhorDesenvolvedor != "Guilherme" && melhorDesenvolvedor != "Joao"){
        errorCallback({
            nome : melhorDesenvolvedor, 
            mensagem : "Sério que esse(a) é o(a) melhor desenvolvedor(a)?"
        });
    }
    else {
        callback({
            nome : melhorDesenvolvedor, 
            mensagem : "Isso aí, esse(a) é o(a) melhor desenvolvedor(a)!"
        });
    }
}

//estou passando como parametro o que deve ser executado com o callback
quemEhMelhorDesenvolvedorCallback((sucessoCallback) => {
    console.log(`${sucessoCallback.nome}. ${sucessoCallback.mensagem} -- mensagem do callback`);
}, (errorCallback) => {
    console.log(`${errorCallback.nome}. ${errorCallback.mensagem} -- mensgem do callback`);
});



//Promise dentro de function
function quemEhMelhorDesenvolvedorPromise() {
    
    return new Promise((resolve, reject) => {

        if(melhorDesenvolvedor != "Guilherme" && melhorDesenvolvedor != "Joao"){
            reject({
                nome : melhorDesenvolvedor, 
                mensagem : "Sério que esse(a) é o(a) melhor desenvolvedor(a)?"
            });
        }
        else {
            resolve({
                nome : melhorDesenvolvedor, 
                mensagem : "Isso aí, esse(a) é o(a) melhor desenvolvedor(a)!"
            });
        }
    })
}

//estou pegando o retorno de uma promise que esta numa função
quemEhMelhorDesenvolvedorPromise()
    .then((sucessoPromise) => {
        console.log(`${sucessoPromise.nome}. ${sucessoPromise.mensagem} -- mensagem da promise`);
    })
    .catch((errorPromise) => {
    console.log(`${errorPromise.nome}. ${errorPromise.mensagem} -- mensgem da promise`);
});