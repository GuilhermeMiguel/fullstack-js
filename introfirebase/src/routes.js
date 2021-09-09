import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';

import Introducao from './pages/introducao';
import Cadastro from './pages/cadastro';
import Sign from './pages/sign';
import Sign2 from './pages/sign2';
import Listas from './pages/listas';

import Login from './pages/login';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/intro" component={Introducao} />
            <Route path="/cadastro" component={Cadastro} />
            <Route exact path="/sign" component={Sign} />
            <Route exact path="/sign2" component={Sign2} />
            <Route path="/listas" component={Listas} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Routes;