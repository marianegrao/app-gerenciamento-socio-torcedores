import { useState } from "react";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { registerSubscription } from "../../../services/api";

import SuccessMessage from "../SuccessMessage";
import {
  Container,
  Modal,
  ContainerInfos,
  ContainerButtons,
  ButtonConfirm,
  ButtonCancel,
  ErrorMessage,
} from "./styles";

export default function MakeSubscription() {
  const { currentClub, handleShowSubscription, setRefreshPage } = useGlobalContext();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [warning, setWarning] = useState({ message: "", error: false });

  function handleShowSuccessMessage() {
    setShowSuccessMessage(!showSuccessMessage);
  }

  async function handleMakeSubscription() {
    const start_date = new Date();
    const response = await registerSubscription(currentClub.id, { start_date });

    if (!response.error) {
      handleShowSuccessMessage();
      setRefreshPage(true);
      setInterval(() => setRefreshPage(false));
      setInterval(() => handleShowSubscription(), 2000);
    } else {
      setWarning({
        message: response.message,
        error: true,
      });
      setTimeout(() => setWarning({ message: "", error: false }), 2000);
    }
  }

  return (
    <>
      {showSuccessMessage ? (
        <SuccessMessage message="Assinatura realizada com sucesso" />
      ) : (
        <Container>
          <Modal>
            <h2>Deseja associar-se a esse clube?</h2>
            <ContainerInfos>
              <div>
                <span>Clube: </span>
                <strong>{currentClub.name}</strong>
              </div>
              <div>
                <span>Mensalidade: </span>
                <strong>R${currentClub.monthly_subscription},00</strong>
              </div>
            </ContainerInfos>
            <ErrorMessage>{warning.error && <p>{warning.message}</p>}</ErrorMessage>
            <ContainerButtons>
              <ButtonConfirm onClick={handleMakeSubscription}>Sim</ButtonConfirm>
              <ButtonCancel onClick={handleShowSubscription}>Cancelar</ButtonCancel>
            </ContainerButtons>
          </Modal>
        </Container>
      )}
    </>
  );
}
