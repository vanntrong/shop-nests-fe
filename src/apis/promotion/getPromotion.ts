import { TPromotion } from "@/modules/promotion/types/promotion.type";
import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

const getPromotion = (
  code: string,
  params?: { total: number }
): Promise<IResultResponse<TPromotion>> => {
  return axiosInstance.get(`/promotions/${code}/value`, { params });
};

export default getPromotion;
