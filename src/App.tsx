import React from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home';

import backgroundImage from './assets/Background.png';

const App: React.FC = () => (
  <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      width: '100%',
    }}
  >
    <Home />
    <GlobalStyle />
  </div>
);

export default App;
