import React from 'react';
import { useHistory } from 'react-router-dom';

import { NavBar, InsideNav } from './styles';

import LogoBig from '../../assets/LogoBig.png';

interface NavbarProps {
  page: 'home' | 'products' | 'howTo' | 'helpCommunity';
}

const Navbar: React.FC<NavbarProps> = ({ page }: NavbarProps) => {
  const history = useHistory();

  function goHome() {
    history.push('/');
  }

  function goToProducts() {
    history.push('/products');
  }

  function goHowTo() {
    history.push('/howto');
  }

  function goHelpCommunity() {
    history.push('/helpcommunity');
  }

  return (
    <>
      <NavBar>
        <nav>
          <InsideNav page={page}>
            <div>
              <img src={LogoBig} alt="logoBig" />
            </div>
            <button id="home" onClick={goHome} type="button">
              Quem somos nós
            </button>
            <button id="products" onClick={goToProducts} type="submit">
              Produtos
            </button>
            <button id="howTo" onClick={goHowTo} type="submit">
              Nosso papel
            </button>
            <button id="helpCommunity" onClick={goHelpCommunity} type="submit">
              Comunidades ajudadas
            </button>
          </InsideNav>
        </nav>
      </NavBar>
    </>
  );
};

export default Navbar;
