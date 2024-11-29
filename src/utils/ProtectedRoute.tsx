import { useNavigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";
import { useEffect } from "react";

export const ProtectedRoute = () => {
  const { currentUser } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth/login");
    }
  }, [currentUser, navigate]);
  if (!currentUser) {
    return null;
  }

  return <Outlet />;
};
