import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { TGetDistrictsResponse, getDistricts } from "@/apis/province/getDistricts";
import { getQueryKey } from "@/utils/queryKey";

const useGetDistricts = (
  provinceCode?: number,
  configs?: UseQueryOptions<TGetDistrictsResponse, AxiosError>
) => {
  const queryKey = getQueryKey("districts", { provinceCode });

  return useQuery<TGetDistrictsResponse, AxiosError>(
    queryKey,
    () => getDistricts(provinceCode ?? 1),
    configs
  );
};

export default useGetDistricts;
