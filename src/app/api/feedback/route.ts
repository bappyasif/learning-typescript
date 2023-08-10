import { NextResponse } from "next/server"

type Props = {
    name: string,
    email: string,
    message: string
}

export async function POST(request:Request) {
    const data:Props = await request.json()
    const {email, message, name} = data
    console.log(name, email, message)
    return NextResponse.json({name, email, message})
}