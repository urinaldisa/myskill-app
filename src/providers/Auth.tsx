import React, { useContext, useEffect, useState } from "react";
import { queryClient } from "./query";
import useStorageState from "./useStorageState";


export type AuthType = {
  jwt?: string;
};

const initialData: AuthType = {
  jwt: undefined,
};

type ProviderType = {
  loggedIn: boolean;
  data: AuthType;
  profile: any;
  onLogin: (jwt: string) => void;
  onLogout: () => void;
  onSetProfile: (value: any) => void;
  isLoading: boolean;
};

export const AuthContext = React.createContext<ProviderType>({
  loggedIn: true,
  data: { jwt: "" },
  profile: {value : {}},
  onLogin: () => { },
  onLogout: () => { },
  onSetProfile: () => { },
  isLoading: true,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useStorageState<any>("auth", {
    defaultValue: initialData,
  })
  const [profile, setProfile] = useStorageState<any>("profile", {
    defaultValue: {},
  })

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);
  const onLogin = (newJwt: string) => {
    setData((prevData: any) => ({ ...prevData, jwt: newJwt }));
  };
  const onSetProfile = (value: any) => {
    setProfile((prevData: any) => ({ ...prevData, value: value }));
  };

  const onLogout = () => {
    setData((prevData: any) => ({ ...prevData, jwt: undefined }));
    // Clear all API cache. Makes sure we have correct data
    queryClient.clear();
  };

  const loggedIn = !!data.jwt && data.jwt !== "";

  return (
    <AuthContext.Provider
      value={{ loggedIn, data, onLogin, onLogout, onSetProfile, profile, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
