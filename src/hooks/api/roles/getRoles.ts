import { useApiQuery } from "@/hooks/useApiQuery";



export interface RoleType {
    message: string;
    data:    RoleObject[];
}

export interface RoleObject {
    name: string;
    id:   string;
}

export const RolesApi = () => {
  const GetRole = () =>
    useApiQuery<RoleType>(["getRole"], {
      url: `/roles`,
      method: "GET",
    });

  return {
    GetRole,
  };
};
