import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import getPromotion from "@/apis/promotion/getPromotion";
import { IResultResponse } from "@/types/common";
import { getQueryKey } from "@/utils/queryKey";

import { TPromotion } from "../types/promotion.type";

type TParams = {
  code: string;
  total: number;
};

const useGetPromotion = (
  options?: UseMutationOptions<IResultResponse<TPromotion>, AxiosError, TParams>
) => {
  const key = getQueryKey("promotion");
  return useMutation<IResultResponse<TPromotion>, AxiosError, TParams>(
    key,
    ({ code, total }) => getPromotion(code, { total }),
    options
  );
};

export default useGetPromotion;
