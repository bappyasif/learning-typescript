import { useContext } from "react"
import { UserCtx } from "./UserContext"

export const User = () => {
    const userCtx = useContext(UserCtx);
    const handleLogin = () => {
        // as we are currently using "{} empty  object" as userCtxType instance we dont have to precheck if "userCtx" exists or not
        // if(userCtx) {
        userCtx.setUser({
            name: "a b!!",
            email: "a@b.com"
        })
        // }
    }
    const handleLogout = () => {
        // as we are currently using "{} empty  object" as userCtxType instance we dont have to precheck if "userCtx" exists or not
        // if(userCtx) {
        userCtx.setUser(null)
        // }
    }
    return (
        <>
            <div>User</div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {/* // as we are currently using "{} empty  object" as userCtxType instance we dont have to precheck if "userCtx" exists or not */}
            {/* <h2>user name: {userCtx?.user?.name}</h2> */}
            <h2>user name: {userCtx.user?.name}</h2>
            {/* // as we are currently using "{} empty  object" as userCtxType instance we dont have to precheck if "userCtx" exists or not */}
            {/* <h2>user email: {userCtx?.user?.email} </h2> */}
            <h2>user email: {userCtx.user?.email} </h2>
        </>
    )
}
