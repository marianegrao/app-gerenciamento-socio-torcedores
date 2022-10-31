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

  const [userData, setUserData] = useState({});

  const [invoices, setInvoices] = useState([]);

  const [showModalPayInvoice, setShowModalPayInvoice] = useState(false);
  function handleShowModalPayInvoice() {
    setShowModalPayInvoice(!showModalPayInvoice);
  }
  const [currentInvoice, setCurrentInvoice] = useState("");

  const [refreshPage, setRefreshPage] = useState(false);

  const [currentClub, setCurrentClub] = useState({});
  const [showSubscription, setShowSubscription] = useState(false);
  function handleShowSubscription() {
    setShowSubscription(!showSubscription);
  }

  return {
    showLogout,
    handleShowLogout,
    showPopUp,
    handleShowPopUp,
    userData,
    setUserData,
    invoices,
    setInvoices,
    showModalPayInvoice,
    handleShowModalPayInvoice,
    currentInvoice,
    setCurrentInvoice,
    refreshPage,
    setRefreshPage,
    showSubscription,
    currentClub,
    setCurrentClub,
    handleShowSubscription,
  };
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
