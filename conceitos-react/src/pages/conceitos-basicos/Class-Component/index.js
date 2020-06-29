/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './styles.css';

    //Components Class
//classes que extendem component são components também

class Equipe extends Component {
    //obrigatoriamente esse componente precisa do metodo render
    render() {
        return(
            <div className="container-itens">
                <i className="fa fa-chevron-left fa-2x icone-voltar" onClick={() => window.history.back()}></i>        
                {/* Aqui eu tenho acesso as props pelo this */}
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
                <Social/>
            </div>
        );
    }
}

//Eu poderia criar outro componente de classe, para realizar as operações 
class Sobre extends Component {

    //obrigatoriamente esse componente precisa do metodo render
    render() {
        return(
            //Eu preciso sempre de um componente pai por volta daquilo que eu quero retornar 
        //como no caso uma div em volta dos h2 e h3, sem ela não funcionaria 
                <div className="sobre">
                     <h1>Props</h1>
                    {/* Aqui eu tenho acesso as props pelo this */}
                    <h2>Olá sou o(a) {this.props.nome}</h2>
                    <h4>Meu caro é {this.props.cargo}</h4>
                    <h4>Tenho {this.props.idade} anos</h4>
                </div>
        );
    }
}

const Social = () => {
    return (
        <div className="social">
            <a>Facebook </a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a >LinkedIn </a>
        </div>
    );
}


function ClassComponent() {
    return (
        <div className="container-class-component">
                <Equipe nome="Lucas" cargo="Programador" idade="29"/>
        </div>
    )
}

export default ClassComponent;