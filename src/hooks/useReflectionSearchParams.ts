"use client";

import { merge, pickBy } from "lodash";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useCallback, useMemo } from "react";

const useReflectionSearchParams = <T extends Record<any, any>>(
  initialValues: T
): [T, (params: Partial<T>) => void] => {
  const navigate = useRouter();
  const pathname = usePathname();
  const searchPa = useSearchParams();

  const search = searchPa.toString();

  const isFieldTrue = useCallback(
    (field: keyof T) => field !== "" && field !== null && field !== undefined,

    []
  );

  const searchParams = useMemo(() => {
    const params: T = {
      ...initialValues,

      ...queryString.parse(search.replace("?", "")),
    };

    return {
      ...params,

      ...(params?.filters && { filters: pickBy(params?.filters, isFieldTrue) }),
    };
  }, [search, initialValues, isFieldTrue]);

  const setSearchParams = useCallback(
    (params: Partial<T>) => {
      const newParams = merge(searchParams, params);
      navigate.push(`${pathname}?${queryString.stringify(newParams)}`);
    },

    [navigate, searchParams, pathname]
  );

  return [searchParams, setSearchParams];
};

export default useReflectionSearchParams;
