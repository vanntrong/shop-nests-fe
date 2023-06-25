import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { TCreateOrderParams, TCreateOrderResponse, createOrder } from "@/apis/order/createOrder";
import { getQueryKey } from "@/utils/queryKey";

const useCreateOrder = (
  configs?: UseMutationOptions<TCreateOrderResponse, AxiosError, TCreateOrderParams>
) => {
  const key = getQueryKey("createOrder");

  return useMutation<TCreateOrderResponse, AxiosError, TCreateOrderParams>(
    key,
    (data: TCreateOrderParams) => createOrder(data),
    configs
  );
};

export default useCreateOrder;
