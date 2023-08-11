import { NextResponse } from "next/server"
import { limiter } from "../config/limter"

export async function GET(request: Request) {
  const remaining = await limiter.removeTokens(1)
  
  console.log(remaining, "REMAINING!!")
  
  const origin = request.headers.get("origin")

  if(remaining < 0) {
    return new NextResponse(null, {
      status: 429,
      statusText: "Too many requests",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-Type": "text/plain"
      }
    })
  }

  // return new NextResponse(JSON.stringify('Hello, Next.js!'), {
  //   headers: {
  //     "Access-Control-Allow-Origin": origin || "*",
  //     "Content-Type": "application/json"
  //   }
  // })

  // return new Response('Hello, Next.js!', {
  //   headers: {
  //     "Access-controll-Allow-Origin": origin || "*",
  //     "Content-Type": "application/json"
  //   }
  // })

  return new Response('Hello, Next.js!')
}
