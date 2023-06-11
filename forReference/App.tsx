import { useState } from "react"
import { Cart } from "./components/Cart"
import { Products } from "./components/Products"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false)

  const mainContent = viewCart ? <Cart /> : <Products />

  const pageContent = (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {mainContent}
      <Footer viewCart={viewCart} />
    </>
  )

  return pageContent

  // return (
  //   <div className='app'>
  //     <h1>lettssss gooooooo</h1>
  //     {pageContent}
  //   </div>
  // )
}

export default App
