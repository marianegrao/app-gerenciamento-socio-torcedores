import { SidebarAccountDetails } from "../../components/SideBar";
import { Container, Main, Header, CardUserData } from "./styles";
import { User } from "phosphor-react";
export default function AccountDetails() {
  return (
    <Container>
      <SidebarAccountDetails />
      <Main>
        <Header>
          <User size={43} color="#3f3f55" />
          <h1>Nome do usuário</h1>
        </Header>

        <CardUserData>
          <h2>Dados do cliente</h2>

          <div>
            <strong>E-mail</strong>
            <span>sarasilva@gmail.com</span>
          </div>
        </CardUserData>
      </Main>
    </Container>
  );
}
