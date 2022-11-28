import {
  LogoContainer,
  ProductInfo,
  ProductName,
  Stock,
  StyledProductsContainer,
} from "./CheckoutStyle";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext,  } from "../../contexts/authContext";

export default function CheckoutProductDisplay({ data , cartId}) {
  const [productInfo, setProductInfo] = useState({})
  const { config } = useContext(AuthContext);
  
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${data.productId}`, config)
    .then(res => setProductInfo(res.data))
    .catch(err => console.log(err.response.data))
  }, [])

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
          <p>{data.productQt}</p>
          <h2>{`R$${data.price * data.productQt}`}</h2>
      </Stock>
    </StyledProductsContainer>
  );
}
