import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/layout/AuthLayout";
import Register from "./pages/authentication/Register";
import ConfirmEmail from "./pages/authentication/ConfirmEmail";
import OTPEmail from "./pages/authentication/OTPEmail";
import DeactivatedAccount from "./pages/authentication/DeactivatedAccount";
import Login from "./pages/authentication/Login";
import LoginStepTwo from "./pages/authentication/LoginStepTwo";
import ForgotPassword from "./pages/authentication/ForgotPassword";
import PasswordInstruction from "./pages/authentication/PasswordInstruction";
import ChangePassword from "./pages/authentication/ChangePassword";
import AuthenticateAccount from "./pages/authentication/AuthenticateAccount";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/dashboard";
import CardMgt from "./pages/cardManagement";
import CardDetail from "./pages/cardManagement/CardDetail";
import TransHistory from "./pages/transactionHistory";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="login" element={<LoginStepTwo />} />
        <Route path="register" element={<Register />} />
        <Route path="confirm" element={<ConfirmEmail />} />
        <Route path="otp" element={<OTPEmail />} />
        <Route path="deactivated" element={<DeactivatedAccount />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="password-instruction" element={<PasswordInstruction />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="authenticate" element={<AuthenticateAccount />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/card-management" element={<CardMgt />} />
        <Route path="/card-detail/:id" element={<CardDetail />} />
        <Route path="/history" element={<TransHistory />} />
      </Route>
    </Routes>
  );
}

export default App;