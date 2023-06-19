import { TCategory } from "@/types/category";
import { IPaginationParams, IPaginationResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export const getAllCategories = async (params: IPaginationParams) => {
  return axiosInstance.get<IPaginationResponse<TCategory>>("/categories", { params });
};
