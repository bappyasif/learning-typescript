import { fetchUser } from "@/libs/fetchUser"
import { fetchUserPosts } from "@/libs/fetchUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { Metadata } from "next"
import { fetchUsers } from "@/libs/fetchUsers"
import {notFound} from "next/navigation"

type Params = {
    params: {
        userId: string
    }
}

// dynamic metadata
export async function generateMetadata ({params: {userId}}: Params): Promise<Metadata> {
    // de duplicated user data will be fetched
    const userData: Promise<User> = fetchUser(userId)
    const user: User = await userData

    // dynamic metadata when user is not found
    if (!user || !user.name) {
        // console.log("INSIDE METRE")
        return {
            title: "User Is Not Found"
        }
    }

    // console.log(user, "USER!!")

    // dynamic metadata when user is not found
    // if(!user) {
    //     console.log("running!!!!")
    //     return {
    //         title: "User Is Not Found!!"
    //     }
    // }

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

    const user:User = await userData

    // console.log(user, "USER DATA!!")

    // if user is not found we will show notFound page provided by nextjs
    if(!user || !user.name) {
        // if we have aour own not found page defined in route folder then it will render that instead of what served by nextjs
        return notFound()
    }

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

// using generateStaticParams will tell next js in advance that what "dynamically" generated params will be in use so that it can fetches data in advance for those params
// when we use this it becomes SSG and not SSR
export async function generateStaticParams() {
    // in this case we want to generate our user pages in advance, we can do that by giving nextjs out dynamic user ids back to it so that it can fetches data in background for our dynamic user page rendering
    const usersData: Promise<User[]> = fetchUsers()
    const users = await usersData;

    return users.map(user => ({
        userId: user.id.toString()
    }))
}