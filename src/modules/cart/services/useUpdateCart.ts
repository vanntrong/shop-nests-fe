import { UseMutateFunction, UseMutationOptions, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

import updateCart, { TUpdateCartPayload, TUpdateCartResponse } from "@/apis/cart/updateCart";
import { IResultResponse } from "@/types/common";
import { getQueryKey } from "@/utils/queryKey";

import { useInvalidateGetCart } from "./useGetCart";

export type TUpdateCartFN = UseMutateFunction<
  IResultResponse<TUpdateCartResponse>,
  AxiosError<unknown, any>,
  TUpdateCartPayload,
  unknown
>;

const useUpdateCart = (
  options?: UseMutationOptions<IResultResponse<TUpdateCartResponse>, AxiosError, TUpdateCartPayload>
) => {
  const key = getQueryKey(["cart", "update"]);
  const invalidateGetCart = useInvalidateGetCart();
  return useMutation<IResultResponse<TUpdateCartResponse>, AxiosError, TUpdateCartPayload>(
    key,
    (payload: TUpdateCartPayload) => updateCart(payload),
    {
      async onSuccess() {
        await invalidateGetCart();
      },
      ...options,
    }
  );
};

export default useUpdateCart;
