import { Cointainer, IconSelected } from "./styles";
import { Link } from "react-router-dom";
import { User, House } from "phosphor-react";

export function SidebarHome() {
  return (
    <Cointainer>
      <Link to="/home">
        <div style={{ color: "#0e8750" }}>
          <House color="#0e8750" size={45} alt="tela principal" />
          <span>Home</span>
        </div>
        <IconSelected></IconSelected>
      </Link>

      <Link to="/my-account">
        <div>
          <User color="#9b9bb2" size={45} alt="detalhes da conta" />
          <span>Minha conta</span>
        </div>
      </Link>
    </Cointainer>
  );
}

export function SidebarAccountDetails() {
  return (
    <Cointainer>
      <Link to="/home">
        <div>
          <House color="#9b9bb2" size={45} alt="tela principal" />
          <span>Home</span>
        </div>
      </Link>

      <Link to="/my-account">
        <div style={{ color: "#0e8750" }}>
          <User color="#0e8750" size={45} alt="detalhes da conta" />
          <span>Minha conta</span>
        </div>
        <IconSelected></IconSelected>
      </Link>
    </Cointainer>
  );
}
