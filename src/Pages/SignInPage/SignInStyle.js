import styled from "styled-components";

const StyledSignInPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #ffa;

  h1 {
    font-size: 32px;
    margin-top: 60px;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 80%;


    input {
      width: 100%;
      height: 40px;
      background: #ffffff;
      border-radius: 5px;
      margin: 5px;
    }

    button {
      width: 100%;
      height: 40px;

      margin: 10px;

      background: #a32;
      border-radius: 5px;

      color: #ffffff;
    }
  }

  p {
    margin-top: 36px;
  }
`;

export default StyledSignInPage;
