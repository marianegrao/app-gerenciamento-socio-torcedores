import { Cointainer, Button } from "./styles";
export default function FormLogin() {
  return (
    <Cointainer>
      <div>
        <label>E-mail</label>
        <input placeholder="Digite seu e-mail" type="text" />
      </div>

      <div>
        <label>Senha</label>
        <input placeholder="Digite sua senha" type="text" />
      </div>

      <Button>Entrar</Button>
    </Cointainer>
  );
}
