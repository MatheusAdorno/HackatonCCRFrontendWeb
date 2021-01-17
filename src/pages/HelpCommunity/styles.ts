import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-left: 20px;
  margin-right: 20px;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  display: flex;

  flex-direction: column;
`;

export const ProductsInfo = styled.div`
  background-color: #fffff8;

  border-radius: 45px;
  padding-left: 20px;
  padding-bottom: 30px;
  width: 420px;

  div {
    margin-top: 40px;
    p {
      display: flex;
      align-items: baseline;
      font-size: 64px;
      h1 {
        font-size: 64px;
      }
    }
    span {
      font-size: 36px;
    }
  }
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fffff8;

  border-radius: 45px;
  padding-top: 20px;
  padding-left: 50px;
  padding-bottom: 30px;
  padding-right: 50px;

  width: 600px;

  h1 {
    color: #f17c76;
  }

  img {
    width: 500px;
  }

  p {
    color: #a0a0a0;
  }
`;

export const DashedLine = styled.div`
  height: 200px;
  width: 1px;
  margin-right: auto;
  margin-left: auto;

  border-color: #fffff8;
  border-style: dashed;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #fffff8;

  border-radius: 45px;
  padding-top: 20px;
  padding-left: 50px;
  padding-bottom: 30px;
  padding-right: 50px;
  p {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    font-size: 24px;

    color: #de3e3d;
    h1 {
      font-size: 72px;
      color: #61bb7b;
    }
  }

  span {
    font-size: 21px;

    margin-top: 20px;

    color: #e68181;
  }

  h2 {
    font-size: 36px;

    margin-top: 20px;

    color: #86b6ef;
  }

  a {
    font-size: 24px;
    text-align: right;

    margin-top: 15px;

    color: #aa96e3;

    text-decoration: none;
  }
`;

export const VerticalDash = styled.div`
  height: 1px;
  width: 250px;

  border-style: dashed;
  border-color: #b9b9b9;
  border-width: 2px;

  margin-right: 10px;
`;

export const CalendarContainer = styled.div`
  position: sticky;
  top: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fffff8;

  border-radius: 45px;
  padding-top: 20px;
  padding-left: 50px;
  padding-bottom: 30px;
  padding-right: 50px;
  margin-top: 30px;

  h1 {
    font-size: 24px;
    color: #de3e3d;
  }

  p {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    font-size: 24px;

    color: #e68181;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: row;

    h2 {
      color: #329f57;
    }
  }
`;

export const DotedTag = styled.div`
  display: flex;
  flex-direction: column;

  width: 40px;
  height: 120px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  align-items: center;

  border-radius: 50px;

  background-color: #fffff8;

  padding-bottom: 10px;

  p {
    font-size: 38px;
    margin-top: -10px;
    color: #787878;
  }
`;
