import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component{
     render(){
        return(
            <div>
               <h2>Bem-vindo a pagina Home....</h2> <br/>
               {/* O link faz com que ao clicar a pagina nao seja recarregada, utilizando o conceito de SPA */}
               {/* Se fosse um a com href a pagina seria recarregada */}
               <Link to="/sobre" >Ir para Sobre</Link>  
            </div>         
        );
    }
}

export default Home;