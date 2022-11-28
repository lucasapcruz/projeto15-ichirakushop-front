/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/authContext";
import OrderProducts from "./OrderProducts";
import {
  ContainerUserPage,
  Infos,
  Orders,
  StyledUserPage,
} from "./UserPageStyle";

export default function UserPage() {
  const [userInfo, setUserInfo] = useState([]);
  const [userOrders, setUserOrders] = useState([])

  const { config } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://ichiraku-shop.onrender.com/user", config)
      .then((res) => {
        setUserInfo(res.data[0]);
      })
      .catch((err) => console.log(err.response.data));
      axios.get("https://ichiraku-shop.onrender.com/orders", config)
      .then(res=> {
        setUserOrders(res.data)
      })
      .catch(err=> console.log(err.response.data))
  }, []);

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
        {userOrders.map(order=>(
          <Orders>
            {order.products.map(product=> (
              <OrderProducts product={product}></OrderProducts>
            ))}
            Total: {order.totalAmout}
          </Orders>
        ))}
      </ContainerUserPage>
      <Footer></Footer>
    </StyledUserPage>
  );
}
