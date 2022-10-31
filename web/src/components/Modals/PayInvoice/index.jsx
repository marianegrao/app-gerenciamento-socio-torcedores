import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { payInvoice } from "../../../services/api";
import { parseISO, format } from "date-fns";
import SuccessMessage from "../SuccessMessage";
import {
  Container,
  Modal,
  ContainerInfos,
  ContainerButtons,
  ButtonConfirm,
  ButtonCancel,
} from "./styles";

export default function PayInvoice() {
  const { currentInvoice, handleShowModalPayInvoice, setRefreshPage } = useGlobalContext();
  const navigate = useNavigate();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dueDateFormated = format(parseISO(currentInvoice.due_date), "dd/LL/yy");

  function handleShowSuccessMessage() {
    setShowSuccessMessage(!showSuccessMessage);
  }

  async function handlePayInvoice() {
    const response = await payInvoice(currentInvoice.id);

    if (!response.error) {
      handleShowSuccessMessage();
      setRefreshPage(true);
      setInterval(() => setRefreshPage(false));
      setInterval(() => handleShowModalPayInvoice(), 3000);
    }
  }

  return (
    <>
      {showSuccessMessage ? (
        <SuccessMessage message="Fatura paga com sucesso" />
      ) : (
        <Container>
          <Modal>
            <h2>Deseja pagar essa fatura?</h2>
            <ContainerInfos>
              <div>
                <span>Clube: </span>
                <strong>{currentInvoice.club_name}</strong>
              </div>
              <div>
                <span>Id: </span>
                <strong>{currentInvoice.id}</strong>
              </div>
              <div>
                <span>Data de vencimento: </span>
                <strong>{dueDateFormated}</strong>
              </div>
            </ContainerInfos>
            <ContainerButtons>
              <ButtonConfirm onClick={handlePayInvoice}>Sim</ButtonConfirm>
              <ButtonCancel onClick={handleShowModalPayInvoice}>Cancelar</ButtonCancel>
            </ContainerButtons>
          </Modal>
        </Container>
      )}
    </>
  );
}
