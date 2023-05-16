import { personType } from "./types"

// type ptype = {
//     pname: {
//         fName: string,
//         lName: string
//     }
// }

export const Person = (props: personType) => {
  return (
    <div>Name: {props.pname.fName} {props.pname.lName}</div>
  )
}
