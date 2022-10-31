import { Container, ClubCard, CardHeader, CardSocialMedia, CardPrince } from "./styles";
import { InstagramLogo, Globe, TwitterLogo } from "phosphor-react";
import { listSubscriptions } from "../../services/api";
import { useEffect } from "react";

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
  });
  return (
    <Container>
      {subscriptions &&
        subscriptions.map((subsc) => (
          <ClubCard>
            <CardHeader>
              <img src={subsc.insignia} alt="imagem brasão time" />
              <h1>{subsc.name}</h1>
            </CardHeader>
            <CardSocialMedia>
              {subsc.instagram && (
                <button>
                  <InstagramLogo size={32} />
                </button>
              )}
              {subsc.website && (
                <button>
                  <Globe size={32} />
                </button>
              )}
              {subsc.twitter && (
                <button>
                  <TwitterLogo size={32} />
                </button>
              )}
            </CardSocialMedia>
            <CardPrince>
              <p>Assinatura</p>
              <strong>
                {" "}
                R$
                {amout.toFixed(2).replace(".", ",")}
              </strong>
            </CardPrince>
          </ClubCard>
        ))}
    </Container>
  );
}
