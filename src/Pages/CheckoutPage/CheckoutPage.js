import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/authContext";
import {
  Container,
  LogoContainer,
  PersonalInfo,
  Price,
  ProductInfo,
  ProductName,
} from "./CheckoutStyle";

export default function CheckoutPage(params) {
  const [userInfo, setUserInfo] = useState([]);
  const { config } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user", config)
      .then((res) => {
        console.log(res.data[0]);
        setUserInfo(res.data[0]);
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
          <LogoContainer>
            <img src="" alt="logo" />
          </LogoContainer>
          <ProductName>
            <h3>NOME</h3>
            <p>descrição do produto com apenas os caracteres inicais</p>
            <Price>
              <h2>3 unidades</h2>
              <h2>R$ 100,97</h2>
            </Price>
          </ProductName>
        </ProductInfo>
      </Container>
      <Footer />
    </>
  );
}
