import { Container, CardHeader, CardContainerSections, CardSection } from "./styles";

import { useGlobalContext } from "../../hooks/useGlobalContext";
export default function CardDatailUser() {
  const { userData } = useGlobalContext();
  return (
    <Container>
      <CardHeader>
        <h2>Meus dados</h2>
      </CardHeader>
      <CardContainerSections>
        <CardSection>
          <strong>Nome</strong>
          <span>{userData.name}</span>
        </CardSection>

        <CardSection>
          <strong>E-mail</strong>
          <span>{userData.email}</span>
        </CardSection>
      </CardContainerSections>
    </Container>
  );
}
