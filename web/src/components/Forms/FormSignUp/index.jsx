import { Cointainer, Button, ErrorMessage } from "./styles";
import { signIn } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function FormSignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [warning, setWarning] = useState({ message: "", error: false });

  function onChange(evt) {
    const { value } = evt.target;
    const key = evt.target.name;

    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setWarning({
        message: "Todos os campos devem ser preenchidos",
        error: true,
      });
      setTimeout(() => setWarning({ message: "", error: false }), 5000);
      return;
    }

    const response = await signIn(form);

    if (!response.error) {
      setLocalStorage("token", response.token);
      setLocalStorage("userId", response.userId);
      navigate("/home");
    } else {
      setWarning({
        message: response.message,
        error: true,
      });
      setForm({ email: "", password: "" });
      setTimeout(() => setWarning({ message: "", error: false }), 5000);
    }
  }

  return (
    <Cointainer onSubmit={handleSubmit}>
      <div>
        <label>Nome</label>
        <input
          placeholder="Digite seu nome"
          type="text"
          name="name"
          value={form.name}
          onChange={onChange}
        />
      </div>

      <div>
        <label>E-mail</label>
        <input
          placeholder="Digite seu e-mail"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
        />
      </div>

      <div>
        <label>Senha</label>
        <input
          placeholder="Digite sua senha"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
        />
      </div>
      <ErrorMessage>{warning.error && <p>{warning.message}</p>}</ErrorMessage>
      <Button>Cadastrar</Button>
      <div>Cadastro concluído com sucesso</div>
    </Cointainer>
  );
}
