import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import logo from "../assets/img/logo.png"
import { IoMdArrowRoundBack } from "react-icons/io"


export default function Header({ isHomePage }) {

    const navigate = useNavigate()

    return (
        <>
            <Container>
                <NavBar>
                    <LogoContainer>
                        <img src={logo} />

                        <p>Ichiraku</p>

                    </LogoContainer>
                    {isHomePage ? null : <IoMdArrowRoundBack onClick={() => navigate(-1)} />}
                </NavBar>
            </Container>
        </>
    )
}

const Container = styled.div`
    height: 80px;
    background-color: #f24726;
    padding: 10px 20px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
`

const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    width: 150px;
    display: flex;
    align-items: center;

    img{
        height: 60px;
        display: inline;
        margin-right: 10px;
    }
    
    p{
        font-weight: bold;
        padding: 0 10px 0 0;
        font-size: 20px;
    }

`