import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({msg: "hello next js"})
}

// export async function GET() {
//     return new Response("hello next js")
// }