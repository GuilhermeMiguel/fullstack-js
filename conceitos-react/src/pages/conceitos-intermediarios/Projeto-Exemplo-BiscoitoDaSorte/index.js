/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './styles.css'

class BiscoitoSorte extends Component{

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };

        this.quebraBiscoito = this.quebraBiscoito.bind(this);

        this.frases = [
            'Siga os bons e aprenda com eles.', 
            'O bom-senso vale mais do que muito conhecimento.', 
            'O riso é a menor distância entre duas pessoas.', 
            'Deixe de lado as preocupações e seja feliz.',
            'Realize o óbvio, pense no improvável e conquiste o impossível.',
            'Acredite em milagres, mas não dependa deles.',
            'A maior barreira para o sucesso é o medo do fracasso.'];

    }

    quebraBiscoito(){
        let state = this.state;
        let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
        this.setState(state);

    }

    render(){
        return(
            <div className="container-biscoito">
                <div className="container-itens">
                <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                onClick={() => window.history.back()}></i>
                    <img src={require('../../../assets/biscoito.png')} className="img" />
                    
                    {/* Passando a funcao e o nome como parametros */}
                    <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
                    <h3 className="textoFrase">{this.state.textoFrase}</h3>
                </div>
            </div>         
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                
                {/* Esta recebendo a função como parametro pelos props */}
                <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
            </div>
        );
    }
}



export default BiscoitoSorte;