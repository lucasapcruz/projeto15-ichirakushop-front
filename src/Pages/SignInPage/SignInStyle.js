import styled from "styled-components";

const StyledSignInPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;
  position: relative;

  background-image: url(https://png.pngtree.com/thumb_back/fw800/background/20210206/pngtree-light-wood-grain-background-image_557628.jpg);

  h1 {
    font-family: "Special Elite", cursive;
    font-weight: bold;
    font-size: 40px;
    margin-top: 60px;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 10px;

    input {
      width: 100%;
      height: 40px;
      background: #ffffff;
      border-radius: 5px;
      margin: 4px;

      ::placeholder {
        font-size: 14px;
        font-weight: bold;
        font-family: "Playfair Display", serif;
      }
    }

    button {
      width: 100%;
      height: 50px;
      font-size: 20px;

      background: #aa3322;
      border-radius: 5px;
      color: #ffffff;

      font-size: 22px;
      font-weight: bold;
      font-family: 'Playfair Display', serif;
    }
  }

  p {
    margin-top: 36px;
  }

  img {
    width: 300px;
    position: absolute;
    bottom: 100px;
  }
`;

export default StyledSignInPage;
