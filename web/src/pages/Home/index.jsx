import CardClub from "../../components/CardClub";
import CardClubsAvailable from "../../components/CardClubsAvailable";
import LogoutConfirm from "../../components/Modals/LogoutConfirm";
import MakeSubscription from "../../components/Modals/MakeSubscription";
import { SidebarHome } from "../../components/SideBar";
import UserSummary from "../../components/UserSummary";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { Container, Main, Section, SectionTitle, SectionLineDiv } from "./styles";

export default function Home() {
  const { showLogout, showSubscription } = useGlobalContext();

  return (
    <Container>
      <SidebarHome />
      <Main>
        <UserSummary />
        <Section>
          <SectionTitle>
            <h1>Meus Clubes</h1>
          </SectionTitle>
          <SectionLineDiv />
          <CardClub />
        </Section>

        <Section>
          <SectionTitle>
            <h1>Clubes disponíveis</h1>
          </SectionTitle>
          <SectionLineDiv />
          <CardClubsAvailable />
        </Section>
      </Main>
      {showLogout && <LogoutConfirm />}
      {showSubscription && <MakeSubscription />}
    </Container>
  );
}
