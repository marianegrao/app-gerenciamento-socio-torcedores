import { useState, useEffect } from "react";
import { Container, ErrorMessage, Button } from "./styles";
import { signIn } from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../../utils/storage";

export default function FormSignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
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
    if (!form.email || !form.password) {
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

  useEffect(() => {
    const token = getLocalStorage("token");
    if (token) {
      navigate("/home");
    }
  });

  return (
    <Container onSubmit={handleSubmit}>
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
      <Button type="submit">Entrar</Button>
    </Container>
  );
}
