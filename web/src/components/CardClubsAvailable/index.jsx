import { Container, ClubCard, CardHeader, CardSocialMedia, CardPrince } from "./styles";
import { InstagramLogo, Globe, TwitterLogo } from "phosphor-react";
import { listClubs } from "../../services/api";
import { useEffect, useState } from "react";

export default function CardClubsAvailable() {
  const [clubs, setClubs] = useState([]);

  async function handleListClubs() {
    const response = await listClubs();
    if (!response.error) {
      setClubs(response.data);
    }
  }
  useEffect(() => {
    handleListClubs();
  }, []);
  return (
    <Container>
      {clubs &&
        clubs.map((clubs) => (
          <ClubCard key={clubs.id}>
            <CardHeader>
              <img src={clubs.insignia} alt="imagem brasão time" />
              <h1>{clubs.name}</h1>
            </CardHeader>
            <CardSocialMedia>
              {clubs.instagram && (
                <button>
                  <a href={clubs.instagram}>
                    <InstagramLogo color="#0e8750" size={32} />
                  </a>
                </button>
              )}
              {clubs.website && (
                <button>
                  <a href={clubs.website}>
                    <Globe color="#0e8750" size={32} />
                  </a>
                </button>
              )}
              {clubs.twitter && (
                <button>
                  <a href={clubs.twitter}>
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
                {clubs.monthly_subscription.toFixed(2).replace(".", ",")}
              </strong>
            </CardPrince>
            <button>Ser socio-torcedor</button>
          </ClubCard>
        ))}
    </Container>
  );
}
