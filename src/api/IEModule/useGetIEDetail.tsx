import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { useAxios } from "../useApi";


interface ApiResponse {
  data: any;
}

export const useGetIEDetails = (
  params?: any,
  options?: UseQueryOptions<ApiResponse>
): UseQueryResult<ApiResponse> => {
  const api = useAxios();

  return useQuery<ApiResponse>(
    `GetIeDetail${params}`,
    () => {
      return api
        .get(`ie-input/${params}`)
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
