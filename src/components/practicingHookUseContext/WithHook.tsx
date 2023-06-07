import { ReactNode } from "react"
import { useCounter, useHandleText } from "./hooks"

type ChildrenType = {
    children: (count: number) => ReactNode
}

export const WithUseReducerHook = ({ children }: ChildrenType) => {
    const {count, handleIncrement, handleDecrement, handleDecrementByAmount, handleIncrementByAmount} = useCounter()
    
    const {text, handleTextInput} = useHandleText()

    return (
        <div>
            <h2>{children(count)}</h2>
            <button onClick={handleIncrement}>incr</button>
            <button onClick={handleDecrement}>decr</button>
            <input type="text" onChange={handleTextInput} />
            <h2>{text}</h2>
            <button onClick={handleIncrementByAmount}>incrBy</button>
            <button onClick={handleDecrementByAmount}>decrBy</button>
        </div>
    )
}
