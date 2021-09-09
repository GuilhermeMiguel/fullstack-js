import React, {Component} from 'react';
import firebase from '../../services/fireConnection';

export default class Sign extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome:'',
      email: '',
      senha: ''
    };
    this.cadastrar = this.cadastrar.bind(this);

    firebase.auth().signOut();
  

    //Assim que um usuario é cadastrado o status muda ai setado o seu no banco o nome  
    //onAuthStateChanged serve também para se ele ja estiver logado, realizando uma ação. por exemplo, um redirect para alguma pagina
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        firebase.database().ref('usuarios').child(user.uid).set({
          nome: this.state.nome
        })
        .then(()=>{
          this.setState({nome: '', email: '', senha: ''});
        });
      }
    })

  }

  cadastrar(e){

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
    .catch((error) =>{
        alert('Codigo de error: ' + error.code);
    });

    e.preventDefault();
  }


  render(){

    return(
      <div> 
        <h1>Novo Usuario</h1>
        <form onSubmit={(e)=>{ this.cadastrar(e) }}>

          <label>Nome:</label><br/>
          <input type="text" value={this.state.nome} 
                 onChange={(e) => this.setState({nome: e.target.value})}/><br/>

          <label>Email:</label><br/>
          <input type="text" value={this.state.email} 
                 onChange={(e) => this.setState({email: e.target.value})}/><br/>

          <label>Senha:</label><br/>
          <input type="text" value={this.state.senha} 
                 onChange={(e) => this.setState({senha: e.target.value})}/><br/>

          <button type="submit">Cadastrar</button>                 

        </form>


      </div>
    );
  }
}