import { ReactNode } from "react"
import { useCounter, useTextChange } from "./hooks"

type ChildrenType = {
    children: (count: number) => ReactNode
}

export const WithUseReducerHook = ({ children }: ChildrenType) => {
    const {count, handleIncrement, handleDecrement} = useCounter()
    const {text, handleTextInput} = useTextChange()

    // const handleIncrementByAmount = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT_BY_AMOUNT, amount: 4 })
    // const handleDecrementByAmount = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT_BY_AMOUNT, amount: 4 })
    
    return (
        <div>
            <h2>{children(count)}</h2>
            <button onClick={handleIncrement}>incr</button>
            <button onClick={handleDecrement}>decr</button>
            <input type="text" onChange={handleTextInput} />
            <h2>{text}</h2>
            {/* <button onClick={handleIncrementByAmount}>incrBy</button>
            <button onClick={handleDecrementByAmount}>decrBy</button> */}
        </div>
    )
}
