import { useState } from "react"

type propsTypes = {
    name: string,
    email: string
}

export const TypeAssertion = () => {
    const [user, setUser] = useState<propsTypes>({} as propsTypes)

    const handleLogin = () => {
        setUser({
            name: "ab",
            email: "a@b.com"
        })
    }

    return (
        <>
            <div>AuthedUser</div>
            <button onClick={handleLogin}>Login</button>
            <h2>User name: {user.name}</h2>
            <h2>User email: {user.email}</h2>
        </>
    )
}
