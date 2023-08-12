import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const secret = req.nextUrl.searchParams.get("secret");

    if (secret !== process.env.SECRET) {
        return new NextResponse(JSON.stringify({ msg: "invalid token" }), {
            status: 401,
            statusText: "Unauthorized access",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    const path = req.nextUrl.searchParams.get("path") || "/"
    revalidatePath(path)

    return NextResponse.json({ revalidated: true })
}