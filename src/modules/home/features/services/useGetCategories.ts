import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { IGetCategoriesParams } from "@/apis/category/getAllCategories";
import { TCategory } from "@/types/category";
import { IPaginationResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";
import { getQueryKey } from "@/utils/queryKey";

const useGetCategories = (
  params?: IGetCategoriesParams,
  options?: UseQueryOptions<IPaginationResponse<TCategory>, AxiosError>
) => {
  const key = getQueryKey("categories");
  return useQuery<IPaginationResponse<TCategory>, AxiosError>(
    key,
    () =>
      axiosInstance.get("/categories", {
        params: { ...params },
        baseURL: "http://localhost:8080/api/v1",
      }),
    options
  );
};

export default useGetCategories;
