//Um arquivo componente dentro de uma pasta com o nome dele recebe por padrão o nome de index

import React, { Component } from 'react';


class App extends Component {
    
    constructor(props) {
        super(props); 
        
        this.state = {
            nome: props.nome
        };
        this.entrar = this.entrar.bind(this);

    }

    entrar(nome) {
        this.setState({ nome : nome })
    }

    render() {
        return(
            <div className="container-itens">
                 <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                onClick={() => window.history.back()}></i>
                <h2>Bem-vindo(a) {this.state.nome}</h2>
                {/* Para passar uma funcao no onclick eu preciso passar uma funcao anonima */}
                    <button onClick={() => this.entrar('Guilherme')} >
                        Entrar no sistema
                    </button>
                    <br/>
                    <button onClick={() => this.setState({ nome: 'Visitante'}) }>
                        Sair
                    </button>
            </div>
        );
    }
}

export default App;