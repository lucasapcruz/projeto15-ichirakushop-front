import styled from "styled-components";

const StyledSignInPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #ffa;
  position: relative;

  h1 {
    font-size: 40px;
    font-weight: bold;
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
      height: 60px;
      background: #ffffff;
      border-radius: 5px;
      margin: 10px 0px;
    }

    button {
      width: 100%;
      height: 60px;
      font-size: 20px;

      background: #a32;
      border-radius: 5px;
      color: #ffffff;
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
