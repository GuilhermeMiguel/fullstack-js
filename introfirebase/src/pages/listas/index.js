import React, {Component} from 'react';
import firebase from '../../services/fireConnection';

export default class Listas extends Component{

  constructor(props){
    super(props);
    this.state = {
     lista: []
    };

    //seta o state sempre que algo for alterado dentro da lista que vem do banco
    firebase.database().ref('usuarios').on('value', (snapshot) => {
      let state = this.state;
      state.lista = []; //limpando o array antes dele ser preenchido novamente


      snapshot.forEach((childItem) => {
        state.lista.push({  //dando um push no array de lista, ou seja, adicionando um item 
          key: childItem.key,
          nome: childItem.val().nome,
          idade: childItem.val().idade
        })
      });

      this.setState(state); //setando o state -- o array

    });



  }



  render(){

    return(
      <div>
        {this.state.lista.map((item) => {
          return(
            <div key={item.key}>
              <h3>ID: {item.key}</h3>
              <h1>Olá {item.nome} </h1>
              <h2>Idade: {item.idade} anos </h2>
            </div>
          );
        })}

      </div>
    );
  }
}