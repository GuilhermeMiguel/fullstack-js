import React, { Component } from 'react';
import Membro from './Membro';
import './styles.css';
   

class Eventos extends Component {
    
    render() {
        return(
            <div className="container-eventos"> 
                <Membro nome="Visitante" />
            </div>
        );
    }
}

export default Eventos;