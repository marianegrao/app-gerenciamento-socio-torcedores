import React from "react";
import ReactDOM from "react-dom/client";
import GlobalProvider from "./context/GlobalContext";
import MyRoutes from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyle />
      <MyRoutes />
    </GlobalProvider>
  </React.StrictMode>
);
