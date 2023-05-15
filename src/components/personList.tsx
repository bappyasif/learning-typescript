type listType = {
    lists: {
        fN: string,
        lN: string
    }[]
}
export const PersonList = (props: listType) => {
  return (
    <>
    <div>PersonList</div>
    {props.lists.map(item => <span key={item.fN}>{item.fN} {item.lN}</span>)}
    </>
  )
}
