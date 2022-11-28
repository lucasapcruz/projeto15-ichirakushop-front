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

const Stock = styled.div`
  width: 100%;
  padding-bottom: 10px;
  position: relative;

  p {
    color: #a0a0a0;
    margin-left: 10px;
  }

  h2 {
    position: absolute;
    right: 60px;
    bottom: 40px;
  }
`;

const StyledProductsContainer = styled.section`
  margin-top: 24px;
  border: 1px black solid;

  display: flex;
  flex-direction: column;
`;

const StyledFinalInfo = styled.div`
  margin-bottom: 100px;
  margin-top: 40px;
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    position: absolute;
    bottom: 50px;
  }

  button {
    width: 180px;
    height: 40px;
    font-size: 16px;

    position: absolute;
    bottom: 0px;
  }
`;


export {
  Container,
  PersonalInfo,
  ProductInfo,
  LogoContainer,
  ProductName,
  Stock,
  Price,
  StyledProductsContainer,
  StyledFinalInfo
};
