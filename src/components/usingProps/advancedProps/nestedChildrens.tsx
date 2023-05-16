type propsTypes = {
    children: React.ReactNode,
    optional?: string
}

export const NestedChildrens = (props: propsTypes) => {
    // to be more safe
    const {optional = "default option"} = props
    return (
        <>
            <div>NestedChildrens -- {props.optional} -- {optional}</div>
            {props.children}
        </>
    )
}
