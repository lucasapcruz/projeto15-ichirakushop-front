import styled from "styled-components";

const Container = styled.div`
  overflow-x: scroll;
  margin: 10px;

  h1 {
    margin-top: 110px;
    margin-bottom: 10px;
    font-size: 30px;
  }
`;

const PersonalInfo = styled.div`
  h2 {
    font-size: 20px;
    margin: 10px 0px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  margin: 10px;
  border: lightgrey 1px solid;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 60px;
  height: 60px;
  margin: 10px;

  img {
    width: 100%;
    display: inline;
    margin-right: 10px;
  }
`;

const ProductName = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin: 10px;
  justify-content: space-between;

  h3 {
    font-size: 24px;
    color: #1c1c1c;
  }

  p {
    font-size: 14px;
    color: #a9a9a9;
  }
`;

const Price = styled.div`
display:flex;
justify-content: space-between;
`;

export {
  Container,
  PersonalInfo,
  ProductInfo,
  LogoContainer,
  ProductName,
  Price,
};
