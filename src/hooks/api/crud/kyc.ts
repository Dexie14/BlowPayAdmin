import { useApiQuery } from "@/hooks/useApiQuery";

export interface AllKYCDataType {
  message: string;
  data: KYCData[];
}

export interface KYCData {
  user: {
    _id: string;
    user: UserData;
  };
  tier: number;
  country: string;
  status: string;
  type: string;
  documentType: string;
  idNumber: string;
  documentImage: string;
  selfieImage: string;
  createdAt: string;
  expiryDate: string;
  updatedAt: string;
  id: string;
}

export interface UserData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  username: string;
  emailAddress: string;
  password: string;
  status: string;
  country: string;
  _id: string;
}

export const kycApi = () => {
  const GetAllKycCustomer = () =>
    useApiQuery<AllKYCDataType>(["getKYC"], {
      url: `/admin/kyc`,
      method: "GET",
    });

  return {
    GetAllKycCustomer,
  };
};
