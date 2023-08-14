'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import UserCard from '../components/UserCard'

export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    // we can alternatively handle this from middleware so that we dont have to use same kind of code for every components
    // if(session?.user.role !== "admin" && session?.user.role !== "manager")  {
    //     return <h1>Access Denied</h1>
    // }

    return (
        <section className="flex flex-col gap-6">
            {session?.user ? <UserCard user={session.user} pagetype={"Client"} /> : null}
        </section>
    )
}