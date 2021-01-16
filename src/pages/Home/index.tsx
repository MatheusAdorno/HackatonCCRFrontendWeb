import React from 'react';

import { Container, Header, NavBar, InsideNav } from './styles';

const Home: React.FC = () => (
  <Container>
    <Header>
      <h4>Quer Ajudar? Clique aqui para doar!</h4>
    </Header>
    <NavBar>
      <nav>
        <InsideNav>
          <p>Quem somos nós</p>
          <p>Produtos</p>
          <p>Nosso papel</p>
          <p>Comunidades ajudadas</p>
        </InsideNav>
      </nav>
    </NavBar>
  </Container>
);

export default Home;
