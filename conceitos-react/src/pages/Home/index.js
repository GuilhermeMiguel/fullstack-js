import React, { Component } from 'react';
import { Link }  from 'react-router-dom';

import './styles.css';

export default class Home extends Component {
   
    render() {
       
        return (
            <div className="App-header">
                <img src={require('../../assets/logo-react.png')} className="img" alt="logo"/>
                <Link to="/menu">
                    Aprenda React
                </Link>
            </div>
        );
    }
}