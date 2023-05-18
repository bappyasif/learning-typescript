import { createContext, useState } from "react"

export type authUserPropTypes = {
    name: string,
    email: string
}

type userCtxPropType = {
    children: React.ReactNode
}

type userCtxType = {
    user: authUserPropTypes | null,
    setUser: React.Dispatch<React.SetStateAction<authUserPropTypes | null>>
}

// this way we will have to keep using "?." in User.tsx to check if "userCtx" exists first
// export const UserCtx = createContext<userCtxType | null>(null)

// if we tell typescript that consider an empty object as an instance of type "userCtxType" then we wont have to user "?." in User.tsx
export const UserCtx = createContext({} as userCtxType)

export const UserContextProvider = ({children}: userCtxPropType) => {
    const [user, setUser] = useState<authUserPropTypes | null>(null)
    return (
        <UserCtx.Provider value={{user, setUser}}>
            {children}
        </UserCtx.Provider>
    )
}