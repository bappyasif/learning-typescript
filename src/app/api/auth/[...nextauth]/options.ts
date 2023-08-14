import type { NextAuthOptions } from 'next-auth'
import GitHubProvider, { GithubProfile } from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

const users = [
    { id: "42", name: "ab", password: "nextauth", role: "admin" },
    { id: "42", name: "a.b.", password: "nextauth", role: "manager" }
]

export const options: NextAuthOptions = {
    providers: [
        GitHubProvider({
            profile(profile: GithubProfile) {
                // console.log(profile);
                return {
                    ...profile,
                    // now we can modify profile content before using it to our application as per our User Type and additional needs
                    role: profile.role ?? "user",
                    id: profile.id.toString(),
                    image: profile.avatar_url
                }
            },
            // profile(profile: GithubProfile) {
            //     //console.log(profile)
            //     return {
            //         ...profile,
            //         role: profile.role ?? "user",
            //         // role: "user",
            //         id: profile.id.toString(),
            //         image: profile.avatar_url,
            //     }
            // },
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                console.log(credentials, "creds")
                // const user = { id: "42", name: "ab", password: "nextauth", role: "admin" }
                
                // if (credentials?.username === user.name && credentials?.password === user.password) {
                //     return user
                // } else {
                //     return null
                // }
                const user = users.find(user => user.name === credentials?.username && user.password === credentials.password)
                if (user?.role) {
                    return user
                } else {
                    return null
                }               
            }
        })
    ],
    // for deployment its needed, not required for developemnt mode
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        // role based auth config for server 
        async jwt({token, user}) {
            if(user) {
                token.role = user.role
            }
            return token
        },

        // if we need role based auth in client side
        async session({session, token}) {
            if(session?.user) {
                session.user.role = token.role
            }
            return session
        },
    }
}