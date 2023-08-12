import Todo from "./Todo"
import fetchTodos from "@/lib/fetchTodos"
// import { useRouter } from "next/navigation"
// import { useEffect } from "react"

// export const dynamic = 'force-dynamic'

export default async function TodoList() {
    const todos = await fetchTodos()

    // const router = useRouter()

    const sortedTodos = todos.reverse()

    // useEffect(() => {
    //     router.refresh()
    // }, [])

    const content = (
        <>
            {sortedTodos.map(todo => (
                <Todo key={todo.id} {...todo} />
            ))}
        </>
    )

    return content
}