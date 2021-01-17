import React from 'react';

import {
  Container,
  LeftText,
  TextGreen,
  RightText,
  TextRed,
  TextBlue,
  TextOrange,
  TextPurple,
} from './styles';

import NavBar from '../../components/NavBar/Navbar';
import BottomNav from '../../components/BottomNav/BottomNav';

import backgroundImg from '../../assets/StepByStep.png';

const HowTo: React.FC = () => (
  <>
    <NavBar page="howTo" />
    <Container
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '97%',
      }}
    >
      <LeftText>
        <TextRed>
          <h2>Faça o papel lixo em pedacinhos!</h2>
          <p>
            Obtenha o papel que vai ser reciclado e parta ele em pequenos
            pedaços, mas eles não precisam ser muito miudinhos.
          </p>
        </TextRed>
      </LeftText>

      <RightText>
        <TextGreen>
          <h2 id="first">Deixe de molho para o papel se desfazer!</h2>
          <p>
            Deixe os pedaços de molho totalmente submersos na água em um balde
            por 3 dias para que as fibras se desgrudem do papel.
          </p>
        </TextGreen>
      </RightText>

      <LeftText>
        <TextBlue>
          <h2>Triture o papel para fazer uma pasta!</h2>
          <p>
            Triture a água com os papeis num liquidificador ou processador de
            alimentos para criar uma pasta grossa cinza.
          </p>
        </TextBlue>
      </LeftText>

      <RightText>
        <TextPurple>
          <h2>Misture a pasta com água em uma piscininha!</h2>
          <p>
            Despeje toda a pasta em uma piscininha de bebê e encha de água até
            dar 10 centímetros de altura.
          </p>
        </TextPurple>
      </RightText>

      <LeftText>
        <TextOrange>
          <h2>Mergulhe para encher a tela com a mistura!</h2>
          <p>
            Mergulhe uma tela com algum tecido permeável (um pano serve) ou uma
            peneira na mistura, preenchendo-a.
          </p>
        </TextOrange>
      </LeftText>

      <RightText>
        <TextRed>
          <h2 id="last">Deixe secando por um tempo.</h2>
          <p>Deixe a tela exposta ao sol por pelo ou menos 1 dia.</p>
        </TextRed>
      </RightText>

      <LeftText>
        <TextGreen>
          <h2 id="last">Parabéns! Seu papel está prontinho!</h2>
        </TextGreen>
      </LeftText>
      <div id="bottomspace" />
    </Container>
    <BottomNav />
  </>
);

export default HowTo;
