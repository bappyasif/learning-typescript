import { NextResponse } from "next/server"

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const SECRET_KEY:string = process.env.DATA_SECRET_KEY as string

// export async function GET() {
//     const resp = await fetch(DATA_SOURCE_URL)
//     const data:Todo[] = await resp.json()
//     return NextResponse.json({data})
// }

export async function GET(request: Request) {
    const origin = request.headers.get('origin')

    const res = await fetch(DATA_SOURCE_URL)

    const todos: Todo[] = await res.json()

    return new NextResponse(JSON.stringify(todos), {
        headers: {
            'Access-Control-Allow-Origin': origin || "*",
            'Content-Type': 'application/json',
        }
    })
}


export async function DELETE(request:Request) {
    const {id}:Partial<Todo> = await request.json()
    
    if(!id) return NextResponse.json({msg: "todo id not found!!"})

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "API-Key": SECRET_KEY
        }
    })

    return NextResponse.json({msg: `todo item ${id} is now deleted!!`})
}

export async function POST (request: Request) {
    const {userId, title} = await request.json()

    if(!(userId && title)) {
        return NextResponse.json({msg: "Required parameters are missing...."})
    }

    const resp = await fetch(DATA_SOURCE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "API-Key": SECRET_KEY
        },
        body: JSON.stringify({userId, title, completed: false})
    })

    const newTodo: Todo = await resp.json()

    return NextResponse.json({msg: "new todo item added to list", data: newTodo})
}

export async function PUT (request:Request) {
    const {id, userId, title, completed} = await request.json()

    if(!(id && userId && title && typeof completed === "boolean")) {
        return NextResponse.json({msg: "Required parameters are missing...."})
    }

    const resp = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "API-Key": SECRET_KEY
        },
        body: JSON.stringify({userId, title, completed})
    })

    const updatedTodo: Todo = await resp.json()

    return NextResponse.json({msg: `updated todo ${id}`, updatedTodo})
}