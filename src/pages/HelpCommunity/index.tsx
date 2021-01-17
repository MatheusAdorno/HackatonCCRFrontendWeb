import React from 'react';

import {
  MainContainer,
  LeftContainer,
  MiddleContainer,
  RightContainer,
  ProductsInfo,
  NewsContainer,
  DashedLine,
  InfoContainer,
  VerticalDash,
  CalendarContainer,
  DotedTag,
  DateContainer,
  TitleContainer,
} from './styles';

import NavBar from '../../components/NavBar/Navbar';
import BottomNav from '../../components/BottomNav/BottomNav';

import NewsImage from '../../assets/NewImage.png';

const HelpCommunity: React.FC = () => (
  <>
    <NavBar page="helpCommunity" />
    <MainContainer>
      <LeftContainer>
        <ProductsInfo>
          <div style={{ color: '#DC3B3B' }}>
            <p>173.192</p>
            <span style={{ color: '#F17C76' }}>Produtos vendidos</span>
          </div>

          <div style={{ color: '#8FDAA5' }}>
            <p>74</p>
            <span style={{ color: '#A5DCB0' }}>Comunidades alcançadas</span>
          </div>

          <div style={{ color: '#86B6EF' }}>
            <p>296</p>
            <span style={{ color: '#ADC8EA' }}>
              Kits de ferramentas entregues
            </span>
          </div>

          <div style={{ color: '#AA96E3' }}>
            <p>4.053.182</p>
            <span style={{ color: '#C3B3EB' }}>Folhas produzidas</span>
          </div>

          <div id="yellow">
            <p style={{ color: '#F8C16E', fontSize: '32px' }}>
              R$
              <h1>107.043,</h1>
              80
            </p>
            <span style={{ color: '#FDC97A' }}>Produtos vendidos</span>
          </div>
        </ProductsInfo>
      </LeftContainer>
      <MiddleContainer>
        <NewsContainer>
          <TitleContainer>
            <h1>Conseguimos chegar a mais uma comunidade!</h1>
            <DateContainer>
              <p>17</p>
              <span>FEV</span>
            </DateContainer>
          </TitleContainer>
          <img src={NewsImage} alt="imageNews" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in ...
          </p>
        </NewsContainer>
        <DashedLine />
        <NewsContainer>
          <TitleContainer>
            <h1>Conseguimos chegar a mais uma comunidade!</h1>
            <DateContainer>
              <p>6</p>
              <span>FEV</span>
            </DateContainer>
          </TitleContainer>
          <img src={NewsImage} alt="imageNews" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in ...
          </p>
        </NewsContainer>
        <DashedLine />
        <NewsContainer>
          <TitleContainer>
            <h1>Conseguimos chegar a mais uma comunidade!</h1>
            <DateContainer>
              <p>1</p>
              <span>FEV</span>
            </DateContainer>
          </TitleContainer>
          <img src={NewsImage} alt="imageNews" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in ...
          </p>
        </NewsContainer>
        <DashedLine />
        <DotedTag>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </DotedTag>
      </MiddleContainer>
      <RightContainer>
        <InfoContainer>
          <p>
            R$
            <h1>2812,73</h1>
          </p>
          <span>Doados nesse mês para a instituição:</span>
          <h2>Hospital de leucemia</h2>
          <a href="/">Saiba mais</a>
        </InfoContainer>
        <CalendarContainer>
          <h1>Fevereiro</h1>
          <p>janeiro</p>
          <div id="top">
            <VerticalDash />
            <h2>2021</h2>
          </div>
          <p>Dezembro</p>
          <p>Novembro</p>
          <p>Outubro</p>
          <p>Setembro</p>
          <p>Agosto</p>
          <p>Julho</p>
          <p>Junho</p>
          <p>Maio</p>
          <p>Abril</p>
          <p>Março</p>
          <div>
            <VerticalDash />
            <h2>2020</h2>
          </div>
        </CalendarContainer>
      </RightContainer>
    </MainContainer>
    <BottomNav />
  </>
);

export default HelpCommunity;
