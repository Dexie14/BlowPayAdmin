import { useQuery, QueryKey, UseQueryOptions } from "@tanstack/react-query";
import { api } from "./apiFunction";
import { ApiError, ApiOptions } from "./api/types";
import { BASE_URL } from "@/constants";

export const useApiQuery = <T>(
  key: QueryKey,
  options: Omit<ApiOptions, "url"> & { url: string },
  queryOptions?: Omit<
    UseQueryOptions<T, ApiError, T, QueryKey>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<T, ApiError>({
    queryKey: key,
    queryFn: () =>
      api<T>({
        ...options,
        url: `${BASE_URL || ""}${options.url}`,
      }),
    ...queryOptions,
  });
};
