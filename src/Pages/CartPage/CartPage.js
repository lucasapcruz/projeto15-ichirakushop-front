import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StyledCartPage, StyledFinalInfo } from "./CartStyle";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";

export default function CartPage(params) {
  const [cartData, setCartData] = useState({});
  const navigate = useNavigate();
  const { config } = useContext(AuthContext);
  
  useEffect(() => {
    axios.get("http://localhost:5000/cart", config)
    .then(res=>setCartData(res.data))
    .catch(err=>console.log(err.response.data))
  }, []);

  return (
    <StyledCartPage>
      <Header />
      <h1>Carrinho</h1>
      <Container>
        {cartData.products !== undefined && cartData.products.map((obj, idx) => (
          <CartProduct
            data={obj}
            key={idx}
          />
        ))}
      </Container>

      <StyledFinalInfo>
        <h1>Valor Total : {cartData.totalPrice}</h1>
        <button onClick={() => navigate("/checkout")}>
          Ir para proxima etapa!
        </button>
      </StyledFinalInfo>

      <Footer />
    </StyledCartPage>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
