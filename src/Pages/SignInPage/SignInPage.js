import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import { signIn } from "../../services/auth";
import StyledSignInPage from "./SignInStyle";

export default function SignInPage(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setToken} = useContext(AuthContext)

  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    e.stopPropagation();

    const body = {
        email, password
    }

    signIn(body).then(res=>{
        console.log(res.data)
        setToken(res.data)
        navigate("/")
    }).catch(err=>
        console.log(err.response.data)
    )

    console.log(body);
  }

  return (
    <StyledSignInPage>
      <h1>Ichiraku Shop</h1>
      <form onSubmit={login}>
        <input
          required
          type="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          value={password}
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
      <Link to="/sign-up">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </StyledSignInPage>
  );
}
