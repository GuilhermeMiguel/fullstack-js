import React from 'react';
import './styles.css'
    //Components
//São partes de uma pagina que eu crio e exporto como js

const BemVindo = (props) => {
    return (
        <div className="bem-vindo">
            <h2> BemVindo(a) {props.nome} </h2>
            <h4> Tenho {props.idade} anos</h4>
        </div>
    );
}

const Equipe = (props) => {
    return (
        <div className="sobre">
            <Sobre  nome={props.nome}  cargo={props.cargo}
                idade={props.idade} />
        </div>
    );
}

const Sobre = (props) => {
    return (
        <div className="sobre">
            <h4> Oá sou o(a) {props.nome} </h4>
        </div>
    );
}

    //Props são propriedades que eu utilizo no meu jsx
//Eu posso passar as props de um componente para o outro, por exemplo:

function PropsComponents() {
    return (
        <div className="container-props">
             <div className="container-itens">
             <i className="fa fa-chevron-left fa-2x icone-voltar" onClick={() => window.history.back()}></i>
                <h1>Props</h1> 
                <BemVindo nome="Lucas" idade="14" />
                <BemVindo nome="Amanda" idade="25" />
                {/* Essas são as props, eu posso passar valores para elas, como se fossem propriedades no html   */}
                <Equipe nome="Lucas" cargo="Programador" idade="29"/>
            </div>
        </div>
    )
}

export default PropsComponents;