import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function useGlobalProvider() {
  const [clubSelected, setClubSelected] = useState({});
  return {
    clubSelected,
    setClubSelected,
  };
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
