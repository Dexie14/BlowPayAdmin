import { useApiMutation } from "@/hooks/useApiMutation";
import { AuthResponse } from "../types";

export const SignIn = () => {
  const loginUser = useApiMutation<AuthResponse, FormData>({
    url: "/auth/login ",
    method: "POST",
  });

  return {
    loginUser,
  };
};
