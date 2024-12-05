import { useApiQuery } from "@/hooks/useApiQuery";

export interface AllCustonmerType {
  message: string;
  data: AllCustomerData[];
}

export interface AllCustomerData {
  firstName: string;
  lastName: string;
  username: string;
  emailAddress: string;
  status: string;
  country: string;
  phoneNumber?: string;
  dateOfBirth: string;
  createdAt: string;
  id: string;
}

export const customerApi = () => {
  const GetAllCustomers = () =>
    useApiQuery<AllCustonmerType>(["getRole"], {
      url: `/admin/customers`,
      method: "GET",
    });

  return {
    GetAllCustomers,
  };
};
