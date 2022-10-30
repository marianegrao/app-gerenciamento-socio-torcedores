import { Container, CardHeader, CardContainerSections, CardSection } from "./styles";
import { PencilSimpleLine } from "phosphor-react";
export default function CardDatailUser() {
  return (
    <Container>
      <CardHeader>
        <h2>Meus dados</h2>
        <button>
          <PencilSimpleLine size={18} /> <span>Editar perfil</span>
        </button>
      </CardHeader>
      <CardContainerSections>
        <CardSection>
          <strong>Nome</strong>
          <span>sarasilva</span>
        </CardSection>

        <CardSection>
          <strong>E-mail</strong>
          <span>sarasilva@gmail.com</span>
        </CardSection>
      </CardContainerSections>
    </Container>
  );
}
