import Header from "../../components/Header";
import Footer from "../../components/Footer";
import {
  Counter,
  LogoContainer,
  ProductInfo,
  ProductName,
  Stock,
  StyledCartPage,
  StyledFinalInfo,
  StyledProductsContainer,
} from "./CartStyle";
import styled from "styled-components";

export default function CartPage(params) {
  const macarrão =
    "https://img.itdg.com.br/tdg/images/recipes/000/101/040/356212/356212_original.jpg?mode=crop&width=710&height=400";

  const teste = {
    id: "num",
    compra: [
      {
        nome: "produto",
        img: macarrão,
        qnt: "num",
        precouni: "num",
        precot: "num",
      },
      {
        nome: "produto2",
        img: macarrão,
        qnt: "num2",
        precouni: "num2",
        precot: "num2",
      },
      {
        nome: "produto3",
        img: macarrão,
        qnt: "num3",
        precouni: "num3",
        precot: "num3",
      },
      {
        nome: "produto3",
        img: macarrão,
        qnt: "num3",
        precouni: "num3",
        precot: "num3",
      },
    ],
  };

  return (
    <StyledCartPage>
      <Header />
      <h1>Carrinho</h1>
      <Container>
        {teste.compra.map((obj) => (
          <StyledProductsContainer>
            <ProductInfo>
              <LogoContainer>
                <img src={obj.img} alt="logo" />
              </LogoContainer>
              <ProductName>
                <h3>{obj.nome}</h3>
                <p>descrição do produto com apenas os caracteres inicais</p>
              </ProductName>
            </ProductInfo>
            <Stock>
              <Counter>
                <button> - </button>
                <p>{obj.qnt}</p>
                <button> + </button>
              </Counter>
              <p>2345 disponiveis</p>
              <h2>{obj.precot}</h2>
            </Stock>
          </StyledProductsContainer>
        ))}
      </Container>

      <StyledFinalInfo>
        <h1>Valor Total : R$12940,87</h1>
      </StyledFinalInfo>

      <Footer />
    </StyledCartPage>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
