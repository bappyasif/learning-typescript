import { useOnlyCounterHook, useOnlyUserInputChangeHook } from "../context/CounterContext"

type ChildrenType = {
    children: (count: number) => React.ReactNode
}

export const UsingReducerAndContext = ({ children }: ChildrenType) => {
    const {count, handleIncrement, handleDecrement} = useOnlyCounterHook()
    const {text, handleUserTextInput} = useOnlyUserInputChangeHook()
    return (
        <>
            <h2>{children(count)}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <input type="text" onChange={handleUserTextInput} />
            {text}
        </>
    )
}
