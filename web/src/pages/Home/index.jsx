import LogoutConfirm from "../../components/Modals/LogoutConfirm";
import { SidebarHome } from "../../components/SideBar";
import UserSummary from "../../components/UserSummary";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { Container, Main, Section } from "./styles";

export default function Home() {
  const { showLogout } = useGlobalContext();

  return (
    <Container>
      <SidebarHome />
      <Main>
        <UserSummary />
        <Section>
          <h1>Meus Clubes</h1>
          <div></div>
        </Section>
      </Main>
      {showLogout && <LogoutConfirm />}
    </Container>
  );
}
