import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

import './styles.css';

export default class Home extends Component {
   
    render() {
       
        return (
            <div className="container-menu">
                <div className="container-itens">
                    <h1>Conceitos Firebase</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                        <Link to="/intro">Introdução</Link>
                                </td>
                                </tr>

                                <tr>
                                    <td>
                                        <Link to="/cadastro">Cadastro</Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <Link to="/login">Login</Link>
                                    </td>
                                </tr>

                                <tr>
                                <td>
                                        <Link to="/sign">Sign</Link>
                                </td>
                                </tr>

                                <tr>
                                <td>
                                        <Link to="/sign2">Sign 2</Link>
                                </td>
                                </tr>

                                <tr>
                                <td>
                                        <Link to="/listas">Listas</Link>
                                </td>
                                </tr>
                        </tbody>
                    </table>    
                </div>                       
            </div>
        );
    }
}