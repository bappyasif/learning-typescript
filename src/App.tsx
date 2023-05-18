import './App.css'
import { Box } from './components/usingHooks/contexts/Box'
import { ThemeContextProvider } from './components/usingHooks/contexts/ctxProvider'
import { User } from './components/usingHooks/contexts/withFutureValue/User'
import { UserContextProvider } from './components/usingHooks/contexts/withFutureValue/UserContext'
import { CounterExample } from './components/usingHooks/reducers/counterExample'
import { DomRef } from './components/usingHooks/refs/DomRef'
import { MutableRef } from './components/usingHooks/refs/MutableRef'
import { TimerWithMutableRef } from './components/usingHooks/refs/TimerWithMutableRef'
import { AuthedUser } from './components/usingHooks/states/AuthedUser'
import { TypeAssertion } from './components/usingHooks/states/TypeAssertion'
import { StateHooks } from './components/usingHooks/states/stateHooks'
import { NestedChildrens } from './components/usingProps/advancedProps/nestedChildrens'
import { PassingChildren } from './components/usingProps/advancedProps/passingChildren'
import { AdvancedPropTypes } from './components/usingProps/advancedProps/propsUnions'
import { BasicPropTypes } from './components/usingProps/basicProps/basicPropTypes'
import { Person } from './components/usingProps/basicProps/person'
import { PersonList } from './components/usingProps/basicProps/personList'
import ClickEvents from './components/usingProps/eventProps/clickEvents'
import { InputEvents } from './components/usingProps/eventProps/inputEvents'
import { StyleProps } from './components/usingProps/styleProps'

function App() {
  const demoPerson = {
    fName: "a", lName: "b"
  }

  // const lists = [
  //   { fN: "a", lN: "b" },
  //   { fN: "A", lN: "B" }
  // ]

  const lists = [
    { fName: "a", lName: "b" },
    { fName: "A", lName: "B" }
  ]

  return (
    <>
      <BasicPropTypes test="test prop" counts={20} isLoggedIn={false} />
      <Person pname={demoPerson} />
      <PersonList lists={lists} />
      <AdvancedPropTypes status='Success' />
      <PassingChildren>
        <>
          <h2>Passed Children</h2>
          <h2>Passed Children -- 2</h2>
        </>
      </PassingChildren>
      <NestedChildrens optional='Optional Props'>
        <PassingChildren>
          <h2>Lets Goooooo</h2>
        </PassingChildren>
      </NestedChildrens>

      <ClickEvents
        clickEvent={() => console.log("button clicked!!")}
        clickAccessEventValue={e => console.log(e.target)}
        clickEventWithParam={(e, params) => console.log(e.target, params)}
      />

      <InputEvents
        value='test'
        handleChange={e => console.log(e.target.value)}
      />

      <StyleProps 
        styles={{fontSize: "40px"}}
      />

      <StateHooks />
      <AuthedUser />
      <TypeAssertion />
      <CounterExample />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>

      <DomRef />
      <MutableRef />
      <TimerWithMutableRef />
    </>
  )
}

export default App
