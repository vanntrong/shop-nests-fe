import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { TGetMyOrderParams, TGetMyOrderResponse, getMyOrder } from "@/apis/order/getMyOrder";
import { getQueryKey } from "@/utils/queryKey";

const useGetMyOrder = (
  params?: TGetMyOrderParams,
  configs?: UseQueryOptions<TGetMyOrderResponse, AxiosError>
) => {
  const queryKey = getQueryKey("myOrder", params);

  return useQuery<TGetMyOrderResponse, AxiosError>(queryKey, () => getMyOrder(params), configs);
};

export default useGetMyOrder;
