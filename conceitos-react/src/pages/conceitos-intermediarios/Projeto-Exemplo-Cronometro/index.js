/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import './styles.css'

class Cronometro extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'VAI'
    };
    
    //Criando as variaveis
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);

  }

  vai(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'VAI';
    }else{
        //Criando uma funcao que se repete a cada centezimo de segundo, atualizando o state e renderizando novamente o texto na tela
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
      state.botao = 'PAUSAR';
    }

    //Atualizando o state do botao, o texto 

    this.setState(state);
  
    }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'VAI';
    this.setState(state);

  }

  render(){
    return(
      <div className="container-cronometro">
        <div className="container-itens">
          <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                onClick={() => window.history.back()}></i>
            <img src={require('../../../assets/cronometro.png')} className="img" />
            <a className="timer">{this.state.numero.toFixed(1)}</a>
              <div className="areaBtn">
                <a className="btn" onClick={this.vai}>{this.state.botao}</a>
                <a className="btn" onClick={this.limpar}>LIMPAR</a>
              </div>
        </div>
      </div>
    );
  }
}

export default Cronometro;