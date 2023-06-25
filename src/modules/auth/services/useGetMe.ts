import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { getMe, TGetMeResponse } from "@/apis/auth/getMe";
import { getQueryKey } from "@/utils/queryKey";

const useGetMe = (token?: string, configs?: UseQueryOptions<TGetMeResponse, AxiosError>) => {
  const queryKey = getQueryKey("me", { token });
  return useQuery<TGetMeResponse, AxiosError>(queryKey, getMe, configs);
};

export default useGetMe;
