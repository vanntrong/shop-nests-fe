import { TProduct } from "@/modules/product/types/product.type";
import { IPaginationParams, IPaginationResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export type TGetAllProductsParams = IPaginationParams & {
  category?: string;
  min_price?: number;
  max_price?: number;
};

export const getAllProducts = async (
  params: TGetAllProductsParams
): Promise<IPaginationResponse<TProduct>> => {
  return axiosInstance.get("/products", { params });
};
