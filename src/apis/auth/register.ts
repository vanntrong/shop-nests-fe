import { TRegisterData } from "@/modules/auth/validations/register";
import { IResultResponse } from "@/types/common";
import { TUser } from "@/types/user";
import { axiosInstance } from "@/utils/axios";

export type TRegisterResponse = IResultResponse<TUser> & {
  tokens: { access_token: string; refresh_token: string; exp: number };
};

export const register = (payload: TRegisterData): Promise<TRegisterResponse> => {
  return axiosInstance.post("/auth/register", payload);
};
