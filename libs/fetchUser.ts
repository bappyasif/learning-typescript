export const fetchUser = async (userId: string) => {
    const user_url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const resp = await fetch(user_url)

    if (!resp.ok) {
        throw new Error("failed to fetch user")
    }

    return resp.json()
}