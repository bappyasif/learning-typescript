import { ChangeEvent, ReactNode, useReducer } from "react"

const initState = {
    count: 0,
    text: ""
}

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
    INCREMENT_BY_AMOUNT,
    DECREMENT_BY_AMOUNT
}

type ReducerActionType = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
    amount?: number
}

const reducer = (state: typeof initState, action: ReducerActionType): typeof initState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.INCREMENT_BY_AMOUNT:
            return { ...state, count: state.count + (action.amount ?? 2)}
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
            case REDUCER_ACTION_TYPE.DECREMENT_BY_AMOUNT:
                return { ...state, count: state.count - (action.amount ?? 2)}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            // using null colascing to tell ts that if empty pass an empty string
            return { ...state, text: action.payload ?? '' }
        default:
            throw new Error("no matched case found")
    }
}

type ChildrenType = {
    children: (count: number) => ReactNode
}

export const WithUseReducerHook = ({ children }: ChildrenType) => {
    const [state, dispatch] = useReducer(reducer, initState)
    const handleIncrement = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const handleDecrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
    const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value })
    const handleIncrementByAmount = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT_BY_AMOUNT, amount: 4 })
    const handleDecrementByAmount = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT_BY_AMOUNT, amount: 4 })
    return (
        <div>
            <h2>{children(state.count)}</h2>
            <button onClick={handleIncrement}>incr</button>
            <button onClick={handleDecrement}>decr</button>
            <input type="text" onChange={handleTextInput} />
            <h2>{state.text}</h2>
            <button onClick={handleIncrementByAmount}>incrBy</button>
            <button onClick={handleDecrementByAmount}>decrBy</button>
        </div>
    )
}
