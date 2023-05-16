type propsTypes = {
    // children: never[]
    // children: string
    // children: Element
    children: JSX.Element
}

export const PassingChildren = (props: propsTypes) => {
    return (
        <>
            <div>PassingChildren</div>
            {props.children}
        </>
    )
}
