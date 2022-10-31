import { Container, ClubCard, CardHeader, CardSocialMedia, CardPrince } from "./styles";
import { InstagramLogo, Globe, TwitterLogo } from "phosphor-react";
import { listSubscriptions } from "../../services/api";
import { useEffect, useState } from "react";

export default function CardClub() {
  const [subscriptions, setSubscriptions] = useState([]);
  async function handleListSubscriptions() {
    const response = await listSubscriptions();

    if (!response.error) {
      setSubscriptions(response.data);
    }
  }
  useEffect(() => {
    handleListSubscriptions();
  }, []);
  return (
    <Container>
      {subscriptions &&
        subscriptions.map((subsc) => (
          <ClubCard key={subsc.id_subscription}>
            <CardHeader>
              <img src={subsc.insignia} alt="imagem brasão time" />
              <h1>{subsc.name}</h1>
            </CardHeader>
            <CardSocialMedia>
              {subsc.instagram && (
                <button>
                  <a href={subsc.instagram}>
                    <InstagramLogo color="#0e8750" size={32} />
                  </a>
                </button>
              )}
              {subsc.website && (
                <button>
                  <a href={subsc.website}>
                    <Globe color="#0e8750" size={32} />
                  </a>
                </button>
              )}
              {subsc.twitter && (
                <button>
                  <a href={subsc.twitter}>
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
                {subsc.monthly_subscription.toFixed(2).replace(".", ",")}
              </strong>
            </CardPrince>
            <button>Cancelar assinatura</button>
          </ClubCard>
        ))}
    </Container>
  );
}
