import { NextResponse } from "next/server";

// const allowedList = process.env.NODE_ENV === "production" ? ["https://www.site.com", "https://site.com"] : ["http://localhost:3000", "https://www.google.com"]

const allowedList = process.env.NODE_ENV === "production" ? ["https://www.site.com", "https://site.com"] : ["http://localhost:3000"]

// will intercept any api request within our project codebase not just limited to a specific route requests, unless we configure it that way in our project, which is also recommended
export function middleware(request: Request) {
    // 2nd way
    // if we do this then we dont have to use pattern matcher
    // we could also use it in combination of both 1st and 2nd way
    // if(request.url.includes("/api/")) {
    //     // all of it will be catched by middleware
    // }

    // 3rd way
    // const regEx = new RegExp("/api/");
    // if(regEx.test(request.url)) {
    //     // all of it will be catched by middleware
    // }

    const origin = request.headers.get("origin")
    console.log(origin, "orign!!")

    if (origin && !allowedList.includes(origin)) {
        return new NextResponse(null, {
            status: 400,
            statusText: "Bad request",
            headers: {
                "Content-Type": "text/plain"
            }
        })
    }


    console.log("middleware");
    console.log(request.method, request.url)

    return NextResponse.next()
}

// will oly be logging for api folder routes
// 1st way
export const config = {
    matcher: "/api/:path*"
}