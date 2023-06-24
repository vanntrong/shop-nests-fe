import { axiosInstance } from "@/utils/axios";

export type TCreateOrderParams = {
  name: string;
  phone: string;
  email: string;
  province: string;
  district: string;
  ward: string;
  address: string;
  deliver_option: string;
  pointUsed?: number;
  promotionCode?: string;
  products: { productId: string; quantity: number }[];
};

export type TCreateOrderResponse = any;

export const createOrder = (params: TCreateOrderParams): Promise<TCreateOrderResponse> => {
  return axiosInstance.post("/orders", params);
};
