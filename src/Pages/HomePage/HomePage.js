import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/authContext";
import { CartContext } from "../../contexts/cartContext";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [bestSellers, setBestSellers] =useState([])
  const {cartId, setCartId} = useContext(CartContext);
  const {token, config} = useContext(AuthContext)

  useEffect(()=>{

    if (token){
      axios.get("http://localhost:5000/cart", config)
      .then(res=> {
        console.log(res.data)
        if (cartId!==res.data._id){
          axios.put(`http://localhost:5000/cart/${cartId}`,{}, config)
          .then(resp=> console.log(resp.data))
          .catch(error=> console.log(error.response.data))
          axios.delete(`http://localhost:5000/cart/${cartId}`,config)
          .then(resp=>  console.log(resp.data))
          .catch(error=> console.log(error.response.data))
        }
        setCartId(res.data._id)
        localStorage.setItem("cartId", res.data._id);
      })
      .catch(err=> err.response.data)
    }

    if (!cartId){
      axios.post("http://localhost:5000/cart",{products:[]})
      .then(res=> {
        console.log(res.data)
        setCartId(res.data._id)
        localStorage.setItem("cartId", res.data._id)
      })
      .catch(err=> console.log(err.response.data))
    } else {
      axios.get(`http://localhost:5000/cart/${cartId}`)
      .then(res=> res.data)
      .catch(err=> err.response.data)
    }

    axios.get("http://localhost:5000/products")
    .then(res=>{
        console.log(res.data)
        setProducts(res.data)
    })
    .catch(err=>console.log(err.response.data))
    
    axios.get("http://localhost:5000/products?tag=bestSeller")
    .then(res=>{
        console.log(res.data)
        setBestSellers(res.data)
    })
    .catch(err=>console.log(err.response.data))
  },[])

  function addInCart(id, price){
    console.log(id,price)
    console.log(cartId)

    axios.put(`http://localhost:5000/cart/${cartId}/products`, {products:[{productId: id, productQt:1}]})
    .then(res=> console.log(res.data))
    .catch(err=> err.response.data)
    
  }

  return (
    <StyledHomePage>
      <Header isHomePage={true} />
      <ContainerHome>
      <ListTitle>Mais vendidos</ListTitle>
        <BestSellers>
          {bestSellers.map((obj) => (
            <div>
                <img src={obj.image} alt="foto do produto"></img>
                <p>{obj.name}</p>
                <p>{obj.price}</p>
                <button onClick={()=>addInCart(obj._id, obj.price)}>Botar no carrin</button>
            </div>
          ))}
        </BestSellers>
        <ListTitle>Todos produtos</ListTitle>
        <Products>
        {products.map((obj) => (
            <div>
                <img src={obj.image} alt="foto do produto"></img>
                <p>{obj.name}</p>
                <p>{obj.price}</p>
                <button onClick={()=>addInCart(obj._id, obj.price)}>Botar no carrin</button>
            </div>
          ))}
        </Products>
      </ContainerHome>
      <Footer />
    </StyledHomePage>
  );
}

const StyledHomePage = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContainerHome = styled.div`
  margin: 80px 0 60px 0;
  padding: 20px 0;
`;

const ListTitle = styled.p`
    font-size: x-large;
    font-weight: 400;
    margin-bottom: 10px;
    margin-left: 10px;
`

const BestSellers = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: #a1a; */
  display: flex;
  overflow: auto;
  margin-bottom: 50px;
  div{
    height: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #000;
    margin-right: 10px;
    margin-left: 10px;
  }
  img{
    height: 150px;
    width: 177px;
  }
  p{
    font-size: large;
  }
  button{
    height: 60px;
  }
`;

const Products = styled.div`
  width: 100%;
  height: 300px;
  /* background-color: #1a1; */
  display: flex;
  overflow: auto;
  div{
    height: 100%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #000;
    margin-right: 10px;
    margin-left: 10px;
  }
  img{
    height: 150px;
    width: 177px;
  }
  p{
    font-size: large;
  }
  button{
    height: 60px;
  }
`;
