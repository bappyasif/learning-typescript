import './App.css'
import { BasicPropTypes } from './components/basicPropTypes'
import { Person } from './components/person'
import { PersonList } from './components/personList'

function App() {
  const demoPerson = {
    fName: "a", lName: "b"
  }

  const lists = [
    {fN: "a", lN:"b"},
    {fN: "A", lN:"B"}
  ]

  return (
    <>
      <BasicPropTypes test="test prop" counts={20} isLoggedIn={false} />
      <Person pname={demoPerson} />
      <PersonList lists={lists} />
    </>
  )
}

export default App
