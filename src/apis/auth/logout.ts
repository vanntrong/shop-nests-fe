import { axiosInstance } from "@/utils/axios";

export const logout = (): Promise<void> => {
  return axiosInstance.post("/auth/logout");
};
