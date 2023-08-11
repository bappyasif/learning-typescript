import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

type Props = {
    params: {
        id: string
    }
}

export async function GET(request: Request, {params:{id}}: Props) {
    // const id = request.url.slice(request.url.lastIndexOf("/") + 1) // this will get any id value
    
    const resp = await fetch(`${DATA_SOURCE_URL}/${id}`)
    
    const data:Todo = await resp.json()
    
    if(!data.id) return NextResponse.json({msg: `todo item with id ${id} is not found`})
    
    return NextResponse.json({data})
}