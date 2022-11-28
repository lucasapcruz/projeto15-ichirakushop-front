import styled from "styled-components";

const StyledCartPage = styled.div`
  overflow-x: scroll;
  h1 {
    margin-top: 110px;
    font-size: 30px;
  }
`;

const StyledProductsContainer = styled.section`
  margin-top: 24px;
  border: 1px black solid;

  display: flex;
  flex-direction: column;
`;

const ProductInfo = styled.div`
  display: flex;
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
  height: 60px;
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

const Counter = styled.div`
  width: 100px;
  margin: 10px;
  margin-left: 20px;

  background-color: #ffffff;
  border: 1px lightgray solid;

  display: flex;
  justify-content: space-between;

  button {
    width: 20px;
    height: 30px;
    background-color: #fafafa;
    border-radius: 5px;
  }

  p {
    color: #000;
    display: flex;
    align-items: center;
    margin: 0px;
  }
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
  StyledCartPage,
  StyledProductsContainer,
  ProductInfo,
  ProductName,
  LogoContainer,
  Stock,
  Counter,
  StyledFinalInfo,
};
