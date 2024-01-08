import {
    useInfiniteQuery,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
  } from "react-query";
import { standardExtraQueryParam } from "../../helper/pagination";
  import { useAxios } from "../useApi";
  
  interface User {
    // define the properties of your user object here
  }
  
  interface ApiResponse {
    meta: any;
    links: any;
    data: any;
    pages: any;
    users: User[];
    totalPages: number;
    currentPage: number;
  }

  
  const useGetIEList = (
    params?: any,
    options?: UseInfiniteQueryOptions<ApiResponse>
  ): UseInfiniteQueryResult<ApiResponse> => {
    const api = useAxios();
  
    return useInfiniteQuery<ApiResponse>(
      "IEList",
      ({ pageParam = 1 }) => {
        return api
          .get("ie-input", {
            params: {
              ...params,
              limit: 10,
              page: pageParam, // Adjust the page parameter name here
            },
          })
          .then((res) => {
            console.log(res)
            const data = res.data.data as ApiResponse;
            return data;
          });
      },
      standardExtraQueryParam
    );
  };
  
  export default useGetIEList;
  