import { useState } from "react"

export const StateHooks = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // due to typescript inference as we defined state variable to have a boolean value and will only expect boolean data anything else will throw error
    const handleLogin = () => setIsLoggedIn(true)

    const handleLogout = () => setIsLoggedIn(false)

    return (
        <>
            <div>StateHooks</div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>User Is: {isLoggedIn ? "Logged In" : "logged Out"}</h2>
        </>
    )
}
