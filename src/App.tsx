import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Router from './routes/Router';

import BackgroundImg from './assets/BackgroundAll.png';

const App: React.FC = () => (
  <div style={{ backgroundImage: `url(${BackgroundImg})`, width: '100%' }}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyle />
  </div>
);

export default App;
