import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';


import history from './services/history';
import store from './store';

import Routes from './routes';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Header/>
          <Routes/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
