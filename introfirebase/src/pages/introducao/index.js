import React, {Component} from 'react';
import firebase from '../../services/fireConnection';

export default class Introducao extends Component{

  constructor(props){
    super(props);
    this.state = {
      nomeInput: '',
      idadeInput: '',
      token: 'Carregando...',
      nome: '',
      idade: ''
    };
    this.cadastrar = this.cadastrar.bind(this);
    
    /* Olheiro -- executa algo sempre que algo no firebase for alterado
    firebase.database().ref('token').on('value', (snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);});
    */

    /* Executa algo uma unica vez  -- a palavra snapshot é um termo de convenção, por isso utilizamos ela 
          snaphot é uma foto do momento -- pega como estao o estado do objeto naquele momento */
    firebase.database().ref('token').once('value').then((snapshot) => {
      let state = this.state;
      state.token = snapshot.val();
      this.setState(state);
    });

    //o metodo child faz com que o js pegue algum elemento filho/abaixo daquele que passamos 
    firebase.database().ref('usuarios').child(1).on('value', (snapshot)=>{
      let state = this.state;
      state.nome = snapshot.val().nome;
      state.idade = snapshot.val().idade;
      this.setState(state);
    });


  }


  cadastrar(e){
    // Inserindo um novo dado!
   //firebase.database().ref('token').set(this.state.tokenInput);
   
   //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput)

   //Removendo um dado especifico
   //firebase.database().ref('token').remove();

   let usuarios = firebase.database().ref('usuarios');
   let chave = usuarios.push().key; //cria uma chave aleatoria
   usuarios.child(chave).set({
     idade: this.state.idadeInput,
     nome: this.state.nomeInput
   })

   e.preventDefault();
 }


  render(){
    //Desconstrução do js
    const { token, nome, idade } = this.state;
    
    return(
      <div>

        <form onSubmit={this.cadastrar}>
        <label>Nome</label>
          <input type="text" value={this.state.nomeInput} 
                 onChange={(e)=> this.setState({nomeInput: e.target.value})} /><br/>

          <label>Idade</label>                 
          <input type="text" value={this.state.idadeInput} 
                 onChange={(e)=> this.setState({idadeInput: e.target.value})} /><br/>
          <button type="submit">Cadastrar</button>
        </form>
        
        <h1>Token: {token}</h1>
        <h1>Nome: {nome}</h1>
        <h1>Idade: {idade}</h1>
      </div>
    );
  }
}