import { Container, CardSummary, UserProfile } from "./styles";
import { CaretDown } from "phosphor-react";
import PopUpUserSummary from "../PopUps/PopUpUserSummary";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import { useEffect, useState } from "react";
import { detailUser } from "../../services/api";

export default function UserSummary() {
  const { showPopUp, handleShowPopUp, setUserData } = useGlobalContext();
  const [userInfos, setUserInfos] = useState({ name: "", shortName: "" });

  async function handleDetailUser() {
    const response = await detailUser();

    if (!response.error) {
      let shortName = "";
      const { name } = response.data;
      const spaceIndex = name.indexOf(" ");
      if (spaceIndex > 0) {
        shortName = (name[0] + name[spaceIndex + 1]).toUpperCase();
      } else {
        shortName = (name[0] + name[1]).toUpperCase();
      }
      setUserInfos({
        name,
        shortName,
      });
      setUserData(response.data);
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
          <span>{userInfos.shortName}</span>
        </UserProfile>
        <strong>{userInfos.name}</strong>
        <button onClick={handleShowPopUp}>
          <CaretDown size={24} />
        </button>
      </CardSummary>
      {showPopUp && <PopUpUserSummary />}
    </Container>
  );
}
