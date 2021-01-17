import React from 'react';

import {
  Container,
  ButtonBox,
  TitleContainer,
  MiniContainer,
  MiniButtonBox,
  MiniTitleContainer,
  MainContainer,
  Main,
} from './styles';

import NavBar from '../../components/NavBar/Navbar';
import BottomNav from '../../components/BottomNav/BottomNav';

import ProductImg from '../../assets/ProductImg.png';

const Product: React.FC = () => (
  <>
    <NavBar page="products" />
    <Main>
      <MainContainer>
        <Container>
          <ButtonBox type="button">
            <TitleContainer>
              <div>
                <h1>Kit Anotações 1</h1>
                <p>
                  Kit com 3 blocos de notas de folhas recicladas sem pauta
                  15x21cm.
                </p>
              </div>
              <span>
                <p>R$</p>
                70,00
              </span>
            </TitleContainer>
            <img src={ProductImg} alt="ProductImg" />
          </ButtonBox>
          <MainContainer>
            <MiniContainer>
              <MiniButtonBox type="button">
                <MiniTitleContainer>
                  <div>
                    <h1>Kit Anotações 2</h1>
                    <p>
                      Kit com 3 blocos de notas de folhas recicladas sem pauta
                      15x21cm.
                    </p>
                  </div>
                  <span>
                    <p>R$</p>
                    70,00
                  </span>
                </MiniTitleContainer>
                <img src={ProductImg} alt="ProductImg" />
              </MiniButtonBox>
              <MiniButtonBox type="button">
                <MiniTitleContainer>
                  <div>
                    <h1>Kit Anotações 2</h1>
                    <p>
                      Kit com 3 blocos de notas de folhas recicladas sem pauta
                      15x21cm.
                    </p>
                  </div>
                  <span>
                    <p>R$</p>
                    70,00
                  </span>
                </MiniTitleContainer>
                <img src={ProductImg} alt="ProductImg" />
              </MiniButtonBox>
            </MiniContainer>
            <MiniContainer>
              <MiniButtonBox type="button">
                <MiniTitleContainer>
                  <div>
                    <h1>Kit Anotações 2</h1>
                    <p>
                      Kit com 3 blocos de notas de folhas recicladas sem pauta
                      15x21cm.
                    </p>
                  </div>
                  <span>
                    <p>R$</p>
                    70,00
                  </span>
                </MiniTitleContainer>
                <img src={ProductImg} alt="ProductImg" />
              </MiniButtonBox>
              <MiniButtonBox type="button">
                <MiniTitleContainer>
                  <div>
                    <h1>Kit Anotações 2</h1>
                    <p>
                      Kit com 3 blocos de notas de folhas recicladas sem pauta
                      15x21cm.
                    </p>
                  </div>
                  <span>
                    <p>R$</p>
                    70,00
                  </span>
                </MiniTitleContainer>
                <img src={ProductImg} alt="ProductImg" />
              </MiniButtonBox>
            </MiniContainer>
          </MainContainer>
        </Container>

        <Container>
          <MainContainer>
            <MiniContainer>
              <MiniButtonBox type="button">
                <MiniTitleContainer>
                  <div>
                    <h1>Kit Anotações 2</h1>
                    <p>
                      Kit com 3 blocos de notas de folhas recicladas sem pauta
                      15x21cm.
                    </p>
                  </div>
                  <span>
                    <p>R$</p>
                    70,00
                  </span>
                </MiniTitleContainer>
                <img src={ProductImg} alt="ProductImg" />
              </MiniButtonBox>
              <MiniButtonBox type="button">
                <MiniTitleContainer>
                  <div>
                    <h1>Kit Anotações 2</h1>
                    <p>
                      Kit com 3 blocos de notas de folhas recicladas sem pauta
                      15x21cm.
                    </p>
                  </div>
                  <span>
                    <p>R$</p>
                    70,00
                  </span>
                </MiniTitleContainer>
                <img src={ProductImg} alt="ProductImg" />
              </MiniButtonBox>
            </MiniContainer>
            <MiniContainer>
              <MiniButtonBox type="button">
                <MiniTitleContainer>
                  <div>
                    <h1>Kit Anotações 2</h1>
                    <p>
                      Kit com 3 blocos de notas de folhas recicladas sem pauta
                      15x21cm.
                    </p>
                  </div>
                  <span>
                    <p>R$</p>
                    70,00
                  </span>
                </MiniTitleContainer>
                <img src={ProductImg} alt="ProductImg" />
              </MiniButtonBox>
              <MiniButtonBox type="button">
                <MiniTitleContainer>
                  <div>
                    <h1>Kit Anotações 2</h1>
                    <p>
                      Kit com 3 blocos de notas de folhas recicladas sem pauta
                      15x21cm.
                    </p>
                  </div>
                  <span>
                    <p>R$</p>
                    70,00
                  </span>
                </MiniTitleContainer>
                <img src={ProductImg} alt="ProductImg" />
              </MiniButtonBox>
            </MiniContainer>
          </MainContainer>
          <ButtonBox type="button">
            <TitleContainer>
              <div>
                <h1>Kit Anotações 1</h1>
                <p>
                  Kit com 3 blocos de notas de folhas recicladas sem pauta
                  15x21cm.
                </p>
              </div>
              <span>
                <p>R$</p>
                70,00
              </span>
            </TitleContainer>
            <img src={ProductImg} alt="ProductImg" />
          </ButtonBox>
        </Container>
      </MainContainer>
    </Main>
    <BottomNav />
  </>
);

export default Product;
