import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import AccountDetails from "./pages/AccountDetails";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { getLocalStorage } from "./utils/storage";

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getLocalStorage("token");
  return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route element={<ProtectedRoutes redirectTo={"/"} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/my-account" element={<AccountDetails />} />
        </Route>
        <Route path="*" element={<h1>404 - Not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
