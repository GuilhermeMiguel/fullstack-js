import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebase from './firebase';
import './global.css';

import Home from './components/Home';
import Header from './components/Header';

import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import New from './components/New';

class App extends Component{
  
  state = {
    firebaseInitialized : false
  };

  componentDidMount() {
    firebase.isInitilized().then(resultado => {     //Utilizo o .then pois o metodo que estou chamando é uma promise
      //devolve o usuario 
      this.setState({firebaseInitialized: resultado});
    })
  }

  render() {
        return this.state.firebaseInitialized !== false ? (
            <BrowserRouter>
              <Header/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/dashboard/new" component={New} />
              </Switch>
            </BrowserRouter>
        ) : (
            <h1>Carregando...</h1>
        );
    }
}

export default App;
