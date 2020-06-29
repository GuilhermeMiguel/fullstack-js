    //Componentes ciclos de vida
//Os Componentes possuem ciclos de vida

import React, { Component } from 'react';
import './styles.css';

class CicloVida extends Component {
    
    //A primeira coisa a ser carregado é o construtor 
    constructor(props) {
        super(props); 
        
        this.state = {
            hora: '00:00:00'
        };
    }

    //Depois que o componente é montado/carregado
//Da pra consumir uma api, carregar alguma determinada informação
//Só é rodado uma vez quando o componente foi montado, como as funções js quando a pagina esta sendo carregada
//Quando for carregado o componente ele chama essa função 

    componentDidMount() {
        //Set interval atualiza a cada 1 segundo 
        setInterval(() => {
            this.setState( { hora : new Date().toLocaleTimeString() } )
        }, 1000);
    }

    //Sempre que o state for atualizado essa função é chamada
    // componentDidUpdate() {
    //     console.log('Atualizou !!!!');
    // }

    //retorna um true ou falso, ele verifica se deve ser atualizado ou não, de acordo com a state
    // shouldComponentUpdate() {

    // }

    render() {
        return(
            <div className="container-ciclo-vida"> 
                <div className="container-itens">  
                <i className="fa fa-chevron-left fa-2x icone-voltar" onClick={() => window.history.back()}></i>            
                    <h1>Hora</h1>
                    <h3>{this.state.hora}</h3> 
                </div>
            </div>
        );
    }
}

export default CicloVida;