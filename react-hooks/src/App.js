import React, { useState, useEffect, useMemo, useCallback } from 'react';

//useEffect para substituir os ciclos de vida que utilizamos dentro do class Component

  //Para utilizar states da outra forma eu precisava utilizar 
//class extends Component no lugar de function
function App() {

  //nome da state + funcao chamada para Atualizar state 
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');


  //UseCallback é parecido com o Memo, mas ao inves de valores retorna funções complexas
  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [input, tarefas]);
//Passo as states que estou utilizando dentro da função


  
  //COMPONENT DID MOUNT
  //O primeiro parâmetro é a função que vai ser executada, 
//o segundo é a state que ele está monitorando.
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');
    
    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage));
    }

  }, []);
  
  
  
  
  //COMPONENT UPDATE
  //O primeiro parâmetro é a função que vai ser executada, 
//o segundo é a state que ele está monitorando.
  useEffect(() => {
    //toda vez que essa state sofrer alteração eu salvo no local storage
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);
  //nesse exemplo toda  vez que a state sofrer alteração ele chama essa função



  //ComponentWillUnmount() -- encerrando o ciclo de vida 
  //Eu tenho um return de uma funcao dentro do primeiro parametro, 
//não importando se tenho um segundo ou não 

  // useEffect(() => {
  //   return() => {};

  // }, []);



  //O use memo serve por exemplo para fazer calculos,
//quando eu estou digitando no input ele esta atualizando a state e chamando o return de html novamente
//se eu tenho um calculo la dentro, ele fica toda hora refazendo, isso é desnecessario, então eu utilizo 
//o useMemo que e tipo um componentDidUpdate -- useEffect, o primeiro parametro é a funcao e o segundo a state que estou monitorando 
//quando ela for alterada a funcao é chamada 
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);


  return (
    <div>

      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br/>
        <strong>Você tem {totalTarefas} tarefas!</strong><br/>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>    
      <button type="button" onClick={handleAdd}>Adicionar</button>

    </div>
  );
}

export default App;
