import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
    {/* Esse abre e fecha sem nada serve como um elemento pai mas que não inflencia em nada da formatação, como uma div faria
        Se chama fragment */}
    <GlobalStyle/>
    <Routes/>
    </>
  );
}

export default App;
