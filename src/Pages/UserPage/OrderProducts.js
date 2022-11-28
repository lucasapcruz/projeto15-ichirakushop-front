import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./UserPageStyle";

export default function OrderProducts({product}) {
  const [productInfo, setProductInfo] = useState({})
  useEffect(()=>{
    axios.get(`https://ichiraku-shop.onrender.com/products/${product.productId}`)
    .then(res=> {
      setProductInfo(res.data)
    })
    .catch(err=>console.log(err.response.data))
  },[])
    return(
        <Product key={product._id}>
              <img src={productInfo.image} alt="Foto do Produto"></img>
              <div>
                <div>{productInfo.name}</div>
                <div>quantidade: {product.productQt}</div>
                <div>valor unitário:{productInfo.price}</div>
              </div>
        </Product>
    )
};
