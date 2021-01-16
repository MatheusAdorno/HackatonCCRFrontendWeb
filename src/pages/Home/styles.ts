import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  font-size: 20px;
  font-family: 'Rowdies', cursive;
`;

export const Header = styled.div`
  background-color: #eee;
  padding: 30px;
  text-align: center;
`;

export const NavBar = styled.div`
  overflow: hidden;
  background-color: #a1e3b4;
`;

export const InsideNav = styled.div`
  display: flex;
  place-content: center;
  flex-direction: row;
  padding: 20px;

  > p {
    margin-left: 50px;
    color: #fff;
  }

  > p:hover {
    color: #aa96e3;
    text-decoration: underline #aa96e3;
  }
`;
