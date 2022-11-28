import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../services/auth";
import StyledSignUpPage from "./SignUpStyle";

export default function SignUpPage(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetedPassword, setRepetedPassword] = useState("");
  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");

  const navigate = useNavigate();

  function createAccount(e) {
    e.preventDefault();
    e.stopPropagation();

    const body = {
      name,
      email,
      password,
      repetedPassword,
      cep,
      street,
      houseNumber
    };

    signUp(body)
      .then((res) => {
        console.log(res.data);
        navigate("/sign-in");
      })
      .catch((err) => alert("Preencha os dados de acordo!"));

    console.log(body);
  }

  return (
    <StyledSignUpPage>
      <h1>Ichiraku Shop</h1>
      <form onSubmit={createAccount}>
        <h2>Informações pessoais</h2>
        <input
          required
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          required
          type="password"
          value={repetedPassword}
          placeholder="Confirmar senha"
          onChange={(e) => setRepetedPassword(e.target.value)}
        />
        <h2>Informações de endereço</h2>
        <input
          required
          type="number"
          value={cep}
          placeholder="CEP"
          onChange={(e) => setCep(e.target.value)}
        />
        <input
          required
          type="text"
          value={street}
          placeholder="nome da rua"
          onChange={(e) => setStreet(e.target.value)}
        />
        <input
          required
          type="number"
          value={houseNumber}
          placeholder="número da casa"
          onChange={(e) => setHouseNumber(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <Link to={"/sign-in"}>
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </StyledSignUpPage>
  );
}
