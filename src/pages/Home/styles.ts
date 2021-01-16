import styled from 'styled-components';

import { shade } from 'polished';

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

export const NavBar = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 100px;
`;

export const InsideNav = styled.div`
  display: flex;
  place-content: center;
  flex-direction: row;
  height: 120px;

  div {
    display: flex;
    padding: 10px 10px 10px 10px;
    height: 120px;
    align-items: center;

    img {
      height: 70px;
    }
  }

  button {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;

    max-height: 120px;
    padding: 30px 20px 30px 20px;
    background-color: #a1e3b4;
    color: #fff;
    font-size: 35px;
    border-style: none none solid none;
    border-color: #a1e3b4;
    border-width: 4px;
    transition: border-color 0.2s;
    transition: color 0.2s;
  }

  button:hover {
    height: 100%;
    color: #aa96e3;
    border-color: #aa96e3;
  }
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
  color: #e68181;
  text-align: center;
  margin-top: 340px;

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

    h1 {
      width: 100%;
    }
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
      font-size: 14px;

      margin-top: 30px;

      height: 60px;
      width: 200px;
      color: #e68181;

      background-color: #f5f185;
      border: none;
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
