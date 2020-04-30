function RequisicaoNormal() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/GuilhermeMiguel');
    xhr.send(null); //Para não enviar parametros
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4){ //se deu certo
            console.log("Requisicao normal");
            console.log(JSON.parse(xhr.responseText));
        }
    }   
}


RequisicaoNormal();


var minhaPromise = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET', 'https://api.github.com/users/GuilhermeMiguel'); 
        //Com a promise se a requisicao der errado ele cai no catch
        xhr.send(null); //Para não enviar parametros
        
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4){ //se deu certo
                    if(xhr.status === 200){
                        console.log("Requisicao Promise");
                        console.log(JSON.parse(xhr.responseText));
                    }
                    else {
                        reject("Erro na requisição");
                    }
                    
                }
            }    
        });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });