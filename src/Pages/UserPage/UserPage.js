import styled from "styled-components";

export default function UserPage() {
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
      <header></header>
      <ContainerUserPage>
        <p>Nome:</p>
        <Infos>Joãozinho</Infos>
        <p>Endereço:</p>
        <Infos>
          Rua da minha casa 123
          <br />
          Informação adicional
          <br />
          Cidade, UF 99999999
          <br />
          Brasil
        </Infos>
        <p>Compras:</p>
        {teste.map((obj) => (
          <Orders>
            {obj.compra.map((order) => (
              <Product>
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
      <footer></footer>
    </StyledUserPage>
  );
}

const StyledUserPage = styled.div`
  width: 100%;
  height: 100vh;

  header {
    width: 100%;
    height: 100px;
    background-color: bisque;
    position: fixed;
    top: 0;
    right: 0;
  }
  footer {
    width: 100%;
    height: 100px;
    background-color: bisque;
    position: fixed;
    bottom: 0;
    right: 0;
  }
`;

const ContainerUserPage = styled.div`
  margin: 100px 0;
  padding: 20px;
  p {
    font-size: x-large;
    margin-bottom: 7px;
  }
`;

const Infos = styled.div`
  font-size: larger;
  margin-bottom: 20px;
`;
const Orders = styled.div`
  margin-bottom: 20px;
  border: 1px solid black;
`;
const Product = styled.div`
  margin-bottom: 10px;
  border: 1px solid green;
  display: flex;
  img {
    height: 64px;
    width: 64px;
    margin-right: 10px;
  }
`;
