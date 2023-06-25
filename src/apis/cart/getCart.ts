import { TProductWithQuantity } from "@/modules/product/types/product.type";
import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export type TGetCartResponse = {
  id: string;
  createdAt: string;
  updatedAt: string | null;
  products: TProductWithQuantity[];
};

const getCart = (): Promise<IResultResponse<TGetCartResponse>> => {
  return axiosInstance.get("/cart");
};

export default getCart;
