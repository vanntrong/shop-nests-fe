import { useQuery } from "@tanstack/react-query";

import { getProvince } from "@/apis/province/getCity";
import { getQueryKey } from "@/utils/queryKey";

const useGetProvince = () => {
  const queryKey = getQueryKey("province");

  return useQuery(queryKey, () => getProvince());
};

export default useGetProvince;
