import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/img/logo.png";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Header({ isHomePage }) {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <NavBar>
          <LogoContainer>
            <img src={logo} alt="logo" />
            <p>Ichiraku Shop</p>
          </LogoContainer>
          {isHomePage ? null : (
            <IoMdArrowRoundBack onClick={() => navigate(-1)} />
          )}
        </NavBar>
      </Container>
    </>
  );
}

const Container = styled.div`
  z-index: 1;
  height: 80px;
  background-color: #CB3724;
  padding: 10px 20px;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  img {
    height: 60px;
    display: inline;
    margin-right: 10px;
  }

  p {
    font-weight: bold;
    padding: 0 10px 0 0;
    font-size: 30px;
    font-family: "Special Elite", cursive;
  }
`;
