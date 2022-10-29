import { Cointainer, ContainerLeft, Image, ContainerRight, CardForm } from "./styles";
import { Link } from "react-router-dom";
import FormSignUp from "../../components/Forms/FormSignUp";
import ManFanImage from "../../assets/man_fan.png";

export default function SignUp() {
  return (
    <Cointainer>
      <ContainerLeft>
        <CardForm>
          <h1>Faça seu cadastro!</h1>

          <FormSignUp />
        </CardForm>
        <span>
          Já possui uma conta? <Link to="/">Faça login</Link>
        </span>
      </ContainerLeft>
      <ContainerRight>
        <h3>Gerencie todas assinaturas dos seus times em um só lugar.</h3>
        <Image src={ManFanImage} alt="homem torcedor" />
      </ContainerRight>
    </Cointainer>
  );
}
