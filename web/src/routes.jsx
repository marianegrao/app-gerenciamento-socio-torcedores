import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
import AccountDetails from "./pages/AccountDetails";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = true;
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
      </Routes>
    </BrowserRouter>
  );
}
