import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { useAxios } from "../useApi";


interface ApiResponse {
  data: any;
}

export const useGetProfile = (
  params?: any,
  options?: UseQueryOptions<ApiResponse>
): UseQueryResult<ApiResponse> => {
  const api = useAxios();

  return useQuery<ApiResponse>(
    "userMe",
    () => {
      return api
        .get(`profile`, {
          params: {
            ...params,
          },
        })
        .then((res) => {
          const data = res.data as ApiResponse;
          return data;
        });
    },
    {
      retry: false,
      enabled: true,
      refetchOnWindowFocus: false,
      ...options,
    }
  );
};
