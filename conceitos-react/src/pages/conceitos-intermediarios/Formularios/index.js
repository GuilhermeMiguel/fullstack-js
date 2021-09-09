import React, { Component } from 'react';
import './styles.css';

class Formularios extends Component {
    
    constructor(props) {
        super(props); 
        
        this.state = {
            form: {
                nome: '',
                email: '',
                senha: '',
                sexo: ''
            },
            error: ''
        };  

        this.trocaForm = this.trocaForm.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
    }

    trocaForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    cadastrar(event){
        const {nome, email, senha, sexo} = this.state.form;

        if(nome !== '' && sexo !== '' && email !== '' && senha !== ''){
            this.setState({ error : ''});
            alert(`Nome: ${nome} \nSexo: ${sexo} \nEmail: ${email} \nSenha: ${senha}`);
        }
        else {
            this.setState({ error : 'Ops! Parece que esta faltando algo!'});
        }

        event.preventDefault();
    }

    render() {
        return(
            <div className="container-formulario">
                <div className="container-itens">
                                    {/* Renderização Condicional */}
                  {/* Se o valor for diferente de vazio ele mostra */}

                    <div className="left">
                    <i className="fa fa-chevron-left fa-2x icone-voltar" 
                                onClick={() => window.history.back()}></i>
                    <form onSubmit={this.cadastrar} className="form">
                    {this.state.error && <p>{this.state.error}</p>}
                    <h2>Login:</h2>

                        <label>Nome:</label>
                        <input type="text" name="nome" value={this.state.form.nome}
                                onChange={this.trocaForm} /> <br />

                        <label>Sexo:</label>
                        <select name="sexo" value={this.state.form.sexo}
                                onChange={this.trocaForm}> 
                                <option></option>
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                        </select>
                        <br />

                        <label>E-mail:</label>
                        <input type="email" name="email" value={this.state.form.email}
                                onChange={this.trocaForm} /> <br />

                        <label>Senha:</label>
                        <input type="password" name="senha" value={this.state.form.senha}
                                onChange={this.trocaForm} /> <br />
                    
                        <button type="submit">Cadastrar</button>
                    </form>
                    </div>

                    <div className="right">
                    <div>
                        <h2>Valores atualizados:</h2>
                        <h3>{this.state.form.nome}</h3>
                        <h3>{this.state.form.email}</h3>
                        <h3>{this.state.form.senha}</h3>
                        <h3>{this.state.form.sexo}</h3>
                    </div>
                </div>
                </div>                
            </div>
        );
    }
}

export default Formularios;