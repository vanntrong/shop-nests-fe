import { TProduct } from "@/modules/product/types/product.type";
import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export const getProductDetail = (slug: string): Promise<IResultResponse<TProduct>> => {
  return axiosInstance.get(`/products/${slug}`);
};
