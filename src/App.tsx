import { useState } from "react"
import { Counter, SimpleCounter } from "./components/Counter"
import Heading from "./components/Heading"
import Section from "./components/Section"
import { GenericsList } from "./components/GenericsList"
import { UsingHooks } from "./components/UsingHooks"
import { UsingReducer } from "./components/UsingReducer"
import { UsingReducerVersionTwo } from "./components/UsingReducerAndContext"

function App() {
  const [count, setCount] = useState<number>(1)

  // const inputRef = useRef<HTMLInputElement>(null)
  // console.log("el", inputRef.current)
  // console.log("val", inputRef.current?.value)

  return (
    <>
      <Heading title="Hello" />
      <Section title="Different Sub-heading">Some Subheading Text Here!!</Section>
      <Counter />
      <br />
      <SimpleCounter setCount={setCount}>Count Is : {count}</SimpleCounter>
      <br />
      <GenericsList items={["coffee", "nuts", "workouts", "code"]} render={(item) => <span className="bold">{item}</span>} />
      <UsingHooks />
      {/* <input ref={inputRef} type="text" /> */}

      <UsingReducer>
        {(count: number) => <>Current Count : {count}</>}
      </UsingReducer>

      <UsingReducerVersionTwo>
        {(count: number) => <>Current Count : {count}</>}
      </UsingReducerVersionTwo>
    </>
  )
}

export default App
