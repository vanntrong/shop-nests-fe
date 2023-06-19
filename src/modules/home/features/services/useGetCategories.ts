import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { TCategory } from "@/types/category";
import { IPaginationResponse } from "@/types/common";
import { axiosInstance } from "@/utils/axios";
import { getQueryKey } from "@/utils/queryKey";

const useGetCategories = (
  options?: UseQueryOptions<IPaginationResponse<TCategory>, AxiosError>
) => {
  const key = getQueryKey("categories");
  return useQuery<IPaginationResponse<TCategory>, AxiosError>(
    key,
    () =>
      axiosInstance.get("/categories", {
        params: { limit: 1000, offset: 0, sortOrder: "asc" },
        baseURL: "http://localhost:8080/api/v1",
      }),
    options
  );
};

export default useGetCategories;
