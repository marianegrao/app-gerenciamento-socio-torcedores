import { Cointainer, Button } from "./styles";
export default function FormSignUp() {
  return (
    <Cointainer>
      <div>
        <label>Nome</label>
        <input placeholder="Digite seu nome" type="text" />
      </div>

      <div>
        <label>E-mail</label>
        <input placeholder="Digite seu e-mail" type="email" />
      </div>

      <div>
        <label>Senha</label>
        <input placeholder="Digite sua senha" type="password" />
      </div>

      <Button>Cadastrar</Button>
    </Cointainer>
  );
}
