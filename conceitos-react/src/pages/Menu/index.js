import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

import './styles.css';

export default class Menu extends Component {
   
    render() {
       
        return (
            <div className="container-menu">
               <div className="container-itens">
                            <div className="item">
                            <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                onClick={() => window.history.back()}></i>
                                <p>
                                    Conceitos Básicos
                                </p>
                                <div className="sub-item">
                                    <Link to="/states-contador">States contador</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/props-components">Props Components</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/class-component">Class Component</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/ciclo-vida">Ciclo de Vida dos Components</Link>
                                </div>
                            </div>

                            <div className="item">
                                <p>
                                    Conceitos Intermediários
                                </p>

                                <div className="sub-item">
                                    <Link to="/eventos">Eventos</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/formulario">Formulario</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/lista">Lista</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/renderizacao-condicional">Renderizacao Condicional</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/cronometro">Cronometro</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/biscoito-sorte">Biscoito da Sorte</Link>
                                </div>
                            </div>
        
                            <div className="item">
                                <p>
                                    Conceitos Avançados
                                </p>

                                <div className="sub-item">
                                    <Link to="/requisicoes">Requisicoes HTTP</Link>
                                </div>

                                <div className="sub-item">
                                    <Link to="/todo">ToDo List</Link>
                                </div>
                            </div>
                </div>
            </div>
        );
    }
}