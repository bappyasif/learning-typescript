
import { useState } from "react"
import { Counter } from "./components/Counter"
import { VariationWithPropsRecieved } from "./components/Counter/VariationWithPropsRecieved"
import { Heading } from "./components/Heading"
import { Section } from "./components/Section"
import { List } from "./components/Generics"
import ReactHooks from "./components/ReactHooks"
import UsingReducers from "./components/hookUseReducer"

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      {/* <h1>letss gooooo</h1> */}
      <Heading title="lets goooo" />
      <Section>
        <p>This is section children</p>
      </Section>
      <Section title="Different Title">
        <p>Another section children here</p>
      </Section>
      <Counter />
      {/* an example to show how setState function can be passed down to children components along with children */}
      <VariationWithPropsRecieved setCount={setCount}>
        <h1>Count Is: {count}</h1>
      </VariationWithPropsRecieved>

      {/* Generic List */}
      <List
        items={["coffee", "code"]}
        render={(item) => <span className="gold bold">{item}</span>}
      />

      <ReactHooks />

      <UsingReducers />
    </>
  )
}

export default App
