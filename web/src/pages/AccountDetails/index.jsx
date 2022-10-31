import { SidebarAccountDetails } from "../../components/SideBar";
import { Container, Main, Header, CardTableInvoices } from "./styles";
import { User } from "phosphor-react";
import CardDatailUser from "../../components/CardDatailUser";
import TableInvoices from "../../components/TableInvoices";
import UserSummary from "../../components/UserSummary";
export default function AccountDetails() {
  return (
    <Container>
      <SidebarAccountDetails />
      <Main>
        <UserSummary />
        <Header>
          <User size={43} color="#3f3f55" />
          <h1>Nome do usuário</h1>
        </Header>

        <CardDatailUser />

        <CardTableInvoices>
          <h2>Minhas faturas</h2>
          <TableInvoices />
        </CardTableInvoices>
      </Main>
    </Container>
  );
}
