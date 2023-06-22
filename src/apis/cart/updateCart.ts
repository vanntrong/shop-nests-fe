import { TProduct } from "@/modules/product/types/product.type";
import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export type TUpdateCartPayload = {
  cartProducts: { id: string; quantity: number }[];
};

export type TUpdateCartResponse = {
  id: string;
  createdAt: string;
  updatedAt: string | null;
  products: TProduct[];
};

const updateCart = (payload: TUpdateCartPayload): Promise<IResultResponse<TUpdateCartResponse>> => {
  return axiosInstance.put("/cart", payload);
};

export default updateCart;
