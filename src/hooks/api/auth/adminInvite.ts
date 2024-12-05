import { useApiMutation } from "@/hooks/useApiMutation";

interface InviteType {
  message: string;
}

interface InvitePayload {
    emailAddress: string;
    role: string;
  }

  

export const AdminInvite = () => {
  const adminInvite = useApiMutation<InviteType, InvitePayload>({
    url: "/admin/auth/invite ",
    method: "POST",
  });

  return {
    adminInvite,
  };
};
