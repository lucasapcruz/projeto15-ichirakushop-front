import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";
import CheckoutProductDisplay from "./CheckoutProductDisplay";
import {
  Container,
  PersonalInfo,
  ProductInfo,
} from "./CheckoutStyle";

export default function CheckoutPage(params) {
  const [userInfo, setUserInfo] = useState([]);
  const [cartData, setCartData] = useState()
  const { config } = useContext(AuthContext);
  const {cartId} = useContext(CartContext);


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
        setCartData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        {cartData.products.map((obj, idx) => (
          <CheckoutProductDisplay
            id={obj.productId}
            cartId = {cartId}
            data={obj}
            key={idx} />
        ))}
        </ProductInfo>
      </Container>
      <Footer />
    </>
  );
}
