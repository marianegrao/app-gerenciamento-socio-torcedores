import { Container, ClubCard, CardHeader, CardSocialMedia, CardPrince, Button } from "./styles";
import { InstagramLogo, Globe, TwitterLogo } from "phosphor-react";
import { listClubs } from "../../services/api";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export default function CardClubsAvailable() {
  const { handleShowSubscription, setCurrentClub } = useGlobalContext();
  const [clubs, setClubs] = useState([]);

  async function handleListClubs() {
    const response = await listClubs();
    if (!response.error) {
      setClubs(response.data);
    }
  }
  function handleShowModalSubscription(invoice) {
    handleShowSubscription();

    setCurrentClub(invoice);
  }

  useEffect(() => {
    handleListClubs();
  }, []);
  return (
    <Container>
      {clubs &&
        clubs.map((club) => (
          <ClubCard key={club.id}>
            <CardHeader>
              <img src={club.insignia} alt="imagem brasão time" />
              <h1>{club.name}</h1>
            </CardHeader>
            <CardSocialMedia>
              {club.instagram && (
                <button>
                  <a href={club.instagram}>
                    <InstagramLogo color="#0e8750" size={32} />
                  </a>
                </button>
              )}
              {club.website && (
                <button>
                  <a href={club.website}>
                    <Globe color="#0e8750" size={32} />
                  </a>
                </button>
              )}
              {club.twitter && (
                <button>
                  <a href={club.twitter}>
                    <TwitterLogo color="#0e8750" size={32} />
                  </a>
                </button>
              )}
            </CardSocialMedia>
            <CardPrince>
              <p>Assinatura</p>
              <strong>
                {" "}
                R$
                {club.monthly_subscription.toFixed(2).replace(".", ",")}
              </strong>
            </CardPrince>
            <Button onClick={() => handleShowModalSubscription(club)}>Associar-se</Button>
          </ClubCard>
        ))}
    </Container>
  );
}
