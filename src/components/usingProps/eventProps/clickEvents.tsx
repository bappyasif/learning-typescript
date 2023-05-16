type propTypes = {
    clickEvent: () => void,
    clickAccessEventValue?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    clickEventWithParam: (event: React.MouseEvent<HTMLButtonElement>, test: number) => void
}

const ClickEvents = (props: propTypes) => {
  return (
    <>
    <div>ClickEvents</div>
    <button onClick={props.clickEvent}>Click Me!!</button>
    <button onClick={props.clickAccessEventValue}>Click Me For Value!!</button>
    <button onClick={e => props.clickEventWithParam(e, 20)}>Click Me For Value!!</button>
    </>
  )
}

export default ClickEvents