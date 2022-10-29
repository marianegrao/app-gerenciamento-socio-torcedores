import { Container, ContainerLeft, Image, ContainerRight, CardForm } from "./styles";
import { Link } from "react-router-dom";
import FormLogin from "../../components/Forms/FormLogin";
import WomanCheeringImage from "../../assets/woman_cheering.png";

export default function SignIn() {
  return (
    <Container>
      <ContainerLeft>
        <h3>Gerencie todas assinaturas dos seus times em um só lugar.</h3>
        <Image src={WomanCheeringImage} alt="mulher torcedora" />
      </ContainerLeft>
      <ContainerRight>
        <CardForm>
          <h1>Faça seu login!</h1>

          <FormLogin />
        </CardForm>
        <span>
          Ainda não possui uma conta? <Link to="/signup">Cadastre-se</Link>
        </span>
      </ContainerRight>
    </Container>
  );
}
