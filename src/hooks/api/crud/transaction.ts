import { useApiQuery } from "@/hooks/useApiQuery";

export interface AllTransDataType {
  message: string;
  data: TransData[];
}

export interface TransData {
  user: UserData;
  amount: number;
  status: string;
  type: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  username: string;
  emailAddress: string;
  password: string;
  status: string;
  country: string;
  dateOfBirth: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export const transactionApi = () => {
  const GetAllTransaction = () =>
    useApiQuery<AllTransDataType>(["getTrans"], {
      url: `/admin/transactions`,
      method: "GET",
    });

  return {
    GetAllTransaction,
  };
};
