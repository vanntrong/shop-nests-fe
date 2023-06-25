import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import getCart, { TGetCartResponse } from "@/apis/cart/getCart";
import { queryClient } from "@/configs/query.config";
import { IResultResponse } from "@/types/common";
import { getQueryKey } from "@/utils/queryKey";

const useGetCart = (configs?: UseQueryOptions<IResultResponse<TGetCartResponse>, AxiosError>) => {
  const queryKey = getQueryKey(["cart", "get"]);

  return useQuery<IResultResponse<TGetCartResponse>, AxiosError>(queryKey, getCart, configs);
};

export default useGetCart;

export const useInvalidateGetCart = () => {
  const queryKey = getQueryKey(["cart", "get"]);

  return () => queryClient.invalidateQueries(queryKey);
};
