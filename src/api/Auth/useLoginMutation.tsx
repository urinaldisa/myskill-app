import { useRouter } from "expo-router";
import { useMutation } from "react-query";
import { useAuth } from "../../providers/Auth";
import { useAxios } from "../useApi";


type ParamType = {
  email: string;
  password: string;
};

const useLoginMutation = () => {
  const api = useAxios();
  const router = useRouter();
  const { onLogin, onSetProfile } = useAuth();
  return useMutation(({ email, password }: ParamType) => {
    return api
      .post(`login`, {
        email: email,
        pin_password: password,
      })
      .then((res) => {
        onLogin(res.data.data.token.plain_text_token)
        onSetProfile(res.data.data.user)
        router.push('/Main')
      })
      .catch((err) => {
        console.log(err)
        // toast.error(err.axiosError.response.data.message);
      });
  });
};

export default useLoginMutation;
