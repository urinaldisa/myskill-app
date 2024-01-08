import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { useAxios } from "../useApi";


interface ApiResponse {
  data: any;
}

export const useGetOperatorbyQR = (
  params?: any,
  options?: UseQueryOptions<ApiResponse>
): UseQueryResult<ApiResponse> => {
  const api = useAxios();

  return useQuery<ApiResponse>(
    "ScanOperator",
    () => {
      return api
        .get(`operator/scan-qr/${params.code}`, {

        })
        .then((res) => {
          const data = res.data as ApiResponse;
          return data;
        });
    },
    {
      retry: false,
      enabled: false,
      refetchOnWindowFocus: false,
      ...options,
    }
  );
};
