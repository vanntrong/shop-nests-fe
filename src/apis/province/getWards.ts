import { TDistrict } from "@/modules/province/types/province.type";
import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export type TGetWardsResponse = IResultResponse<TDistrict[]>;

export const getWards = (
  provinceCode: number,
  districtCode: number
): Promise<TGetWardsResponse> => {
  return axiosInstance.get(`/province/${provinceCode}/districts/${districtCode}/wards`);
};
