import React, { Component } from 'react';

class TodoItems extends Component{

    constructor(props){
        super(props);
        this.state={};

        this.delete = this.delete.bind(this);
    }

    delete(key){
        //Aqui eu estou enviando a key para a prop
        this.props.delete(key);
    }

    render(){
        return(
            <div>
                <h1>Itens</h1>
                <ul>
                    { this.props.lista.map((item)=>{
                        return(
                            <li onClick={ () => this.delete(item.key)} key={item.key}> {item.text} </li>
                        );
                    }) }
                </ul>
            </div>
        );
    }
}

export default TodoItems;