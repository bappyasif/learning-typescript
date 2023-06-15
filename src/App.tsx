import { About } from "./components/About"
import { Additionals } from "./components/Additionals"
import { Header } from "./components/Header"
import { Intro } from "./components/Intro"
import { MessageMe } from "./components/Message"
import { Portfolio } from "./components/Portfolio"

function App() {
  const content = (
    <div className='w-full'>
      <Header />
      <Intro />
      <About />
      <Portfolio />
      <Additionals />
      <MessageMe />
    </div>
  )
  return content
}

export default App
