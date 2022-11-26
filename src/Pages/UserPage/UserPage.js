/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/authContext";
import {
  ContainerUserPage,
  Infos,
  Orders,
  Product,
  StyledUserPage,
} from "./UserPageStyle";

export default function UserPage() {
  const [userInfo, setUserInfo] = useState([]);

  const { config } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user", config)
      .then((res) => {
        console.log(res.data[0]);
        setUserInfo(res.data[0]);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  const macarrão =
    "https://img.itdg.com.br/tdg/images/recipes/000/101/040/356212/356212_original.jpg?mode=crop&width=710&height=400";

  const teste = [
    {
      id: "num",
      compra: [
        {
          nome: "produto",
          img: macarrão,
          qnt: "num",
          preçouni: "num",
          preçot: "num",
        },
        {
          nome: "produto2",
          img: macarrão,
          qnt: "num2",
          preçouni: "num2",
          preçot: "num2",
        },
        {
          nome: "produto3",
          img: macarrão,
          qnt: "num3",
          preçouni: "num3",
          preçot: "num3",
        },
        {
          nome: "produto3",
          img: macarrão,
          qnt: "num3",
          preçouni: "num3",
          preçot: "num3",
        },
      ],
    },
    {
      id: "num2",
      compra: [
        {
          nome: "produto",
          img: macarrão,
          qnt: "num",
          preçouni: "num",
          preçot: "num",
        },
        {
          nome: "produto2",
          img: macarrão,
          qnt: "num2",
          preçouni: "num2",
          preçot: "num2",
        },
        {
          nome: "produto3",
          img: macarrão,
          qnt: "num3",
          preçouni: "num3",
          preçot: "num3",
        },
        {
          nome: "produto3",
          img: macarrão,
          qnt: "num3",
          preçouni: "num3",
          preçot: "num3",
        },
      ],
    },
  ];

  return (
    <StyledUserPage>
      <Header></Header>
      <ContainerUserPage>
        <p>Nome:</p>
        <Infos>{userInfo.name}</Infos>
        <p>Endereço:</p>
        <Infos>
          {`${userInfo.street}, ${userInfo.houseNumber}`}
          <br />
          {userInfo.cep}
          <br />
          Brasil
        </Infos>
        <p>Compras:</p>
        {teste.map((obj) => (
          <Orders>
            {obj.compra.map((order,idx) => (
              <Product key={idx}>
                <img src={order.img} alt="Foto do Produto"></img>
                <div>
                  <div>{order.nome}</div>
                  <div>quantidade: {order.qnt}</div>
                  <div>valor unitário:{order.preçouni}</div>
                  <div>valor:{order.preçot}</div>
                </div>
              </Product>
            ))}
          </Orders>
        ))}
      </ContainerUserPage>
      <Footer></Footer>
    </StyledUserPage>
  );
}
