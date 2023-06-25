import { TCategory } from "@/types/category";
import { IPaginationParams, IPaginationResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export interface IGetCategoriesParams extends IPaginationParams {
  isShowAtHome?: boolean;
  isAtSidebar?: boolean;
  maxLevel?: number;
  minLevel?: number;
}

export const getAllCategories = async (
  params: IGetCategoriesParams
): Promise<IPaginationResponse<TCategory>> => {
  return axiosInstance.get("/categories", { params });
};
