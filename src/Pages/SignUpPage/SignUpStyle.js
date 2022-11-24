import styled from "styled-components";

const StyledSignUpPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #ffa;

  h1 {
    font-size: 32px;
    margin-top: 60px;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;

    h2{
      margin-top: 18px;
      margin-bottom: 18px;
    }

    input {
      width: 100%;
      height: 40px;
      background: #ffffff;
      border-radius: 5px;
      margin: 4px;
    }

    button {
      width: 100%;
      height: 40px;

      margin-top: 20px;

      background: #a32;
      border-radius: 5px;

      color: #ffffff;

      font-size: 22px;
    }
  }

  p {
    margin-top: 36px;
  }
`;

export default StyledSignUpPage;
