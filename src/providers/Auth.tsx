import React, { useContext, useEffect, useState } from "react"
import useStorageState from "./useStorageState"


export type AuthType = {
  jwt?: string
}

const initialData: AuthType = {
  jwt: undefined,
}


type ProviderType = {
  loggedIn: boolean
  data: AuthType
  onLogin: (jwt: string) => void
  saveData: (User: any) => void
  onLogout: () => void
  isLoading: boolean
}

export const AuthContext = React.createContext<ProviderType>({
  loggedIn: true,
  data: { jwt: "" },
  onLogin: () => {},
  saveData: () => {},
  onLogout: () => {},
  isLoading: true,
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthConsumer = AuthContext.Consumer

export const AuthProvider = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
  const [data, setData] = useStorageState<AuthType>("auth", initialData)
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useStorageState<User>("user", initialUserData)

  useEffect(() => {
    if (!!data && data.jwt !== undefined) {
      setIsLoading(false)
    }
  }, [data, setIsLoading])

//   const onLogin = (newJwt) => {
//     setData((prevData) => ({ ...prevData, jwt: newJwt }))
//   }
  const saveData = (userData: any) => {
    setUserData(userData)
  }
//   const onLogout = () => {
//     setData((prevData) => ({ ...prevData, jwt: null }))
//     // Clear all API cache. Makes sure we have correct data
//     // queryClient.clear()
//   }

  const loggedIn = !!data.jwt && data.jwt !== ""

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        data,
        // userData,
        // onLogin,
        saveData,
        // onLogout,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
