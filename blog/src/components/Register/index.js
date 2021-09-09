import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
//WithRouter possibilita acesso ao histórico, por exemplo pra fazer algum tipo de redirect.
import firebase from '../../firebase';
import './register.css';

class Register extends Component{
  
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            password: ''
        };
      
        this.register = this.register.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }
   
    componentDidMount(){
        //Verificar se tem algum usuario logado!
        if(firebase.getCurrent()){
          return this.props.history.replace('dashboard');
        }
    }

    register(e){
        e.preventDefault();
    
        this.onRegister();
    }
    
    onRegister = async() => {
        try{
          const {nome, email, password} = this.state;
    
          await firebase.register(nome, email, password);
          //Ele faz o regitstro e direciona para dashboard
          this.props.history.replace('/dashboard');
    
        }catch(error){
          alert(error.message);
        }
    }

    render() {
        return (
            <div>
                <h1 className="register-h1">Novo Usuario</h1>
                <form onSubmit={this.register} id="register">
                    <label>Nome:</label><br/>
                    <input type="text" autoComplete="off" autoFocus 
                        value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})} placeholder="Guilherme"/>
                    
                    <label>Email:</label><br/>
                    <input type="email" autoComplete="off" autoFocus 
                        value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} placeholder="teste@teste.com"/>

                    <label>Senha:</label><br/>
                    <input type="password" autoComplete="off" 
                        value={this.state.senha} onChange={(e) => this.setState({password: e.target.value})} placeholder="Sua senha"/>

                    <button type="submit">Cadastrar</button>  
                      
               </form>
            </div>
        );
    }
}
   

export default withRouter(Register);
