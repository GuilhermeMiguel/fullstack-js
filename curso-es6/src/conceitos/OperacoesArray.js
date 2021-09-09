// OPERAÇÕES EM ARRAY

console.log('OPERAÇÕES EM ARRAY');

const arr = [1, 3, 4, 8, 9];

//map -- percorre a lista - pega o item e index
const newArr = arr.map(function(item, index){
    return item * 2;
});

console.log('map'  + newArr);


//reduce -- percorre a lista - pega o total e o proximo, posso fazer operações matematicas
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log('reduce' + sum);


//filter -- percorre a lista - posso fazer filtros dentro do array
const filter = arr.filter(function(item){
    return item % 2 === 0; // Retora os valores pares
});

console.log('filter' + filter);


//find -- percorre a lista - verifica se existe informação dentro do array
const find = arr.find(function(item){
    return item === 4; // Retora o valor que estou procurando, por exemplo se procuro por um numero que não existe
// ele retorna undefined
});

console.log('find' + find);

// ------------------------------------------------------------------------