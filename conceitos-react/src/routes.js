import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

import Menu from './pages/Menu';

import StatesContador from './pages/conceitos-basicos/states-Contador';
import PropsComponents from './pages/conceitos-basicos/Props-Component';
import ClassComponent from './pages/conceitos-basicos/Class-Component';
import CicloVida from './pages/conceitos-basicos/Ciclo-Vida-Components';

import Eventos from './pages/conceitos-intermediarios/Eventos';
import Formularios from './pages/conceitos-intermediarios/Formularios';
import Listas from './pages/conceitos-intermediarios/Listas';
import RenderizacaoCondicional from './pages/conceitos-intermediarios/RenderizaoCondicional';
import Cronometro from './pages/conceitos-intermediarios/Projeto-Exemplo-Cronometro';
import BiscoitoSorte from './pages/conceitos-intermediarios/Projeto-Exemplo-BiscoitoDaSorte';

import Requisicoes from './pages/conceitos-avancados/Requisicoes-HTTP';
import TodoList from './pages/conceitos-avancados/TodoList/components/TodoList';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />

            <Route path="/states-contador" component={StatesContador} />
            <Route path="/props-components" component={PropsComponents} />
            <Route path="/class-component" component={ClassComponent} />
            <Route path="/ciclo-vida" component={CicloVida} />

            <Route path="/eventos" component={Eventos} />
            <Route path="/formulario" component={Formularios} />
            <Route path="/lista" component={Listas} />
            <Route path="/renderizacao-condicional" component={RenderizacaoCondicional} />
            <Route path="/cronometro" component={Cronometro} />
            <Route path="/biscoito-sorte" component={BiscoitoSorte} />

            <Route path="/requisicoes" component={Requisicoes} />
            <Route path="/todo" component={TodoList} />
        </Switch>
    </BrowserRouter>
);

export default Routes;