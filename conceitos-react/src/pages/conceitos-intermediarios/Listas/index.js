import React, { Component } from 'react';
import Feed from './Feed';
import './styles.css';
 

class Listas extends Component {
    
    constructor(props) {
        super(props); 
        
        this.state = {
            feed: [
                {id: 1, username: 'Guilherme', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Miguel', curtidas: 15, comentarios: 20},
                {id: 3, username: 'Silva', curtidas: 20, comentarios: 4},
                {id: 4, username: 'Zé', curtidas: 1, comentarios: 1},
            ]
        };  
    }

    render() {
        return(
            <div className="container-lista">
                    <div className="container-itens">
                    <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                onClick={() => window.history.back()}></i>
                    {this.state.feed.map((item) =>{
                        return(
                            <div key={item.id}>
                                <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Listas;