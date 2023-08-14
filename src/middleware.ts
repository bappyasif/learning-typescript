// option - 1
// // Without a defined matcher, this one line applies next-auth 
// // to the entire project
// export { default } from "next-auth/middleware"

// option - 2
// Ref: https://next-auth.js.org/configuration/nextjs#advanced-usage
import { withAuth, NextRequestWithAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // "withAuth" augments user "Request" with user's token
    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextUrl.pathname, request.nextauth.token, "what!!")

        if(request.nextUrl.pathname.startsWith("/extra") && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(
                new URL("/denied", request.url)
            )
        }

        if(request.nextUrl.pathname.startsWith("/client") && request.nextauth.token?.role !== "admin"  && request.nextauth.token?.role !== "manager") {
            return NextResponse.rewrite(
                new URL("/denied", request.url)
            )
        }
    },
    {
        // withAuth middleware runs only when this authorized prop returns true
        // but this minimizes flexibility, rather we want to handle this from middleware function to comply with our route matching based on roles
        // callbacks: {
        //     authorized: ({token}) => token?.role === "admin"
        // }

        callbacks: {
            authorized: ({token}) => !!token
        }
    }
)

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = { matcher: ["/extra", "/client", "/dashboard"] }