import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styled from "styled-components";

export default function HomePage() {
  const macarrão =
    "https://img.itdg.com.br/tdg/images/recipes/000/101/040/356212/356212_original.jpg?mode=crop&width=710&height=400";

  const teste = [
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
  ];
  return (
    <StyledHomePage>
      <Header isHomePage={true} />
      <ContainerHome>
      <ListTitle>Mais vendidos</ListTitle>
        <BestSellers>
          {teste.map((obj) => (
            <div>
                <img src={obj.img}></img>
                <p>{obj.nome}</p>
                <p>{obj.preçouni}</p>
                <button>Botar no carrin</button>
            </div>
          ))}
        </BestSellers>
        <ListTitle>Todos produtos</ListTitle>
        <Products>
        {teste.map((obj) => (
            <div>
                <>
                <img src={obj.img}></img>
                <p>{obj.nome}</p>
                <p>{obj.preçouni}</p>
                <button>Botar no carrin</button>
                </>
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
