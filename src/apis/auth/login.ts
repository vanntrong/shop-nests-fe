import { TLoginData } from "@/modules/auth/validations/login";
import { IResultResponse } from "@/types/common";
import { TUser } from "@/types/user";
import { axiosInstance } from "@/utils/axios";

export type TLoginResponse = IResultResponse<TUser> & {
  tokens: { access_token: string; refresh_token: string; exp: number };
};

export const login = (payload: TLoginData): Promise<TLoginResponse> => {
  return axiosInstance.post("/auth/login", payload);
};
