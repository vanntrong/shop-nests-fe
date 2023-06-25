import { TProduct } from "@/modules/product/types/product.type";
import { IPaginationParams, IPaginationResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export type TGetMyOrderResponse = IPaginationResponse<{
  id: string;
  feeShip: number;
  value: number;
  actualValue: number;
  pointEarned: number | null;
  pointUsed: number | null;
  statusId: number;
  createdAt: string;
  updatedAt: string | null;
  orderProducts: {
    id: string;
    quantity: number;
    price: number;
    product: TProduct;
  }[];
}>;

export type TGetMyOrderParams = IPaginationParams;

export const getMyOrder = (params?: TGetMyOrderParams): Promise<TGetMyOrderResponse> => {
  return axiosInstance.get("/orders/my-orders", { params });
};
