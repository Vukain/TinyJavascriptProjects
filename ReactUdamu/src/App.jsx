import React from 'react';
import StoreProvider from './store/StoreProviderstore';
import './App.scss';

const App = () => {
  return ( 
    <StoreProvider>
    <header>Hello World</header>
    </StoreProvider>
  );
};

export default App;