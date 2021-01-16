import styled, { css } from 'styled-components';

interface NavbarProps {
  page: 'home' | 'products' | 'howTo' | 'helpCommunity';
}

export const NavBar = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 100px;
`;

export const InsideNav = styled.div<NavbarProps>`
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

    cursor: pointer;
  }

  ${props =>
    props.page === 'home' &&
    css`
      button#home {
        color: #aa96e3;
        border-color: #aa96e3;
      }
    `}

  ${props =>
    props.page === 'products' &&
    css`
      button#products {
        color: #aa96e3;
        border-color: #aa96e3;
      }
    `}

    ${props =>
    props.page === 'howTo' &&
    css`
      button#howTo {
        color: #aa96e3;
        border-color: #aa96e3;
      }
    `}

    ${props =>
    props.page === 'helpCommunity' &&
    css`
      button#helpCommunity {
        color: #aa96e3;
        border-color: #aa96e3;
      }
    `}

  button:hover {
    height: 100%;
    color: #aa96e3;
    border-color: #aa96e3;
    transition: border-color 0.3s, color 0.3s;
  }
`;
