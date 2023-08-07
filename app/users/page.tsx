import { fetchUsers } from '@/libs/fetchUsers'
import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
    title: "Users Page",
    description: "Fetching users"
}

export default async function UsersPage() {
    // tyep User is coing from types.d.ts file and typescript automatically and we dont have to import in this component explicitly
    const usersData: Promise<User[]> = fetchUsers()

    const users = await usersData

    const content = (
        <section>
            <h2>
                <Link href={"/"}>Go Back To Home</Link>
            </h2>
            <br />
            {
                users.map(user => {
                    return (
                        <>
                            <p key={user.id}>
                                <Link href={`/users/${user.id}`}>{user.name}</Link>
                            </p>
                            <br />
                        </>
                    )
                })
            }
        </section>
    )

    return content
}
