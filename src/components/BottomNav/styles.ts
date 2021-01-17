import styled from 'styled-components';

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

export const Container = styled.div`
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
