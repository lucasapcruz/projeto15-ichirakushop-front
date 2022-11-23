import { useState } from "react";

export default function SignUpPage(params) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetedPassword, setRepetedPassword] = useState("");

    function createAccount(e){
        e.preventDefault()
        e.stopPropagation()

        const body = {
            name,
            email,
            password,
            repetedPassword
        }

        console.log(body)
    }

  return (
    <>
      <h1>Ichiraku Shop</h1>
      <form onSubmit={createAccount}>
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
          placeholder="COnfirmar senha"
          onChange={(e) => setRepetedPassword(e.target.value)}
        />
        <button type="submit">
            Cadastrar
        </button>
      </form>
    </>
  );
}
