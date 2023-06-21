import { UIEvent } from "react"
import { About } from "./components/About"
import { Additionals } from "./components/Additionals"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Intro } from "./components/Intro"
import { MessageMe } from "./components/Message"
import { Portfolio } from "./components/Portfolio"
import { useOnPageScroll } from "./hooks"

function App() {

  // const handleScroll = (e: UIEvent<HTMLElement>) => {
  //   // console.log(document.body.clientHeight, screen.availHeight, screen.height)
  //   console.log(e.currentTarget.clientHeight, "?!?!??!")
  // }

  const { scrolled } = useOnPageScroll()

  console.log(scrolled, "scrolled")

  const content = (
    <>
      <div
        style={{
          height: "4px",
          background: "red",
          width: `${scrolled}%`,
          position: "fixed",
          zIndex: "40",
          scrollBehavior: "smooth"
        }}
      ></div>

      <div className='App w-3/4 h-screen mx-auto'
      // onScroll={(e) => console.log("foknay", e.currentTarget.clientHeight)} 
      // onScroll={handleScroll}
      // onScrollCapture={handleScroll}
      // style={{
      //   border: '3px solid black',
      //   // width: '400px',
      //   height: '100%',
      //   // overflow: 'scroll',
      // }}
      >
        <div className="flex flex-col gap-20 py-4">
          <Header />
          <Intro />
          <About />
          <Portfolio />
          <Additionals />
          <MessageMe />
          <Footer />
        </div>
      </div>
    </>
  )

  return content
}

export default App
