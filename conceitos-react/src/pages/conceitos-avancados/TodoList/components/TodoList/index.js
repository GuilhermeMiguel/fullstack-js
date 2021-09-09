import React, { Component } from 'react';
import TodoItems from '../TodoItems';
import './styles.css';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };

            //Aqui com o rest operator ele pega o que esta dentro do array e adiciona a parte nova 
            this.setState({ items: [...state.items, newItem] });

        }


        e.preventDefault();

        //Aqui para limpar o campo tarefa
        this.setState({ tarefa: '' });
    }

    log(){
        console.log(this.state.items);
    }

    deleteItem(key){
        console.log('Item a ser deletado: ' + key);
        let filtro = this.state.items.filter( (item) =>{
            // Retorna apenas os items que tiverem a key diferente da key que recebe por parametro na funcao
            return(item.key !== key);
        })

        //filtro foi carregado somente com os itens diferentes daquele que se quer apagar então ele seta novamente o state
        this.setState({items: filtro});
    }

    render(){
        return(
            <div className="container-todo">
                <div className="container-itens">
                    <div className="left">
                    <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                    onClick={() => window.history.back()}></i>
                        <br/><br/><br/><br/>
                        <h1>TodoList</h1>
                        <form onSubmit={this.addItem}>
                            <input type="text" placeholder="Nova Tarefa?" name="tarefa"
                                value={this.state.tarefa} onChange={ (ev) => this.setState({tarefa: ev.target.value})}
                                ref={ (event) => this._tarefaInput = event } />
                            <button type="submit">
                                Adicionar
                            </button>       
                        </form>
                        <br/>
                        <button onClick={this.log}>LOG</button>

                        </div>
                    {/* Passa para o componente todoItems o array de itens */}
                    {/* Nessa prop delete eu estou recebendo a key */}
                    <div className="right">
                            <TodoItems lista={this.state.items} delete={this.deleteItem}/>
                    </div>
              
                </div>
            </div>
        )
    }
}

export default TodoList;