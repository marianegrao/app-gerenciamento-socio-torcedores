import { Container, ImgPopUp, CardPopUp } from "./styles";
import { UserSquare, SignOut, CaretUp } from "phosphor-react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../hooks/useGlobalContext";

export default function PopUpUserSummary() {
  const { handleShowLogout, handleShowPopUp } = useGlobalContext();
  return (
    <Container>
      <ImgPopUp>
        <CaretUp size={36} weight="fill" color="#ffffff" />
      </ImgPopUp>
      <CardPopUp>
        <Link to="/my-account">
          <button onClick={handleShowPopUp}>
            <UserSquare color="#747488" size={24} />
            <span>Conta</span>
          </button>
        </Link>
        <button onClick={handleShowLogout}>
          <SignOut color="#747488" size={24} />
          <span>Sair</span>
        </button>
      </CardPopUp>
    </Container>
  );
}
