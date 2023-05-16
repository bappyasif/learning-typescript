import { personName } from "./types"

// type listType = {
//   lists: {
//     fN: string,
//     lN: string
//   }[]
// }

type personListTypes = {
  lists: personName[]
}

export const PersonList = (props: personListTypes) => {
  console.log(props.lists)
  return (
    <>
      <div>PersonList</div>
      {/* {props.lists.map(item => <span key={item..fN}>{item.fN} {item.lN}</span>)} */}
      {props.lists.map(item => <span key={item.fName}>{item.fName} {item.lName}</span>)}
    </>
  )
}
