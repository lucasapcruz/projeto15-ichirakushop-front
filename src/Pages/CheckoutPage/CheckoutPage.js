import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";
import CheckoutProductDisplay from "./CheckoutProductDisplay";
import {
  Container,
  PersonalInfo,
  ProductInfo,
  StyledFinalInfo,
} from "./CheckoutStyle";

export default function CheckoutPage(params) {
  const [userInfo, setUserInfo] = useState([]);
  const [cartData, setCartData] = useState()
  const { config } = useContext(AuthContext);
  const {cartId} = useContext(CartContext);

  const navigate = useNavigate()


  useEffect(() => {
    axios
      .get("http://localhost:5000/user", config)
      .then((res) => {
        setUserInfo(res.data[0]);
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:5000/cart", config)
      .then((res) => {
        console.log(res.data)
        setCartData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function validateAndCreateOrder(cartId){
    const payload = {
      cartId
    }
    axios.post("http://localhost:5000/order", payload,config)
    .then(res => {
      console.log(res.data)
      alert("Pedido criado com sucesso")
      navigate("/")
    })
    .catch(err => {
      alert("Ops, tivemos um problema")
    })
  }

  return (
    <>
      <Header />
      <Container>
        <h1>CheckoutPage</h1>
        <PersonalInfo>
          <h2>Destinatário:</h2>
          <p>{userInfo.name}</p>
          <h2>Local de entrega:</h2>
          <p>{`CEP: ${userInfo.cep}`}</p>
          <p>{`Rua: ${userInfo.street}`}</p>
          <p>{`Número: ${userInfo.houseNumber}`}</p>
        </PersonalInfo>
        <ProductInfo>
        {cartData? cartData.products.map((obj, idx) => (
          <CheckoutProductDisplay
            id={obj.productId}
            cartId = {cartId}
            data={obj}
            key={idx} />
        )):null}
        </ProductInfo>
        <StyledFinalInfo>
          <h1>Valor Total: {cartData?cartData.totalPrice: ""}</h1>
          {cartData? <button onClick={() => validateAndCreateOrder(cartData._id)}>Fazer pedido</button> : null}
        </StyledFinalInfo>
      </Container>
      <Footer />
    </>
  );
}
