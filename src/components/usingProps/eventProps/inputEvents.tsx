type propsTypes = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputEvents = (props: propsTypes) => {
    const handleChangeInComp = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event.target.value, "!!")
    
    return (
        <>
            <div>InputEvents</div>
            <input type="text" value={props.value} onChange={props.handleChange} />
            <input type="text" value={props.value} onChange={handleChangeInComp} />
        </>
    )
}
