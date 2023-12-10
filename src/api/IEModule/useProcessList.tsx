import {
    useInfiniteQuery,
    UseInfiniteQueryOptions,
    UseInfiniteQueryResult,
  } from "react-query";
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
  
  const useProcessList = (
    id: number,
    params?: any,
    options?: UseInfiniteQueryOptions<ApiResponse>
  ): UseInfiniteQueryResult<ApiResponse> => {
    const api = useAxios();
  
    return useInfiniteQuery<ApiResponse>(
      "ProcessList",
      ({ pageParam = 1 }) => {
        return api
          .get(`process/style-process/${id}`, {
            params: {
              ...params,
            },
          })
          .then((res) => {
            console.log(res)
            const data = res.data.data as ApiResponse;
            return data;
            //DEBT: DOCS RESULT
            //   return {
            //     ...data,
            //     users: data.users.map((user) => ({
            //       // map the user properties to your own interface here
            //     })),
            //   };
          })
      },
      {
        refetchOnWindowFocus: false
      }
    //   {
    //     getNextPageParam: (lastQuery, pages) => {
    //       // Error
    //       if (lastQuery === undefined) {
    //         return false;
    //       }
  
    //       const currentPage = lastQuery.meta!.current_page;
  
    //       if (!lastQuery.links!.next) return false;
    //       return currentPage! + 1;
    //     },
    //     retry: false,
    //     ...options,
    //   }
    );
  };
  
  export default useProcessList;
  