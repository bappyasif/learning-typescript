import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

// export const revalidate = 0
export const revalidate = 86400 // one day

export default function Home() {
  // const router = useRouter()

  // useEffect(() => {
  //   router.refresh()
  // }, [])

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  )
}
