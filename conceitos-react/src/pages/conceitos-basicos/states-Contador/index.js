    //STATES
//As states são mutaveis, são dinâmicas, enquanto as props são estaticas

import React, { Component } from 'react';
import './styles.css';  

class StatesContador extends Component {
    
    constructor(props) {
        super(props); //Para conseguir acessar tudo, todas as informações e poder utilizar tudo dentro do render
        
        this.state = {
            nome: 'Guilherme',
            contador: 0
        };

        //quando eu crio funcões normais eu não consigo acessar o que esta dentro da classe com o this, só dando um bind no constructor, se eu 
    //utilizar as arrow functions ai eu acesso 
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar() {
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    diminuir() {
        let state = this.state;
        if(state.contador === 0){
            alert('O contador chegou a zero!');
            return;
        }
        
        state.contador -= 1;
        this.setState(state);
    }

    render() {
        return(
            <div className="container-contador">
                <div className="container-itens">
                <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                onClick={() => window.history.back()}></i>
                    <h1>Contador</h1>       
                    <div className="contador">             
                        <button onClick={this.diminuir}> - </button>
                            <h3>
                                {this.state.contador}
                            </h3>
                        <button onClick={this.aumentar}> + </button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default StatesContador;