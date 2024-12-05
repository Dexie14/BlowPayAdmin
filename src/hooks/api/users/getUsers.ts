import { useApiQuery } from "@/hooks/useApiQuery";

export interface UserType {
  message: string;
  data: userObject;
}

export interface userObject {
  id: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  role: string;
  status: string;
  createdAt: string;
}

export const UserApi = () => {
  const GetUserbyId = (userId: string) =>
    useApiQuery<UserType>(
      ["getUserbyId", userId],
      {
        url: `/admin/users?id=${userId}`,
        method: "GET",
      },
      {
        enabled: !!userId,
      }
    );

  return {
    GetUserbyId,
  };
};
