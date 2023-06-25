import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { TGetAllProductsParams, getAllProducts } from "@/apis/product/getAllProducts";
import { IPaginationResponse } from "@/types/common";
import { getQueryKey } from "@/utils/queryKey";

import { TProduct } from "../types/product.type";

const useGetProducts = (
  params: TGetAllProductsParams,
  configs: UseQueryOptions<IPaginationResponse<TProduct>, AxiosError>
) => {
  const queryKey = getQueryKey("products", params);

  return useQuery<IPaginationResponse<TProduct>, AxiosError>(
    queryKey,
    () => getAllProducts(params),
    configs
  );
};

export default useGetProducts;
