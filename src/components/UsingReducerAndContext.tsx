import { useReducer } from "react"

const initialState = { count: 0, text: "" }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    USER_INPUT,
    INCR_BY,
    DECR_BY
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
    amount?: number
}

const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        case REDUCER_ACTION_TYPE.USER_INPUT:
            // return { ...state, text: action.payload }
            // null calescing, if it s empty give it value of empty string
            return { ...state, text: action.payload ?? "" }
        case REDUCER_ACTION_TYPE.INCR_BY:
            return { ...state, count: state.count + (action.amount ?? 1) }
        case REDUCER_ACTION_TYPE.DECR_BY:
            return { ...state, count: state.count - (action.amount ?? 1) }
        default:
            throw new Error("action type didnt match")
    }
}

type childrenProp = {
    children: (count: number) => React.ReactNode
}

export const UsingReducerVersionTwo = ({ children }: childrenProp) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const handleIncrement = () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })
    const handleDecrement = () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })
    const handleTextInput = (evt: React.ChangeEvent<HTMLInputElement>) => dispatch({ type: REDUCER_ACTION_TYPE.USER_INPUT, payload: evt.target.value })
    const handleIncrementByAmount = () => dispatch({type: REDUCER_ACTION_TYPE.INCR_BY, amount: 2})
    const handleDecrementByAmount = () => dispatch({type: REDUCER_ACTION_TYPE.DECR_BY, amount: 2})

    return (
        <>
            <div>UsingReducerAndContext</div>
            <h2>{children(state.count)}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrementByAmount}>INCR BY 2</button>
            <button onClick={handleDecrementByAmount}>DECR BY 2</button>
            <input type="text" onChange={handleTextInput} />
            <h2>{state.text}</h2>
        </>
    )
}