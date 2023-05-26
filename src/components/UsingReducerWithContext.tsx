import { useCounter, useCounterText } from "../context/CounterCtx"

type childrenProp = {
    children: (count: number) => React.ReactNode
}

export const UsingReducerWithContext = ({ children }: childrenProp) => {
    // const {state, handleIncrement, handleDecrement, handleTextInput} = useCounterContext(initialState)
    const {count, handleIncrement, handleDecrement} = useCounter()
    const {text, handleTextInput} = useCounterText()
    return (
        <>
            <div>UsingReducerAndContext</div>
            <h2>{children(count)}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <input type="text" onChange={handleTextInput} />
            <h2>{text}</h2>
        </>
    )
}