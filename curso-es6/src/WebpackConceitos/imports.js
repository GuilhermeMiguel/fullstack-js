    //Preciso importar qualquer coisa, mas mantendo o nome -- nao preiciso informar que é js,
//pois é padrao
import sub, { soma as somaFunction } from './functions';
import  multFunction from './multiplicacao'; //quando é default eu nao utilizo as chaves
//Com o export default eu não preciso utilizar o mesmo nome que ta no outro arquivo
//nesse esta multFunction -- no outro esta mult

//Também posso renomear a funcao com um as -- soma as somaFunction

//Posso importar todas de uma vez tambem 
import * as funcoes from './multiFuncoes'; 


console.log(sub(1, 2));
console.log(somaFunction(1, 2));

console.log(multFunction(5, 6));


console.log(funcoes.div(5, 8));
console.log(funcoes.expression(9, 10));