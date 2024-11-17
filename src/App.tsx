import { Route, Routes } from "react-router-dom";
import "react-phone-number-input/style.css";
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
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import TransactionDetail from "./pages/transactionHistory/TransactionDetail";
import WalletPage from "./pages/virtualWallet";
import VirtualDetail from "./pages/virtualWallet/VirtualDetail";
import Messages from "./pages/messages";
import Customer from "./pages/customers";
import CustomerDetail from "./pages/customers/CustomerDetail";
import Kyc from "./pages/kyc";
import KycDetail from "./pages/kyc/KycDetail";
import Settings from "./pages/settings";
import Audit from "./pages/audit";

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
        <Route path="/history/:id" element={<TransactionDetail />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/wallet/:id" element={<VirtualDetail />} />
        <Route path="/message" element={<Messages />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/customers/:id" element={<CustomerDetail />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/kyc/:id" element={<KycDetail />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/audit" element={<Audit />} />
      </Route>
    </Routes>
  );
}

export default App;
