import React, { Component } from 'react';
import './styles.css';

class RenderizacaoCondicional extends Component {
    
    constructor(props) {
        super(props); 
        
        this.state = {
            status: true
        };

    }

    render() {
        return(
            <div className="container-renderizacao">
                <div className="container-itens">

                <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                onClick={() => window.history.back()}></i>
                                
                    {/* Aqui esta fazendo uma condicao, utilizo dois && para colocar o que eu quero exibir */}
                    {/* Pode ser para verificar se o campo esta vazio por exemplo */}
                    {this.state.status === true && 
                        <h1>Bem-vindo ao sistema!</h1>
                    }

                    {/* Operador ternário */}
                    {this.state.status ?
                        <div>
                            <h2>Bem-vindo ao sistema!</h2>
                        </div> :
                        
                        <div>
                            <h2>Olá visitante, faça o login!</h2>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default RenderizacaoCondicional;