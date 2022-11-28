import {
  Counter,
  LogoContainer,
  ProductInfo,
  ProductName,
  Stock,
  StyledProductsContainer,
} from "./CartStyle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext,  } from "../../contexts/authContext";

export default function CartProduct({ data , cartId, setCartData}) {
  const [productQuantity, setProductQuantity] = useState(data.productQt);
  const [productInfo, setProductInfo] = useState({})
  const { config } = useContext(AuthContext);
  
  useEffect(() => {
    axios.get(`https://ichiraku-shop.onrender.com/products/${data.productId}`, config)
    .then(res => setProductInfo(res.data))
    .catch(err => console.log(err.response.data))
  }, [])


  function updateProductQt(operation){
    let newQuantity
    if(operation === "add"){
     newQuantity = productQuantity + 1
      setProductQuantity(newQuantity)
    }else{
      newQuantity = productQuantity - 1
      setProductQuantity(newQuantity)
    }

    const updatePayload = {
      products: [
        {
          productId: data.productId,
          productQt: newQuantity
        }
      ]
    }
    axios.put(`https://ichiraku-shop.onrender.com/cart/${cartId}/products`, updatePayload, config)
    .then(res => {
      console.log(res.data)
      setCartData(res.data)})
    .catch(err => console.log(err.response.data))
  }

  return (
    <StyledProductsContainer>
      <ProductInfo>
        <LogoContainer>
          <img src={productInfo.image} alt={productInfo.description} />
        </LogoContainer>
        <ProductName>
          <h3>{productInfo.name}</h3>
          <p>{productInfo.description}</p>
        </ProductName>
      </ProductInfo>
      <Stock>
        <Counter>
          <button onClick={() => updateProductQt("subtract")}> - </button>
          <p>{productQuantity}</p>
          <button onClick={() => updateProductQt("add")}> + </button>
        </Counter>
        <h2>{`R$${data.price * productQuantity}`}</h2>
      </Stock>
    </StyledProductsContainer>
  );
}
