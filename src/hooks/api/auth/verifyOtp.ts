import { useApiMutation } from "@/hooks/useApiMutation";

interface OtpType {
  message: string;
}

interface OtpPayload {
  emailAddress: string;
  otp: string;
}

export const VerifyOtp = () => {
  const verifyOtp = useApiMutation<OtpType, OtpPayload>({
    url: "/admin/auth/verify-otp",
    method: "POST",
  });

  return {
    verifyOtp,
  };
};
