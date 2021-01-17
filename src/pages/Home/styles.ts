import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  font-size: 30px;
  font-family: 'Rowdies', cursive;
  align-items: center;
`;

export const Header = styled.div`
  background-color: #eee;
  padding: 30px;
  text-align: center;
`;

export const ContainerTopics = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 90px;

  img#counter {
    position: relative;
    width: 60%;
    margin-top: 220px;
    margin-left: auto;
    margin-right: auto;
  }

  img#objective {
    width: 60%;
    max-height: 525px;
  }
`;

export const Content = styled.div`
  width: 100%;
  color: #7fb3f0;

  h2 {
    width: 60%;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    width: 60%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TopicOne = styled.div`
  color: #e68181;
  text-align: center;
  margin-top: 250px;

  h3 {
    width: 70%;
    font-weight: bold;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    width: 80%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    font-weight: lighter;
  }
`;

export const Counter = styled.div`
  position: absolute;
  width: 100%;
  color: #eab25d;
  text-align: center;
  margin-top: 310px;

  h1 {
    width: 45%;
    font-size: 50px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    color: #7fb3f0;
    font-size: 220px;
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
  }

  p {
    width: 70%;
    font-weight: bold;
    font-size: 45px;
    text-align: end;
  }

  button {
    margin-top: 110px;
    height: 150px;
    width: 700px;
    color: #e68181;

    background-color: #f5f185;
    border: none;

    cursor: pointer;

    h1 {
      width: 100%;
    }
  }

  button:hover {
    color: #7fb3f0;
    border-style: solid;
    border-color: #7fb3f0;
    transition: all 0.2s, color 0.2s;
  }
`;

export const ContainerText = styled.div`
  width: 100%;
  color: #8a70d6;
  text-align: center;
  margin-top: 340px;
  font-family: 'Roboto Condensed', sans-serif;

  h1 {
    font-weight: bold;
  }

  p {
    font-weight: normal;

    margin-top: 50px;
  }

  div {
    margin-top: 30px;

    input {
      border-style: solid;
      border-color: #b8b6b6;
      border-radius: 15px;

      background-color: transparent;

      width: 450px;
      padding: 10px 20px 10px 20px;
      margin-right: 20px;
    }

    button {
      font-size: 12px;

      margin-top: 30px;

      height: 60px;
      width: 200px;
      color: #e68181;

      background-color: #f5f185;
      border: none;

      cursor: pointer;
    }

    button:hover {
      color: #7fb3f0;
      border-style: solid;
      border-color: #7fb3f0;
      transition: all 0.2s, color 0.2s;
    }
  }
`;

export const Navend = styled.div`
  display: flex;
  background-color: #a1e3b4;
  width: 100%;
  height: 100px;
  align-items: center;

  img#logo {
    margin-left: 30px;
    height: 70px;
    margin-left: auto;
    margin-right: auto;
  }

  img#socialmedia {
    height: 40px;
    margin-left: auto;
    margin-right: auto;
  }
`;
