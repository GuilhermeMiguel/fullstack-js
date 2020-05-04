//ASYNC/AWAIT

console.log('ASYNC/AWAIT');

//Com promise
const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {  resolve('OK')}, 2000);    
});

// minhaPromise().then(response => ...); -- Executo a promise
    

    //ASYNC/AWAIT

async function executaPromise() {
    console.log(await minhaPromise());
    
    //Posso ter vários await, uma linha só executada após a outra terminar
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());

    //Se fosse com .then
    minhaPromise().then(response => {
        console.log(response);
    });
}
executaPromise();
//Await só funciona em funções assincronas

//Arrow Function e await
const executaPromise2 = async () => {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
};

executaPromise2();


