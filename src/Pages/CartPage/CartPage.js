import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StyledCartPage, StyledFinalInfo } from "./CartStyle";
import styled from "styled-components";
import { useState } from "react";
import CartProduct from "./CartProduct";

export default function CartPage(params) {
  const [totalPrice, setTotalPrice] = useState(1);

  const macarrão =
    "https://img.itdg.com.br/tdg/images/recipes/000/101/040/356212/356212_original.jpg?mode=crop&width=710&height=400";

  const teste = {
    id: "num",
    compra: [
      {
        nome: "produto",
        img: macarrão,
        precouni: 10,
        qnt: 1
      },
      {
        nome: "produto2",
        img: macarrão,
        precouni: 20,
        qnt: 3
      },
      {
        nome: "produto3",
        img: macarrão,
        precouni: 30,
        qnt: 5
      },
      {
        nome: "produto3",
        img: macarrão,
        precouni: 40,
        qnt: 7
      },
    ],
  };

  return (
    <StyledCartPage>
      <Header />
      <h1>Carrinho</h1>
      <Container>
        {teste.compra.map((obj,idx) => (
          <CartProduct
            data={obj}
            key={idx}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
          />
        ))}
      </Container>

      <StyledFinalInfo>
        <h1>Valor Total : {totalPrice}</h1>
      </StyledFinalInfo>

      <Footer />
    </StyledCartPage>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
