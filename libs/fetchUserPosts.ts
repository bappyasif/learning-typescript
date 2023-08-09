export const fetchUserPosts = async (userId: string) => {
    const user_url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    const resp = await fetch(user_url)
    // from server side data fetched are cahed by default, we dont have to specifically tell nextjs to do so
    // const resp = await fetch(user_url, {cache: "force-cache"})

    // this will mean that we want to cached data after fetching, which means it will always fetches data before rendering
    // const resp = await fetch(user_url, {cache: "no-cache"})

    // isr - incremental static regeneration - we will only fetch data only after a certain time, as we may see it fits our requirements, we can do that by using "revalidate", time measures in 60 in revalidate
    // isr can be used in both Static Site Rendering or Server Side Rendering
    // const resp = await fetch(user_url, {next: {revalidate: 60}})

    // segment level caching option is also available, which means we dont have to specefically mention "revalidate" in every fetch rather same revalidate will used among all fetch 
    // this can be used in "page" level or "layout" level
    // export const revalidate = 60

    if (!resp.ok) {
        // as we will be using error page, lets return undefined instead of throwing an error
        // throw new Error("failed to fetch posts for user")
        return undefined
    }

    return resp.json()
}