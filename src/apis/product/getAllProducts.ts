import { TProduct } from "@/modules/product/types/product.type";
import { IPaginationParams, IPaginationResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

type TParams = IPaginationParams & {
  category?: string;
};

export const getAllProducts = async (params: TParams): Promise<IPaginationResponse<TProduct>> => {
  return axiosInstance.get("/products", { params });
};
