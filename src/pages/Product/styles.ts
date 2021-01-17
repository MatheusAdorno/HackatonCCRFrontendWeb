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
