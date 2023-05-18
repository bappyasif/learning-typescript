import './App.css'
import { TryingPolymorphism } from './components/polymorphic/Test'
import { TryingMoreRefinedPolymorphism } from './components/polymorphic/Test2'
import CounterWithClassComponent from './components/usingClass/Counter'
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
import { Private } from './components/usingProps/componentProps/Private'
import { Secret } from './components/usingProps/componentProps/Secret'
import ClickEvents from './components/usingProps/eventProps/clickEvents'
import { InputEvents } from './components/usingProps/eventProps/inputEvents'
import { GetFromAnotherComponent } from './components/usingProps/extractingProps/GetFromAnotherComponent'
import { GenericList } from './components/usingProps/genericProps/List'
import { BasicExample } from './components/usingProps/restrictiveProps/BasicExample'
import { BasicExampleWithRestrictions } from './components/usingProps/restrictiveProps/BasicExampleWithRestriction'
import { StyleProps } from './components/usingProps/styleProps'
import { RestrictiveToast } from './components/usingTemplateLiterals/RestrictiveToast'
import { ToastPlain } from './components/usingTemplateLiterals/ToastPlain'
import { ButtonVariant } from './components/wrappingHtmlElements/ButtonVariant'
import { CustomInput } from './components/wrappingHtmlElements/CustomInput'
import { RestrictiveButton } from './components/wrappingHtmlElements/RestrictiveButton'

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
        styles={{ fontSize: "40px" }}
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
      <CounterWithClassComponent message='Count Is: ' />

      <Private isLoggedIn={true} component={Secret} />

      {/* <GenericList
        items={["apples", "sinnasappels", "druiven", "bananen"]}
        clickHandler={item => console.log(item, "clicked!!")}
      />

      <GenericList
        items={[22, 33, 44, 55]}
        clickHandler={item => console.log(item, "clicked!!")}
      /> */}

      <GenericList
        items={[
          {id: 11, name: "ab"}, {id: 22, name: "AB"}
        ]}
        clickHandler={item => console.log(item, "clicked!!")}
      />

      <BasicExample value={22} isPositive isNegative isZero />
      <BasicExampleWithRestrictions value={22} isPositive />
      <BasicExampleWithRestrictions value={22} isNegative />
      {/* <BasicExampleWithRestrictions value={22} isNegative isZero={true} /> */}

      <ToastPlain position='center - center' />
      <RestrictiveToast position='center' />

      {/* <ButtonVariant variant='primary' /> */}
      <ButtonVariant variant='secondary' onClick={() => console.log("clicked!!")}>Special</ButtonVariant>
      <CustomInput />
      <RestrictiveButton variant='secondary' onClick={() => console.log("clicked!!")}>
        Valid As Type String
        {/* <div>Invalid as Type Is Not A String</div> */}
      </RestrictiveButton>

      <GetFromAnotherComponent counts={22} test='ttys' isLoggedIn={true} />

      <TryingPolymorphism as="h1" size='lg' color='primary'>
        Heading
      </TryingPolymorphism>
      <TryingPolymorphism as="p" size='md' color='primary'>
        Paragraph
      </TryingPolymorphism>
      <TryingPolymorphism as="label" size='sm' color='primary'>
        Label
      </TryingPolymorphism>

      <TryingMoreRefinedPolymorphism as={"h1"} size='lg'>
        Heading Another
      </TryingMoreRefinedPolymorphism>
      <TryingMoreRefinedPolymorphism as={"p"} size='md'>
        Paragraph Another
      </TryingMoreRefinedPolymorphism>
      <TryingMoreRefinedPolymorphism as={"label"} htmlFor="someID" size='sm'>
        Label Another
      </TryingMoreRefinedPolymorphism>
    </>
  )
}

export default App
