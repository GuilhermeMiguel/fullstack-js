import React, {Component} from 'react';
import firebase from '../../services/fireConnection';

export default class Login extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: ''
    };
    this.logar = this.logar.bind(this);
    this.sair = this.sair.bind(this);

    //Ao mudar o status ele verifica o usuario e diz que ele esta logado 
    //onAuthStateChanged serve também para se ele ja estiver logado, realizando uma ação. por exemplo, um redirect para alguma pagina
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        alert('Usuario Logado com sucesso! \n Email: ' + user.email);
      }
    })

  }

  logar(e){
    //logar com email e senha
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) =>{
      if(error.code === 'auth/wrong-password'){
        alert('Senha incorreta!');
      }else{
        alert('Codigo de error: ' + error.code);
      }
    })

    e.preventDefault();
  }

  sair(){

    //deslogar
    firebase.auth().signOut();
    alert('Deslogado com sucesso!');
  }



  render(){

    return(
      <div> 
        <h1>Entrar</h1>
        <form onSubmit={this.logar}>

          <label>Email:</label><br/>
          <input type="text" value={this.state.email} 
                 onChange={(e) => this.setState({email: e.target.value})}/><br/>

          <label>Senha:</label><br/>
          <input type="text" value={this.state.senha} 
                 onChange={(e) => this.setState({senha: e.target.value})}/><br/>

          <button type="submit">Entrar</button>                 

        </form>

        <br/>
        <button onClick={this.sair}>Sair</button>

      </div>
    );
  }
}