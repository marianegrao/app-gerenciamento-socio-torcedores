import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../../hooks/useGlobalContext";
import { removeLocalStorage } from "../../../utils/storage";
import { Container, Modal, ContainerButtons, ButtonConfirm, ButtonCancel } from "./styles";

export default function LogoutConfirm() {
  const { handleShowLogout, handleShowPopUp } = useGlobalContext();
  const navigate = useNavigate();

  function handleLogout() {
    removeLocalStorage("token");
    removeLocalStorage("userId");
    handleShowLogout();
    handleShowPopUp();
    navigate("/");
  }

  return (
    <Container>
      <Modal>
        <h2>Deseja sair da conta?</h2>
        <ContainerButtons>
          <ButtonConfirm onClick={handleLogout}>Sim</ButtonConfirm>
          <ButtonCancel
            onClick={() => {
              handleShowLogout(), handleShowPopUp();
            }}
          >
            Cancelar
          </ButtonCancel>
        </ContainerButtons>
      </Modal>
    </Container>
  );
}
