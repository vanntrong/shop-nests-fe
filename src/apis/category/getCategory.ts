import { TCategory } from "@/types/category";
import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export const getCategory = (slug: string): Promise<IResultResponse<TCategory>> => {
  return axiosInstance.get(`/categories/${slug}`);
};
