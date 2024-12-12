import { useApiQuery } from "@/hooks/useApiQuery";

export interface AllVirtualWalletType {
  message: string;
  data: VirtualWalletData[];
}

export interface VirtualWalletData {
  user: UserData;
  accountNumber: string;
  type: string;
  accountID: string;
  bankName: string;
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

export const virtualWalletApi = () => {
  const GetAllVirtualWallet = () =>
    useApiQuery<AllVirtualWalletType>(["getVirtualWallet"], {
      url: `/admin/virtual-accounts`,
      method: "GET",
    });

  return {
    GetAllVirtualWallet,
  };
};
