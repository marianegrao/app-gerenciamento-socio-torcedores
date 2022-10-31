import { Container, CardSummary, UserProfile } from "./styles";
import { CaretDown } from "phosphor-react";
import PopUpUserSummary from "../PopUps/PopUpUserSummary";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { detailUser } from "../../services/api";

export default function UserSummary() {
  const { showPopUp, handleShowPopUp } = useGlobalContext();
  const [userData, setUserData] = useState({ name: "", shortName: "" });

  async function handleDetailUser() {
    const response = await detailUser();

    if (!response.error) {
      let shortName = "";
      const { name } = response;
      const spaceIndex = name.indexOf(" ");
      if (spaceIndex > 0) {
        shortName = (name[0] + name[spaceIndex + 1]).toUpperCase();
      } else {
        shortName = (name[0] + name[1]).toUpperCase();
      }
      setUserData({
        name,
        shortName,
      });
    } else {
      if (response.message === "jwt expired") {
        removeLocalStorage("token");
        removeLocalStorage("userId");
        navigate("/");
      }
    }
  }
  useEffect(() => {
    handleDetailUser();
  }, []);
  return (
    <Container>
      <CardSummary>
        <UserProfile>
          <span>{userData.shortName}</span>
        </UserProfile>
        <strong>{userData.name}</strong>
        <button onClick={handleShowPopUp}>
          <CaretDown size={24} />
        </button>
      </CardSummary>
      {showPopUp && <PopUpUserSummary />}
    </Container>
  );
}
