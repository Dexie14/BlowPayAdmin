import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse } from "../types";

export const SignIn = (userId?: string | null) => {
  const loginUser = useApiMutation<AuthResponse, FormData>({
    url: "/admin/auth/login ",
    method: "POST",
  });
  const acceptInvite = useApiMutation<AuthResponse, FormData>({
    url: `/admin/auth/invite/accept?user=${userId}`,
    method: "POST",
  });

  return {
    loginUser,
    acceptInvite,
  };
};
