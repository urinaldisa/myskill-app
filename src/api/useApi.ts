import axios from "axios";
import { useAuth } from "../providers/Auth";
// import { CustomAxiosErrorType } from "../errors";

let baseUrl = "https://api-myskill.digitalrise.id";
const errorFunction =
  (loggedIn: boolean, logout: CallableFunction) =>
  (error: any): Promise<any> => {
    return Promise.reject({ axiosError: error, loggedIn, logout });
  };

const getHeader = (loggedIn: boolean, authToken: any) => ({
  headers: {
    ...(loggedIn
      ? { Authorization: `Bearer ${authToken}`, Accept: "application/json" }
      : {}),
  },
});

export const useAxios = () => {
  const {
    loggedIn,
    data: { jwt },
    onLogout,
  } = useAuth();

  const authHeader = getHeader(loggedIn, jwt);

  const instance = axios.create({
    baseURL: baseUrl + "/api/",
    ...authHeader,
  });

  instance.interceptors.response.use(function (response) {
    return response;
  }, errorFunction(loggedIn, onLogout));

  return instance;
};
