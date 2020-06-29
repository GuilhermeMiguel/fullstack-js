import React, { Component } from 'react';
import { Link }  from 'react-router-dom';
import './style.css';


//https://sujeitoprogramador.com/rn-api/?api=posts


class Requisicoes extends Component{

    constructor(props){
        super(props);
        this.state = {
            nutri: []
        };

    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        
        //Aqui ele esta fazendo uma promisse para pegar o que retorna da api
        
        fetch(url) 
        .then((r)=> r.json()) //se retornar o resultado ele vai para a proxima linha 
        .then((json)=>{ //se conseguir transformar em json ele vai para a proxima linha
            
            let state = this.state;
            state.nutri = json; //salvando o que vem da api em um array
            this.setState(state);
            console.log(json);
        })        

    }

     render(){
        return(
            <div className="container">
                <header>
                    <strong>React Nutri</strong>
                </header>

                {this.state.nutri.map((item)=>{
                    return(
                        <article key={item.id} className="post">
                            <strong className="titulo"> {item.titulo} </strong>
                            <img src={item.capa} className="capa" alt="capa"/>
                            <p className="subtitulo">{item.subtitulo}</p>
                            <Link className="botao">Acessar</Link>
                        </article>
                    );
                })}

            </div>         
        );
    }
}

export default Requisicoes;