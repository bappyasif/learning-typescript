import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

export const revalidate = 0

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
