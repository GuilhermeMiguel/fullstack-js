import React, {Component} from 'react';
import firebase from '../../services/fireConnection';

export default class Sign2 extends Component{

  constructor(props){
    super(props);
    this.state = {
      email: '',
      senha: '',
      user:null
    };
    this.cadastrar = this.cadastrar.bind(this);
    this.logar = this.logar.bind(this);
    this.auth = this.auth.bind(this);
    this.sair = this.sair.bind(this);

  }

  //Poderia ser dentro do constructor também a chamada da função
  componentDidMount(){
    this.auth();
  }

  auth(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user: user});
      }
    })
  }

  cadastrar(){

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) =>{
        alert('Codigo de error: ' + error.code);
    });
  
  }

  logar(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) =>{
        alert('Codigo de error: ' + error.code);
    });
  }

  sair(){
    firebase.auth().signOut()
    .then(()=>{
      this.setState({user: null, email: '', senha:''});
    })
    ;
  }


  render(){

    return(
      <div> 
          {/* Faz uma renderização condicional para caso o usuario esteja logado ou nao */}
          {this.state.user ?
          <div>
            <p>Painel Admin</p>
            <p>Seja bem vindo :)</p>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.uid}</p>
            <button onClick={this.sair}>Sair</button>
          </div> 
          :
          <div>
            <h1>Seja bem vindo</h1>
            <label>Email:</label><br/>
            <input type="text" value={this.state.email} 
                  onChange={(e) => this.setState({email: e.target.value})}/><br/>

            <label>Senha:</label><br/>
            <input type="text" value={this.state.senha} 
                  onChange={(e) => this.setState({senha: e.target.value})}/><br/>

            <button onClick={this.cadastrar}>Cadastrar</button>                 
            <button onClick={this.logar}>Logar</button>                 
          </div>
          }




      </div>
    );
  }
}