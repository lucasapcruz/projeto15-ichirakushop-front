import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IoPerson, IoCart } from "react-icons/io5"
import { HiHome } from "react-icons/hi"
import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"



export default function Footer() {
  const navigate = useNavigate();
    const {token} = useContext(AuthContext)

  const iconSize = "25px";

    return (
        <>
            <Container>
                <NavBar>
                    <IoPerson size={iconSize} onClick={() => token ? navigate("/user") : navigate("/sign-in")}/>
                    <HiHome size={iconSize} onClick={() => navigate("/")}/>
                    <IoCart size={iconSize} onClick={() => navigate("/cart")}/>
                </NavBar>
            </Container>
        </>
    )
}

const Container = styled.div`
  z-index: 1;
  height: 60px;
  background-color: #12cdd4;
  padding: 10px 20px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 17.5px;
`;
