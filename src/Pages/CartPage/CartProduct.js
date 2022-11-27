import {
  Counter,
  LogoContainer,
  ProductInfo,
  ProductName,
  Stock,
  StyledProductsContainer,
} from "./CartStyle";
import { useState } from "react";

export default function CartProduct({ data }) {
  const [productQuantity, setProductQuantity] = useState(data.qnt);

  function countDown() {
    let newProducQuantity = productQuantity - 1;
    
    if (newProducQuantity > 0) {
      setProductQuantity(newProducQuantity);
    } else {
      setProductQuantity(0);
    }
  }

  function countUp() {
    setProductQuantity(productQuantity + 1);
  }

  return (
    <StyledProductsContainer>
      <ProductInfo>
        <LogoContainer>
          <img src={data.img} alt="logo" />
        </LogoContainer>
        <ProductName>
          <h3>{data.nome}</h3>
          <p>descrição do produto com apenas os caracteres inicais</p>
        </ProductName>
      </ProductInfo>
      <Stock>
        <Counter>
          <button onClick={countDown}> - </button>
          <p>{productQuantity}</p>
          <button onClick={countUp}> + </button>
        </Counter>
        <p>2345 disponiveis</p>
        <h2>{`R$${data.precouni * productQuantity}`}</h2>
      </Stock>
    </StyledProductsContainer>
  );
}
