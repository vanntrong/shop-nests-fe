import { IResultResponse } from "@/types/common";
import { TUser } from "@/types/user";
import { axiosInstance } from "@/utils/axios";

export type TGetMeResponse = IResultResponse<TUser>;

export const getMe = (): Promise<TGetMeResponse> => {
  return axiosInstance.get("/users/me");
};
