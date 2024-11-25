import { AxiosRequestConfig } from "axios";

export type ID = string | number;

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiError {
  response?: any;
  message?: string;
  status?: number;
  data?: any;
}
export interface AuthResponse {
  message: string;
  user: AuthData;
}

export interface ApiOptions extends Omit<AxiosRequestConfig, "url" | "method"> {
  url: string;
  method: HttpMethod;
}
// export interface AuthUser {
//   fullname?: string;
//   email: string;
//   password: string;
// }


export interface AuthData {
  emailAddress: string;
  password:     string;
  role:         RoleData;
  firstName:    string;
  lastName:     string;
  status:       string;
  createdAt:    Date;
  updatedAt:    Date;
  id:           string;
}

export interface RoleData {
  name: string;
}

