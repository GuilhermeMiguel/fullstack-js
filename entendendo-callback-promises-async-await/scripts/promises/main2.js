const ul = document.querySelector('#usuarios')
const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) => response.json()) //pegando a resposta em json
    .then(function (data) {
        console.log(data);

        return data.map(function(usuario) {
            let li = document.createElement('li');
            li.innerHTML = `${usuario.name} (${usuario.username})`;
            ul.appendChild(li);
        })
    })
    .catch((error) => {
        console.log("Oppps!" + error);
    })