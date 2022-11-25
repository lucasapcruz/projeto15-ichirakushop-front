import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Counter, LogoContainer, ProductInfo, ProductName, Stock, StyledCartPage, StyledFinalInfo, StyledProductsContainer } from "./CartStyle";
import logo from "../../assets/img/logo.png";

export default function CartPage(params) {
  return (
    <StyledCartPage>
      <Header />
      <h1>Carrinho</h1>
      <StyledProductsContainer>
        <ProductInfo>
          <LogoContainer>
            <img src={logo} alt="logo" />
          </LogoContainer>
          <ProductName>
            <h3>Nome do produto</h3>
            <p>descrição do produto com apenas os caracteres inicais</p>
          </ProductName>
        </ProductInfo>
        <Stock>
          <Counter>
            <button> - </button>
            <p>4</p>
            <button> + </button>
          </Counter>
          <p>2345 disponiveis</p>
          <h2>R$1293,99</h2>
        </Stock>
      </StyledProductsContainer>
      <StyledFinalInfo>
        <h1>Valor Total : R$12940,87</h1>
      </StyledFinalInfo>

      <Footer />
    </StyledCartPage>
  );
}

