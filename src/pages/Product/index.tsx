import React, { useState } from 'react';
import Modal from 'react-modal';

import {
  Container,
  ButtonBox,
  TitleContainer,
  MiniContainer,
  MiniButtonBox,
  MiniTitleContainer,
  MainContainer,
  Main,
  StyledModal,
  HorizontalContainer,
  VerticalContainer,
  Slider,
  SliderContainer,
  SubtitleContainer,
} from './styles';

import NavBar from '../../components/NavBar/Navbar';
import BottomNav from '../../components/BottomNav/BottomNav';

import ProductImg from '../../assets/ProductImg.png';
import greenMarker from '../../assets/greenMarker.png';
import softRedMarker from '../../assets/softRedMarker.png';
import redMarker from '../../assets/redMarker.png';

const Product: React.FC = () => {
  const [PopUpIsOn, setPopUpIsOn] = useState(false);

  function handleClick() {
    setPopUpIsOn(!PopUpIsOn);
  }

  return (
    <>
      <NavBar page="products" />

      <Modal
        style={{
          content: {
            borderRadius: '45px',
            borderStyle: 'solid',
            borderWidth: '3px',
            maxHeight: '500px',
            width: '1000px',
            top: '20%',
            left: '20%',
            right: '20%',
            backgroundColor: '#FFFFF8',
          },
        }}
        isOpen={PopUpIsOn}
      >
        <StyledModal>
          <HorizontalContainer>
            <VerticalContainer>
              <h2>
                <button type="button" onClick={handleClick}>
                  X
                </button>
                Quanto deseja pagar?
              </h2>
              <p>
                R$
                <h3>70,00</h3>
                mín 70,00
              </p>
            </VerticalContainer>
            <button id="comprar" type="button" onClick={handleClick}>
              Ir para pagamento
            </button>
          </HorizontalContainer>
          <SliderContainer>
            <Slider style={{ backgroundColor: '#D43034', width: '100%' }} />
            <Slider style={{ backgroundColor: '#F3827A', width: '80%' }} />
            <Slider style={{ backgroundColor: '#A1E3B4', width: '50%' }} />
          </SliderContainer>
          <SubtitleContainer>
            <p id="green">
              <img src={greenMarker} alt="greenMarker" />
              Essa porção vai para a Repaginar, e ajuda a alcançar e capacitar
              novas comunidades.
            </p>
            <p id="softRed">
              <img src={softRedMarker} alt="greenMarker" />
              Essa porção vai diretamente para os produtores do papel.
            </p>
            <p id="red">
              <img src={redMarker} alt="greenMarker" />
              Essa porção vai para a instituição de caridade do mês:
              <span />
              <a href="/"> Hospital de Leucemia</a>
            </p>
          </SubtitleContainer>
        </StyledModal>
      </Modal>
      <Main>
        <MainContainer>
          <Container>
            <ButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
                <MiniButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
                <MiniButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
                <MiniButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
                <MiniButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
                <MiniButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
                <MiniButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
                <MiniButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
                <MiniButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
            <ButtonBox type="button" onClick={() => setPopUpIsOn(true)}>
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
};

export default Product;
