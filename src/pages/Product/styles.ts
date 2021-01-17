import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  justify-content: space-between;
`;

export const ButtonBox = styled.button`
  border-radius: 45px;
  border-style: solid;
  border-color: #fffff8;
  background-color: #fffff8;

  width: 600px;
  cursor: pointer;

  &:hover {
    border-color: #e68181;
  }

  img {
    width: 70%;
    margin-bottom: 30px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 60px;

  div {
    text-align: left;
    margin-left: 10%;
    margin-right: 0%;

    h1 {
      color: #e68181;
    }

    p {
      color: #a1e3b4;
      margin-top: 10px;
    }
  }
  span {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    font-family: 'Roboto Condensed';
    font-size: 64px;

    margin-right: 5%;

    p {
      font-size: 40px;
    }
  }
`;

export const MiniContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 650px;
`;

export const MiniButtonBox = styled.button`
  border-radius: 45px;
  border-style: solid;
  border-color: #fffff8;
  background-color: #fffff8;
  max-height: 300px;
  max-width: 300px;
  margin-top: 20px;
  justify-content: center;

  cursor: pointer;

  &:hover {
    border-color: #e68181;
  }

  img {
    margin-top: 10px;
    width: 70%;
    border-radius: 90px;
  }
`;

export const MiniTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;

  div {
    text-align: left;
    margin-left: 9%;

    h1 {
      font-size: 18px;
      color: #e68181;
    }

    p {
      font-size: 14px;
      color: #a1e3b4;
      margin-top: 5px;
    }
  }
  span {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    font-family: 'Roboto Condensed';
    font-size: 32px;

    margin-right: 4%;

    p {
      font-size: 18px;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  margin-right: 250px;
  margin-left: 250px;
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 30px 30px 30px;
`;

export const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  button#comprar {
    background-color: #f5f185;

    color: #e68181;

    border-style: solid;
    border-color: #f5f185;
    border-radius: 20px;

    height: 100px;
    width: 300px;
    cursor: pointer;
  }

  button#comprar:hover {
    color: #7fb3f0;
    border-style: solid;
    border-color: #7fb3f0;
    transition: all 0.2s, color 0.2s;
  }
`;

export const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    display: flex;
    font-size: 48px;
    color: #e68181;

    align-items: center;

    button {
      margin-right: 10px;
      text-decoration: none;
      color: #aaaaaa;
      border: none;
      background: none;

      font-size: 36px;

      cursor: pointer;
    }

    a:hover {
      color: #888888;
    }
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    margin-top: 10px;

    font-family: 'Roboto Condensed';

    h3 {
      font-size: 36px;
      margin: 0 10px 0 10px;

      border-style: solid;
      border-width: 1px;
      border-radius: 10px;
      border-color: #a1e3b4;
      padding: 2px 4px 2px 4px;
    }
  }
`;

export const Slider = styled.div`
  position: absolute;
  background-color: #a1e3b4;
  border-radius: 35px;

  height: 30px;

  text-align: left;
`;

export const SliderContainer = styled.div`
  position: relative;
  margin-top: 70px;

  margin-left: auto;
  margin-right: auto;

  width: 700px;
`;

export const SubtitleContainer = styled.div`
  margin-top: 100px;
  margin-left: 10px;

  p {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    align-items: center;

    span {
      width: 8px;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }

    a {
      color: #aa96e3;
    }
  }

  p#green {
    color: #8bd8a1;
  }

  p#softRed {
    color: #f3827a;
  }
  p#red {
    color: #d43034;
  }
`;
