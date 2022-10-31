import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export function useGlobalProvider() {
  const [showLogout, setShowLogout] = useState(false);
  function handleShowLogout() {
    setShowLogout(!showLogout);
  }

  const [showPopUp, setShowPopUp] = useState(false);
  function handleShowPopUp() {
    setShowPopUp(!showPopUp);
  }

  return {
    showLogout,
    handleShowLogout,
    showPopUp,
    handleShowPopUp,
  };
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
