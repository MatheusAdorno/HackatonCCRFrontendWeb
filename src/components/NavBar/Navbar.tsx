import React from 'react';

import { NavBar, InsideNav } from './styles';

import LogoBig from '../../assets/LogoBig.png';

interface NavbarProps {
  page: 'home' | 'products' | 'howTo' | 'helpCommunity';
}

const Navbar: React.FC<NavbarProps> = ({ page }: NavbarProps) => (
  <>
    <NavBar>
      <nav>
        <InsideNav page={page}>
          <div>
            <img src={LogoBig} alt="logoBig" />
          </div>
          <button id="home" type="submit">
            Quem somos nós
          </button>
          <button id="products" type="submit">
            Produtos
          </button>
          <button id="howTo" type="submit">
            Nosso papel
          </button>
          <button id="helpCommunity" type="submit">
            Comunidades ajudadas
          </button>
        </InsideNav>
      </nav>
    </NavBar>
  </>
);

export default Navbar;
