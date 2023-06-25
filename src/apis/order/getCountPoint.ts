import { IResultResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";

export type TGetCountPointParams = {
  total: number;
};

export type TGetCountPointResponse = IResultResponse<{ pointEarned: number }>;

export const getCountPoint = (params: TGetCountPointParams): Promise<TGetCountPointResponse> =>
  axiosInstance.get("/orders/count-point", { params });
