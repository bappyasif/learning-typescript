type ptype = {
    pname: {
        fName: string,
        lName: string
    }
}

export const Person = (props: ptype) => {
  return (
    <div>Name: {props.pname.fName} {props.pname.lName}</div>
  )
}
