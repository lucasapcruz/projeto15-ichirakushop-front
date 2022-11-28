import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StyledCartPage, StyledFinalInfo } from "./CartStyle";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";

export default function CartPage(params) {
  const [cartData, setCartData] = useState({});
  const {cartId} = useContext(CartContext);
  const navigate = useNavigate();
  const { token, config } = useContext(AuthContext);

  useEffect(() => {
    if(token){
      axios.get("https://ichiraku-shop.onrender.com/cart", config)
      .then(res => setCartData(res.data))
      .catch(err => console.log(err.response.data))
    }else{
      axios.get(`https://ichiraku-shop.onrender.com/cart/${cartId}`, config)
      .then(res => setCartData(res.data))
      .catch(err => console.log(err.response.data))
    }

  }, []);

  function validateAndGoToCheckout(token) {
    if (token) {
      navigate("/checkout")
    }else{
      navigate("/sign-in")
    }
  }

  return (
    <StyledCartPage>
      <Header />
      <h1>Carrinho</h1>
      <Container>
        {cartData.products ? cartData.products.map((obj, idx) => (
          <CartProduct
            id={obj.productId}
            cartId = {cartId}
            data={obj}
            key={idx}
            setCartData={setCartData} />
        )) : <p>Você ainda não adicionou nenhum produto no carrinho</p>}
        <StyledFinalInfo>
          <h1>Valor Total: {cartData.totalPrice}</h1>
          {cartData.products ? <button onClick={() => validateAndGoToCheckout(token)}>Ir para a próxima etapa</button> : ""}
        </StyledFinalInfo>
      </Container><Footer />
    </StyledCartPage >
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;