import { TProvince } from "@/modules/province/types/province.type";
import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

type TGetProvinceResponse = IResultResponse<TProvince[]>;
export const getProvince = (): Promise<TGetProvinceResponse> => {
  return axiosInstance.get("/province");
};
