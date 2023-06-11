import { Header } from "./components/Header"
import { Intro } from "./components/Intro"

function App() {
  const content = (
    <div className='w-full'>
      <Header />
      <Intro />
    </div>
  )
  return content
}

export default App
