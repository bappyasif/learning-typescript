import { useReducer, useState } from "react"

const initialState = { count: 0 }

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE
}

const reducer = (state: typeof initialState, action: ReducerAction): typeof initialState => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT:
            return { ...state, count: state.count + 1 }
        case REDUCER_ACTION_TYPE.DECREMENT:
            return { ...state, count: state.count - 1 }
        default:
            throw new Error("action type didnt match")
    }
}

type childrenProp = {
    children: (count: number) => React.ReactNode
}

export const UsingReducer = ({ children }: childrenProp) => {
    const [state, dispatch ] = useReducer(reducer, initialState)
    const handleIncrement = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT})
    const handleDecrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
    return (
        <>
            <div>UsingReducerAndContext</div>
            <h2>{children(state.count)}</h2>
            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
        </>
    )
}

// before using usereducer hook
// export const UsingReducerAndContext = ({ children }: childrenProp) => {
//     const [count, setCount] = useState<number>(1);
//     const handleIncrement = () => setCount(prev => prev + 1)
//     const handleDecrement = () => setCount(prev => prev - 1)
//     return (
//         <>
//             <div>UsingReducerAndContext</div>
//             <h2>{children(count)}</h2>
//             <button onClick={handleIncrement}>increment</button>
//             <button onClick={handleDecrement}>decrement</button>
//         </>
//     )
// }
