import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  TGetCountPointParams,
  TGetCountPointResponse,
  getCountPoint,
} from "@/apis/order/getCountPoint";
import { getQueryKey } from "@/utils/queryKey";

const useCountPoint = (
  params: TGetCountPointParams,
  configs: UseQueryOptions<TGetCountPointResponse, AxiosError>
) => {
  const queryKey = getQueryKey("count-point", params);

  return useQuery<TGetCountPointResponse, AxiosError>(
    queryKey,
    () => getCountPoint(params),
    configs
  );
};

export default useCountPoint;
