import { Container, Button, ErrorMessage } from "./styles";
import { signUp } from "../../../services/api";
import { useState } from "react";
import SuccessMessage from "../../Modals/SuccessMessage";
import { useNavigate } from "react-router-dom";

export default function FormSignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [warning, setWarning] = useState({ message: "", error: false });
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  function onChange(evt) {
    const { value } = evt.target;
    const key = evt.target.name;

    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  }

  function clearForm() {
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setWarning({
        message: "Todos os campos devem ser preenchidos",
        error: true,
      });
      clearForm();
      setTimeout(() => setWarning({ message: "", error: false }), 3000);
      return;
    }

    if (form.password !== form.confirmPassword) {
      setWarning({
        message: "Senhas não coincidem",
        error: true,
      });
      clearForm();
      setTimeout(() => setWarning({ message: "", error: false }), 3000);
      return;
    }
    const { confirmPassword, ...formData } = form;

    const response = await signUp(formData);

    if (!response.error) {
      clearForm();
      setShowSuccess(true);
      setTimeout(() => {
        (() => {
          setShowSuccess(false);
          navigate("/");
        })();
      }, 3000);
    } else {
      setWarning({
        message: response.message,
        error: true,
      });
      clearForm();
      setTimeout(() => setWarning({ message: "", error: false }), 3000);
    }
  }

  return (
    <Container onSubmit={handleSubmit}>
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

      <div>
        <label>Confirmar senha</label>
        <input
          placeholder="Confirme sua senha"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={onChange}
        />
      </div>

      <ErrorMessage>{warning.error && <p>{warning.message}</p>}</ErrorMessage>
      <Button>Cadastrar</Button>
      {showSuccess && <SuccessMessage message="Cadastro realizado com sucesso" />}
    </Container>
  );
}
