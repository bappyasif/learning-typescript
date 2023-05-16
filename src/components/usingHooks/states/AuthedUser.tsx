import { useState } from "react"

type propsTypes = {
    name: string,
    email: string
}

export const AuthedUser = () => {
    const [user, setUser] = useState<propsTypes | null>(null)
    const handleLogin = () => {
        setUser({
            name: "ab",
            email: "a@b.com"
        })
    }
    const handleLogout = () => setUser(null)

    return (
        <>
            <div>AuthedUser</div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>User name: {user?.name}</h2>
            <h2>User email: {user?.email}</h2>
        </>
    )
}
