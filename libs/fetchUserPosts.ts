export const fetchUserPosts = async (userId: string) => {
    const user_url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    const resp = await fetch(user_url)

    if (!resp.ok) {
        throw new Error("failed to fetch posts for user")
    }

    return resp.json()
}