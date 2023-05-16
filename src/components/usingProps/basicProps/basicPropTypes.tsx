type basicProps = {
  test: string,
  counts: number,
  isLoggedIn: boolean
}

export const BasicPropTypes = (props: basicProps) => {
  return (
    <>
    <h1>BaiscPropTypes</h1>
    <h2>{props.isLoggedIn ? "Welcome AB" : "Welcome Guest"}</h2>
    <h2>{props.test}</h2>
    <h2>{props.counts}</h2>
    </>
  )
}
