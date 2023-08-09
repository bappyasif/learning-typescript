export const fetchUser = async (userId: string) => {
    const user_url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const resp = await fetch(user_url)

    if (!resp.ok) {
        // as we will be using error page, lets return undefined instead of throwing an error
        // throw new Error("failed to fetch user")
        return undefined
    }

    return resp.json()
}