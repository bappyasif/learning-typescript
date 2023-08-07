import { fetchUser } from "@/libs/fetchUser"
import { fetchUserPosts } from "@/libs/fetchUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { Metadata } from "next"

type Params = {
    params: {
        userId: string
    }
}

// dynamic metadata
export async function generateMetadata ({params: {userId}}: Params): Promise<Metadata> {
    // de duplicated user data will be fetched
    const userData: Promise<User> = fetchUser(userId)
    const user:User = await userData

    return {
        title: user.name,
        description: `this is a page for user ${user.name}`
    }

}
export default async function UserPage({ params: { userId } }: Params) {
    const userData: Promise<User> = fetchUser(userId)

    const userPostsData: Promise<Post[]> = fetchUserPosts(userId)

    // fetching data in parallel rather than in waterfall mode, so this makes data fetching more effecient
    // but this can be improved upon by using docs 4th criteria, which is incrementally fetch and show data when ready
    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await userData

    return (
        <>
            <h1>{user.name} - {userId}</h1>
            <Suspense fallback={"Loading User Posts Data...."}>
                {/* <UserPosts posts={userPosts} /> */}
                <UserPosts promise={userPostsData} />
            </Suspense>
        </>
    )
}

// const UserPosts = ({...posts}: Post[]) => {
//     const {} = posts
//     return (
//         <>
//         </>   
//     )
// }