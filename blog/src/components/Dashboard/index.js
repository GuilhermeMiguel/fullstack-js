import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
//WithRouter possibilita acesso ao histórico, por exemplo pra fazer algum tipo de redirect.
import firebase from '../../firebase';
import './dashboard.css';

class Dashboard extends Component{
  
    constructor(props){
        super(props);
        this.state = {
            nome: localStorage.nome   //Para assim que inicializar a pagina ele carrega do localstorage esse nome
        };
      
        this.logout = this.logout.bind(this);
    }

    async componentDidMount(){
        //Verificar se não tem algum usuario logado 
        if(!firebase.getCurrent()){
            //se o usuario não estiver logado eu mando ele para dashboard
            this.props.history.replace('/login');
            return null;
        }

            //O método getUserName retorna um callback se houver sucesso, então na chamada dele eu utilizo uma função anônima 
        //que recebe esse callback dentro de parenteses, no caso "(info)"

        firebase.getUserName((info) => {
            //Salvar no local storage para fazer o carregamento mais rapido do nome 
            localStorage.nome = info.val().nome;
            this.setState({nome : localStorage.nome});
        })

    }
   
    logout = async() =>{
        await firebase.logout()
            .catch((error) =>{    //Como esse metodo é uma promise eu posso colocar um .catch para capturar o erro 
                console.log(error);
            });

        localStorage.removeItem("nome");
        
        //Mandando para a home    
        this.props.history.push('/');
    }

    render() {
        return (
            <div id="dashboard">
               <div className="user-info">
                    <h1>Olá {this.state.nome}</h1>
                    <Link to="/dashboard/new">Novo Post</Link>
                </div>
                
                {/* Chamando a função que identifica o usuario logado */}
                <p>Logado com: {firebase.getCurrent()}</p>    
                <button onClick={() => this.logout()}>Deslogar</button>  
            </div>
        );
    }
}
   
export default withRouter(Dashboard);