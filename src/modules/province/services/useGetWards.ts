import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { TGetWardsResponse, getWards } from "@/apis/province/getWards";
import { getQueryKey } from "@/utils/queryKey";

const useGetWards = (
  provinceCode?: number,
  districtCode?: number,
  configs?: UseQueryOptions<TGetWardsResponse, AxiosError>
) => {
  const queryKey = getQueryKey("wards", { provinceCode, districtCode });

  return useQuery<TGetWardsResponse, AxiosError>(
    queryKey,
    () => getWards(provinceCode ?? 1, districtCode ?? 1),
    configs
  );
};

export default useGetWards;
