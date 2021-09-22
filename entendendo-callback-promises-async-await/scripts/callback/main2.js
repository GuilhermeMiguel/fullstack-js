/*
=============================================
    Fazenco com callback 
==============================================
*/

function novoBotaoCallback(textoBotao, funcaoCallback) {
    const $body = document.querySelector("body");
    const $botao = document.createElement("button");
    $botao.textContent = textoBotao;

    funcaoCallback($botao);
 
    $body.insertAdjacentElement("beforeend", $botao);

    return $botao;
}


/*
    Estou passando dois parametros para a função novoBotaoCallback:

    1-) O texto do botão

    2-) Uma outra função 


    botaoRecebidoComoParametro é uma variável recebida como parâmetro dentro da chamada de funcaoCallback($botao)

    ou seja, eu passo uma função e dentro dela eu recebo um parametro

    Esse é o callback 
   
*/

novoBotaoCallback("LoginCallBack", (botaoRecebidoComoParametro) => {
    
    botaoRecebidoComoParametro.style.cssText = `
        font-size: 40px;
        text-transform: uppercase;
        display: block;
        margin-top: 10px;
    `

    botaoRecebidoComoParametro.addEventListener("click", () => {
        alert("Fazendo Login Callback")
    });
});


novoBotaoCallback("SignupCallBack", (botaoRecebidoComoParametro) => {
    
    botaoRecebidoComoParametro.style.cssText = `
        font-size: 45px;
        color: red;
        text-transform: uppercase;
        display:block;
        margin-top: 10px;
    `

    botaoRecebidoComoParametro.addEventListener("click", () => {
        alert("Fazendo Inscrição Callback")
    });
});


//Esses botoes serão criados no carregamento da tela

/*
===============================================
    Primeira Forma de se fazer
===============================================
*/

function novoBotao(textoBotao) {
    const $body = document.querySelector("body");
    const $botao = document.createElement("button");
    $botao.textContent = textoBotao;

    $body.insertAdjacentElement("beforeend", $botao);

    return $botao;
}

const login = novoBotao("Login");
const signup = novoBotao("Signup");

login.style.cssText = `
    font-size: 25px;
    display:block;
    margin-top: 10px;
`;

login.addEventListener('click', () => {
    alert("Fazendo Login")
});


signup.style.cssText = `
    font-size: 25px;
    display:block;
    margin-top: 10px;
`;

signup.addEventListener('click', () => {
    alert("Fazendo Inscrição")
});



    