import styled from "styled-components";

export const StyledUserPage = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-image: url(https://png.pngtree.com/thumb_back/fw800/background/20210206/pngtree-light-wood-grain-background-image_557628.jpg);

`;

export const ContainerUserPage = styled.div`
  margin: 80px 0 60px 0;
  padding: 20px;
  p {
    font-size: 24px;
    margin-bottom: 7px;
    font-weight: bold;
      font-family: "Special Elite", cursive;
  }
`;

export const Infos = styled.div`
  font-size: larger;
  margin-bottom: 20px;
`;
export const Orders = styled.div`
  margin-bottom: 20px;
  border: 1px solid black;
`;
export const Product = styled.div`
  margin-bottom: 10px;
  border: 1px solid green;
  display: flex;
  img {
    height: 64px;
    width: 64px;
    margin-right: 10px;
  }
`;
