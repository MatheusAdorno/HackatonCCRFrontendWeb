import React from 'react';

import LogoSmall from '../../assets/LogoSmall.png';
import SocialMedia from '../../assets/socialmedia.png';

import { Navend, Container } from './styles';

const BottomNav: React.FC = () => (
  <Container>
    <Navend>
      <img id="logo" src={LogoSmall} alt="logoSmall" />
      <img id="socialmedia" src={SocialMedia} alt="SocialMedia" />
    </Navend>
  </Container>
);

export default BottomNav;
