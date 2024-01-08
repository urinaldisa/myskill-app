import { useRouter } from "expo-router";
import { useMutation, useQueryClient } from "react-query";
import { useAxios } from "../useApi";


type ParamType = {
  operator: any;
  style?: any;
  process: any;
  allowance: any;
  average: string;
  result: any;
  cycle_time: any;
  date: any
};

const useIEInputMutation = () => {
  const api = useAxios();
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(({ operator, style, process, allowance, average,result,cycle_time,date }: ParamType) => {
    return api
      .post(`ie-input`, {
       operator_id: operator,
       style_process_id: process,
       allowance:allowance,
       avg: average,
       date: date,
       cycle_times: cycle_time,
       result: result,
       style_id: style
      })
      .then((res) => {
        console.log(res)
        queryClient.invalidateQueries("IEList");
        queryClient.invalidateQueries("userMe");
        router.push('/Main')

      })
      .catch((err) => {
        console.log(err)
        // toast.error(err.axiosError.response.data.message);
      });
  });
};

export default useIEInputMutation;
