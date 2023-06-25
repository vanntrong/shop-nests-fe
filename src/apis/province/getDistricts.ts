import { TDistrict } from "@/modules/province/types/province.type";
import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export type TGetDistrictsResponse = IResultResponse<TDistrict[]>;

export const getDistricts = (provinceCode: number): Promise<TGetDistrictsResponse> => {
  return axiosInstance.get(`/province/${provinceCode}/districts`);
};
